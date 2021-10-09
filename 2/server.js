const express = require('express');
const app = express();
require('dotenv').config()

//ROUTE FILE
const movie = require('./routes/movieRoutes')

//ROUTE
app.use('/',movie)

app.listen(process.env.PORT, ()=> console.log(`Server listening on PORT ${process.env.PORT}`))

module.exports = app;