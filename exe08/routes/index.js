const express = require('express')
const router = express.Router()
const pagesController = require(`${process.cwd()}/controllers/pagesController`)
const userController = require(`${process.cwd()}/controllers/userController`)
const magasinsController = require(`${process.cwd()}/controllers/magasinsController`)
const authenticationController = require(`${process.cwd()}/controllers/authenticationController`)
router.get('/', pagesController.home)
router.get('/magasins/add', authenticationController.isLoggedIn,magasinsController.addMagasin)
router.get('/magasins/:slug', magasinsController.getMagasinBySlug)
router.get('/magasins/:id/edit',magasinsController.editMagasin)
router.get('/login',userController.loginForm)
router.get('/register',userController.registerForm)
router.post('/magasins/add', 
    magasinsController.upload,
    magasinsController.resize,
    magasinsController.createMagasin)

router.post('/magasins/add/:id', 
    magasinsController.upload,
    magasinsController.resize,
    magasinsController.updateMagasin)
router.get('/about', pagesController.about)

router.post('/login', authenticationController.login)
router.get('/logout', authenticationController.logout)

router.post('/register', userController.validateRegister,userController.register)
module.exports = router