const {Schema, model} = require('mongoose');
const bcrypt = require('bcryptjs');

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

userSchema.methods.encryptPass = async (password)=>{
  const salt = await  bcrypt.genSalt(10);
  return bcrypt.hash(password,salt);
}

userSchema.methods.validatePass = async function(password){
  return bcrypt.compare(password, this.password)
}

module.exports = model('user', userSchema);