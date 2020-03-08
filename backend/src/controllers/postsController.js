const postsCtrl = {}

postsCtrl.createPost = (req, res) => {
    res.json('Post Created')
}

postsCtrl.getUPosts = (req, res) => {
    res.json('User Posts in Intervals')
}

postsCtrl.getAllPosts = (req, res) => {
    res.json('All Posts in Intervals')
}

module.exports = postsCtrl;