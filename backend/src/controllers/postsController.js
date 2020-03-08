const postsCtrl = {}

const Post = require('../models/Posts');

postsCtrl.createPost = async (req, res) => {
    const {user, file, description} = req.body;
    const newPost = new Post({
        user,
        file,
        description
    })
    await newPost.save()
    res.json('Post Created');
}

postsCtrl.likePost = async (req, res) => {
    const {user} = req.body;
    const newLike = await Post.findOneAndUpdate(
        {
            "_id":req.params.id
        },
        {           
            $addToSet: 
            {
                "likes": user

            }
        }
    )
    res.json("Post Liked");
}

postsCtrl.getUPosts = (req, res) => {
    res.json('User Posts in Intervals');
}

postsCtrl.getAllPosts = async (req, res) => {
    const posts = await Post.find();
    res.json(posts);
}

module.exports = postsCtrl;