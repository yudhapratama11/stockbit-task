const express = require('express');
const app = express();
const cors = require('cors');
const {PORT} = require('./config/config')

//ROUTE FILE
const bodyParser = require('body-parser')
const movie = require('./routes/movieRoutes')

//MIDDLEWARE
app.use(cors());

//ROUTE
app.use('/',movie)

app.listen(PORT, ()=> console.log(`Server listening on PORT ${PORT}`))