const {Router} = require('express');
const router = Router();

const {getUPosts, getAllPosts, createPost, likePost} = require('../controllers/postsController');

router.post('/',createPost);

router.put('/:id',likePost);

router.get('/:id/:interval', getUPosts);

router.get('/:interval', getAllPosts);

module.exports = router;

