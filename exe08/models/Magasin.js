const mongoose = require('mongoose')
const schema =new mongoose.Schema({
    name :{
        type:String,
        required:'Thanks to introduce a name'
    },
    slug:{
        type:String,
        trim:true
    },
    description:{
        type:String
    }
})
module.exports = mongoose.model('Magasin',schema)