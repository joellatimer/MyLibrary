const express = require("express")
const {engine} = require("express-handlebars")
const bodyParser = require("body-parser") 
const mysql = require('mysql')


require("dotenv").config()

const app = express()
const port = 5000


app.use(bodyParser.urlencoded({extended: false}))

app.use(bodyParser.json())

app.use(express.static('public'))


app.engine("hbs", engine({extname: '.hbs'}))

app.set('view engine', 'hbs')



const routes = require("./server/routes/books.js")
  
app.use('/',routes) 

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})