const mongoose = require('mongoose')
const Magasin = mongoose.model('Magasin')
const multer = require('multer')
const jimp = require('jimp')
const uuid = require('uuid')
exports.addMagasin=(req,res)=>{
    res.render('magasin_edit',{"magasin":{}})
}

exports.createMagasin=async(req,res)=>{
    const magasin = await new Magasin(req.body).save()
    res.redirect('/')
}

exports.getMagasinBySlug = async (req,res) =>{
    const magasin = await Magasin.findOne({slug : req.params.slug})
    res.render('magasin_details',{"magasin":magasin})
}

exports.editMagasin = async (req,res) => {
    const magasin = await Magasin.findOne({_id:req.params.id})
    if(!magasin) return next()
    res.render('magasin_edit',{"magasin":magasin})
}
exports.updateMagasin = async (req,res) => {
    const magasin = await Magasin.findByIdAndUpdate({_id : req.params.id},req.body,{new:true}).exec()
    res.redirect(`/magasins/${magasin.slug}`)
}

const multerOptions = {
    storage: multer.memoryStorage(),
    fileFilter(req,file,next){
        const isPhoto = file.mimetype.startsWith('image/')
        if(isPhoto){
            next(null,true)
        } else{
            next({message : 'this filetype is not allowed'})
        }
    }
}

exports.upload = multer(multerOptions).single('photo')
exports.resize = async (req, res, next) =>{
    if(!req.file){
        next();
        return;
    }
    const extension = req.file.mimetype.split('/')[1]
    req.body.photo = `${uuid.v4()}.${extension}`
    const photo = await jimp.read(req.file.buffer)
    await photo.resize(800,jimp.AUTO)
    await photo.write(`${process.cwd()}/public/uploads/${req.body.photo}`)
    next()
}