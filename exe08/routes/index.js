const express = require('express')
const router = express.Router()
const pagesController = require(`${process.cwd()}/controllers/pagesController`)
const magasinsController = require(`${process.cwd()}/controllers/magasinsController`)
router.get('/', pagesController.home)
router.get('/magasins/add', magasinsController.addMagasin)
router.get('/magasins/:slug', magasinsController.getMagasinBySlug)

router.post('/magasins/add', 
    magasinsController.upload,
    magasinsController.resize,
    magasinsController.createMagasin)
router.get('/about', pagesController.about)

module.exports = router