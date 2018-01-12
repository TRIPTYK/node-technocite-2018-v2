const fs = require('fs')
module.exports = (req,res) =>{
    console.log('ok')
    fs.readFile(`${process.cwd()}/templates/about.html`, { encoding: 'utf-8' }, (err, data) => {
        res.end(data)
    })
}
