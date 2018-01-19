exports.home = (req,res)=>{
    res.render('home',{title:'Ma home Page',test:'ceci est un test'})
}

exports.about = (req,res)=>{
    res.render('about',{title:'Ma About Page',test:'ceci est un test'})
}