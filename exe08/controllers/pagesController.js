const mongoose = require('mongoose')
const Magasin = mongoose.model('Magasin')
exports.home = async (req,res)=>{
    const magasins = await Magasin.find()
    res.render('home',{title:'Ma home Page',magasins:magasins})
}

exports.about = (req,res)=>{
    res.render('about',{title:'Ma About Page',test:'ceci est un test',layout:'layouts/landing'})
}