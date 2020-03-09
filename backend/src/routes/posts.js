const {Router} = require('express');
const router = Router();
const verifyToken = require('../controllers/verifyToken');

const {getUPosts, getAllPosts, createPost, likePost} = require('../controllers/postsController');

router.post('/',createPost);

router.put('/:id',likePost);

router.get('/:id/:interval', verifyToken, getUPosts);

router.get('/:interval', verifyToken, getAllPosts);

module.exports = router;

