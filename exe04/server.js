const http = require('http')

const routes = [
    { url: '/', controller: 'home' },
    { url: '/about', controller: 'about' },
    { url: '/amis', controller: 'amis' }
]
const router = (req, res) => {
    let indexRoute = routes.findIndex(item => item.url === req.url)
    if (indexRoute !== -1) {
        require(`./routes/${routes[indexRoute].controller}`)(req,res)
    } else {
        require('./routes/error')(req,res)
    }
}
http.createServer(router).listen(8000, () => {
    console.log('server running and listening port 8000')
})