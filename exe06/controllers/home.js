const fs = require('fs')
const promisify = require('es6-promisify')
const read = promisify(fs.readFile)
module.exports = (req, res) => {
    let templatePromise = read(`${process.cwd()}/views/home.html`)
    templatePromise.then(html => {
        res.end(html)
    }).catch(e => {
        console.log(e)
    })
}