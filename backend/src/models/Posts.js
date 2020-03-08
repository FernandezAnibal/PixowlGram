const {Schema, model} = require('mongoose');

const postSchema = new Schema ({
    user: {
        type:String,
        required: true
    },
    file: {
        type:String,
        required: true,
    },
    description:{
        type:String,
        default: ""
    },
    likes: [String]
},{
    timestamps: true
});

module.exports = model('Post', postSchema);