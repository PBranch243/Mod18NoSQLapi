const { User } = require('../models');

const userController = {
  // functions will go here as methods
  //get ALL users
  getAllUser(req, res) {
    User.find({})
      .populate({
        path: 'thoughts',
        select: '-__v'
      })
      .select('-__v')
      .sort({ _id: -1 })
      .then(dbUserData => res.json(dbUserData))
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });
  },
  //get SINGLE user by id
  getUserById({ params }, res) {
    User.findOne({ _id: params.id })
      .populate({
        path: 'thoughts',
        select: '-__v'
      })
      .select('-__v')
      .then(dbUserData => {
        if (!dbUserData) {
          res.status(404).json({ message: 'No user found with this id' });
          return;
        }
        res.json(dbUserData);
      })
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  //post a new user
  // example data
  //   {  "username": "lernantino",
  //     "email": "lernantino@gmail.com }
  createUser({ body }, res) {
    User.create(body)
      .then(dbUserData => res.json(dbUserData))
      .catch(err => res.status(400).json(err));
  },

  //put route to update user by id
  updateUser({ params, body }, res) {
    User.findOneAndUpdate({ _id: params.id }, body, { new: true })
      .then(dbUserData => {
        if (!dbUserData) {
          res.status(404).json({ message: 'No user found with this id' });
          return;
        }
        res.json(dbUserData);
      })
      .catch(err => res.status(400).json(err));
  },

  //delete route to remove user by id
  deleteUser({ params }, res) {
    User.findOneAndDelete({ _id: params.id })
      .then(dbUserData => {
        if (!dbUserData) {
          res.status(404).json({ message: 'No user found with this id' });
          return;
        }
        res.json(dbUserData);
      })
      .catch(err => res.status(400).json(err));
  },

  //route to add friends
  addFriend({ params, body }, res) {
    User.findOneAndUpdate(
      { _id: params.userId },
      { $push: { friends: body } },
      { new: true }
    )
      .then(dbUserData => {
        if(!dbUserData){
          res.status(404).json({ message: 'No user found with that id' });
          return;
        }
        res.json(dbUserData);
      })
      .cath(err => res.json(err));
  },
  //route to remove a friend
  removeFriend({ params }, res) {
    User.findOneAndUpdate(
      { _id: params.userId },
      {$pull: { friends: { friendId: params.friendId }}},
      { new: true }
    )
    .then(dbUserData => res.json(dbUserData))
    .catch(err => res.json(err));
  }

};

module.exports = userController;