const fs = require('fs')
let values = []
module.exports = {
    init: (file, action, value) => {
        fs.readFile(file, (err, data) => {
            values = (data.toString().split('\n'))
            if (action === 'add') {
                add(value, file)
            } else { remove(value, file) }
        })
    }
}

const add = (value, file) => {
    values.push(value)
    save(file)
}
const remove = (value, file) => {
    //
}
const save = (file) => {
    let tempStr = values.reduce((prev, current) => {
        return `${prev}\n${current}`
    })
    fs.writeFile(file, tempStr, (err) => {
        if (err) console.log(err)
        console.log('file saved')
    })
}