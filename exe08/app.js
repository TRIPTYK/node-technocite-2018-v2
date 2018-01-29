const express = require('express')
const app = express()
const routes = require(`${process.cwd()}/routes`)
const hbs = require('express-hbs')
const bodyParser = require('body-parser')
const helpers = require(`${process.cwd()}/helpers`)
const expressValidator = require('express-validator')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const sessionStore = new session.MemoryStore
const passport = require('passport')
const mongoose = require('mongoose')
const User = mongoose.model('User')
//view engine setup
app.engine('hbs',hbs.express4({
    partialsDir : [`${__dirname}/views/partials`],
    defaultLayout : `${__dirname}/views/layouts/main.hbs`
}))
app.set('view engine','hbs')
app.set('views',`${__dirname}/views`)

helpers.registerHelpers(hbs)
//setup static folder for static rendering on my server side
app.use(express.static(`${__dirname}/public`))
//setup express to manage the raw requests and turn them intoo usable properties of req.body
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(expressValidator())
// cookie management
app.use(cookieParser('secret'))
//session management
app.use(session({
    cookie:{maxAge:60000},
    store:sessionStore,
    saveUninitialized:true,
    resave:true,
    secret:'secret'
}))
//init passport
passport.use(User.createStrategy())
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())
app.use(passport.initialize())
app.use(passport.session())

//validator

app.use((req,res,next)=>{
    res.locals.user=req.user
    res.locals.isAuthenticated = req.isAuthenticated()
    next()
})

app.use('/',routes)

module.exports = app