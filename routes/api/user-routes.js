const router = require('express').Router();
const {
    getAllUser,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend
} = require('../../controllers/user-controller');

//Set up GET all and POST at /api/users
router
    .route('/')
    .get(getAllUser)
    .post(createUser);

// set up GET one, PUT, and DELETE at /api/users/:userId
router  
    .route('/:id')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser);

// add friend routes at /api/users/:userId/friends/
router
    .route(':id/friends/')
    .put(addFriend);

// remove friend route at /api/user/:userId/friends/:friendId
router
    .route(':id/friends/:friendId')
    .put(removeFriend);

module.exports = router;