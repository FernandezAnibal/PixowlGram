const authCtrl = {}

authCtrl.signUp = (req, res, next) => {
    res.json('singup')
}

authCtrl.signIn = (req, res, next) => {
    res.json('singin')
}

authCtrl.signOut = (req, res, next) => {
    res.json('signout')
}

module.exports = authCtrl;