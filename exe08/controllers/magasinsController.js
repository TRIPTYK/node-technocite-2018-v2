const mongoose = require('mongoose')
const Magasin = mongoose.model('Magasin')
exports.addMagasin=(req,res)=>{
    res.render('magasin_edit',{magasin:{}})
}

exports.createMagasin=async(req,res)=>{
    console.log(req.body)
    const magasin = await new Magasin(req.body).save()
    res.redirect('/')
}

exports.getMagasinBySlug = async (req,res) =>{
    const magasin = await Magasin.findOne({slug : req.params.slug})
    res.render('magasin_details',{magasin:magasin})
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

// exports.upload = 
// exports.resize = 