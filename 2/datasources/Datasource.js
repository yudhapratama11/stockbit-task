//Datasource
const MovieDatasource = require('./MovieDatasource');
const LogDatasource = require('./LogDatasource');
const { movieDB } = require('../config/movieDB');
const db = movieDB();

const Datasource = () => ({
    MovieDatasource : new MovieDatasource({}),
    LogDatasource : new LogDatasource({db})
})

module.exports = Datasource;