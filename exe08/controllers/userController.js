const mongoose = require('mongoose')
const User = mongoose.model('User')
const promisify = require('es6-promisify')
exports.loginForm=(req,res,next) => {
    res.render('login')
}
exports.registerForm=(req,res,next) => {
    res.render('register')
}

exports.validateRegister = (req,res,next) =>{
    req.sanitizeBody('name')
    req.checkBody('name','Vous devez entrez un nom').notEmpty()
    req.checkBody('email','Veuillez entre un email').isEmail()
    req.checkBody('password','Le password est vide et c\' est le mal').notEmpty()
    req.checkBody('password-confirm','La confirmation n\'est pas correcte').notEmpty()
    req.checkBody('password-confirm','La confirmation n\'est pas identique').equals(req.body.password)
    const errors = req.validationErrors()

    if(errors){
        res.render('register', {'user':req.body,'errors':errors})
    }
    else {
        next()
    }


}
exports.register = async (req,res,next) => {
   const user = await new User({email: req.body.email,name:req.body.name})
   const register = promisify(User.register,User)
   try{
    await register(user,req.body.password)
   }catch(e){
       console.log(e)
   }

   next();
}