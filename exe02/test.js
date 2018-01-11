const fs = require('fs')
function readFile(url , cb){
    fs.readFile(url,{encoding:'utf-8'},(err,data)=>{
        if(err) throw err
        cb(err,data,'fdsgfhg',23)
    })
}

function showMsg(){
    console.log(...arguments)
}

readFile('liste.txt',showMsg)