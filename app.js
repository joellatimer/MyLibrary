const express = require("express")
const {engine} = require("express-handlebars")
const bodyParser = require("body-parser") 
const mysql = require('mysql')


require("dotenv").config()

const app = express()
const port = 5000

const pool = mysql.createPool({
  connectionLimit: 100,
  host     : '167.114.119.200',
  password :'t8zxBJmvFw:zf8boy2j56:TnXVT9jCvb',
  database : 'library',
  port : 2394,
  user: 'root'

})

pool.getConnection((err, connection)=> {
  if(err) throw err
  console.log("Connected as ID" + connection.threadId)
})

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