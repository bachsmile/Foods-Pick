const express = require('express')
const morgan = require('morgan')
const path = require('path')
const hbs  = require('express-handlebars');
const route = require('./routes')

//connect DB

const port = 3001
const app = express()

app.use(morgan('dev'))
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({
  extended : true
}))  
app.use(express.json()) 

route(app);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})  