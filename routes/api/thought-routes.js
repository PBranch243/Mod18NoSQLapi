const router = require('express').Router();
const { removeThought, addThought, updateThought, addReaction, removeReaction, getAllThought, getThoughtById } = require('../../controllers/thought-controller');

// /api/thoughts/
router.route('/').get(getAllThought);

// /api/thoughts/<thoughtId>
router.route('/:thoughtId').get(getThoughtById);

// /api/thoughts/<userId>
router.route('/:userId').post(addThought);

// /api/thoughts/<userId>/<thoughtId>
router.route('/:userId/:thoughtId').delete(removeThought);

// /api/thoughts/<userId>/<thoughtId>
router.route('/:userId/:thoughtId').put(updateThought);

// /api/thoughts/<thoughtId>/reactions
router.route('/:thoughtId/reactions').post(addReaction);

// /api/thoughts//<thoughtId>/<reactionId>
router.route('/:thoughtId/reactions/:reactionId').put(removeReaction);


module.exports = router;