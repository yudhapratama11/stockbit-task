//Datasource
const MovieDatasource = require('./movieDatasource');

const Datasource = () => ({
    MovieDatasource : new MovieDatasource({})
})

module.exports = Datasource;