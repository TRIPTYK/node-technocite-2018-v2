const fs = require('fs')
const promisify = require('es6-promisify')
const read = promisify(fs.readFile)
const write = promisify(fs.writeFile)
module.exports = (req, res) => {
    if (req.method === 'GET') {
        console.log(req.method)
        let templatePromise = read(`${process.cwd()}/models/books.json`)
        templatePromise.then(json => {
            res.setHeader('Content-type', 'application/json')
            res.end(json)
        }).catch(e => {
            console.log(e)
        })
    } else if (req.method === 'POST') {
        let formData = ''
        req.on('data', ((data) => {
            formData += data
        }))
        req.on('end', () => {
            read(`${process.cwd()}/models/books.json`)
                .then((data) => {
                    let tempArr = JSON.parse(data)
                    let jsonObject = JSON.parse(formData)
                    tempArr.push(jsonObject)
                    write(`${process.cwd()}/models/books.json`,JSON.stringify(tempArr))
                        .then(() => {
                            console.log(tempArr)
                            res.end(JSON.stringify(tempArr))
                        })
                }).catch(e=>{console.log(e)})

        })
    }

}