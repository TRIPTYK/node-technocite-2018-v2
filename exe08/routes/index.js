const express = require('express')
const router = express.Router()
const pagesController = require(`${process.cwd()}/controllers/pagesController`)
const magasinsController = require(`${process.cwd()}/controllers/magasinsController`)
router.get('/', pagesController.home)
router.get('/magasins/add', magasinsController.addMagasin)
router.get('/magasins/:slug', magasinsController.getMagasinBySlug)
router.get('/magasins/:id/edit',magasinsController.editMagasin)
router.post('/magasins/add', 
    magasinsController.upload,
    magasinsController.resize,
    magasinsController.createMagasin)

router.post('/magasins/add/:id', 
    magasinsController.upload,
    magasinsController.resize,
    magasinsController.updateMagasin)
router.get('/about', pagesController.about)

module.exports = router