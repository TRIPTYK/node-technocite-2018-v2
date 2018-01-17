const fs = require('fs')
// fs.readFile(`${process.cwd()}/datas/file1.txt`,(err,data)=>{
//     let allData = ''
//     allData += data
//     fs.readFile(`${process.cwd()}/datas/file2.txt`,(err,data)=>{
//         allData += data 
//         console.log(allData)
//     })
// })
const readFile = (file) => {
    return new Promise((resolve, reject) => {
        fs.readFile(file, { encoding: 'utf-8' }, (err, data) => {
            if (err) reject(err)
            resolve(data)
        })
    })

}

// readFile(`${process.cwd()}/datas/file1.txt`)
//     .then(result => {
//         console.log(result)
//         readFile(`${process.cwd()}/datas/file2.txt`)
//             .then(data => {
//                 console.log(data)
//             }).catch(err => {
//                 console.log(err)
//             })
//     })


// let promise1 = readFile(`${process.cwd()}/datas/file1.txt`)

// let promise2 = readFile(`${process.cwd()}/datas/file2.txt`)

// let promisesArr = [promise1,promise2]
// Promise.all(promisesArr).then(results=>{
//     console.log(results[1])
// }).catch(err =>{
//     console.log(err)
// })

Promise.all([readFile(`${process.cwd()}/datas/file1.txt`), readFile(`${process.cwd()}/datas/file2.txt`)])
    .then(results => {
        console.log(results[1])
    }).catch(err => {
        console.log(err)
    })

