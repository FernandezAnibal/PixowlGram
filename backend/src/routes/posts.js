const {Router} = require('express');
const router = Router();

const {getUPosts, getAllPosts} = require('../controllers/postsController');

router.get('/:id/:interval', getUPosts);

router.get('/:interval', getAllPosts);

module.exports = router;

