//Datasource
const MovieDatasource = require('./MovieDatasource');

const Datasource = () => ({
    MovieDatasource : new MovieDatasource({moshubPGDB})
})

module.exports = Datasource;