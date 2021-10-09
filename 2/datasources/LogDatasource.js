const axios = require('axios');
const MovieModel = require('../models/MovieModel');
const Func = require('../function/Function');

class MovieDatasource {
    constructor(db){
        this.db = db
    }
    
    async createLog(endpoint, param){
        try{
            const sql = `INSERT INTO log (datetime, endpoint, parameters) VALUES (now(), $endpoint, $parameters)`
            const [s, r, m] = await Func.DoQuery(this.db, sql, { endpoint: endpoint, parameters: param})
        } catch(err) {
            return "Internal Server Error"
        }
    }

}

module.exports = MovieDatasource