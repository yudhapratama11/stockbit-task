//Datasource
const MovieDatasource = require('./movieDatasource');
const { movieDB } = require('../config/movieDB');
const db = movieDB();

const Datasource = () => ({
    MovieDatasource : new MovieDatasource({ db })
})

module.exports = Datasource;