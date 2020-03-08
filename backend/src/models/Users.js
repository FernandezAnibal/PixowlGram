const {Schema, model} = require('mongoose');

const userSchema = new Schema ({
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: String,
},{
    timestamps: true
});

module.exports = model('user', userSchema);