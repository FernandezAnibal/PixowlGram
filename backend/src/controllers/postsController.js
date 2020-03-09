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
    let skipN = (req.params.page-1)*6
    let count = await Post.find().countDocuments();
    //TODO verify if count is more than skipN
    skipN = Number.isInteger(skipN) ? Math.abs(skipN) : 0;
    const posts = await Post.find().skip(skipN).limit(6).sort('createdAt');
    res.json(posts);
}

module.exports = postsCtrl;