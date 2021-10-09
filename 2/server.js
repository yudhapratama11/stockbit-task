const express = require('express');
const app = express();
const {PORT} = require('./config/config')
require('dotenv').config()

//ROUTE FILE
const movie = require('./routes/movieRoutes')

//ROUTE
app.use('/',movie)

app.listen(PORT, ()=> console.log(`Server listening on PORT ${PORT}`))