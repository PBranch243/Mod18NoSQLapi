const router = require('express').Router();
const { removeThought, addThought, updateThought, addReaction, removeReaction } = require('../../controllers/thought-controller');

// /api/thoughts/<userId>
router.route('/:userId').post(addThought);

// /api/thoughts/<userId>/<thoughtId>
router.route('/:userId/:thoughtId').delete(removeThought);

// /api/thoughts/<userId>/<thoughtId>
router.route('/:userId/:thoughtId').put(updateThought);

// /api/thoughts/<thoughtId>/reactions
router.route('/:thoughtId/reactions').post(addReaction);

// /api/thoughts//<thoughtId>/<reactionId>
router.route('/:thoughtId/reactions').put(removeReaction);


module.exports = router;