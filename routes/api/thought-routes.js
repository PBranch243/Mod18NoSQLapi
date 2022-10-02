const router = require('express').Router();
const { removeThought, addThought, updateThought } = require('../../controllers/thought-controller');

// /api/thoughts/<userId>
router.route('/:userId').post(addThought);

// /api/thoughts/<userId>/<thoughtId>
router.route('/:userId/:thoughtId').delete(removeThought);

// /api/thoughts/<userId>/thoughtId>
router.route('/:userId/:thoughtId').put(updateThought);

module.exports = router;