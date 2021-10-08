const axios = require('axios');
const MovieModel = require('../models/MovieModel');

class MovieDatasource {
    constructor(){
        // 
    }
    
    async search(param){
        try{
            var asd = MovieModel.Responses("dada")
            const res = 
            await axios.get('http://www.omdbapi.com/', {
                params: {
                    apikey: '94e61a2e',
                    s: param.search,
                }
            })
            return res.data
        } catch(err) {
            // console.log(err)
            return "Internal Server Error"
        }
    }

    async detail(param){
        try{
            const res = 
            await axios.get('http://www.omdbapi.com/', {
                params: {
                    apikey: '94e61a2e',
                    i: param.imdb || "",
                    t: param.title || ""
                
                }
            })
            return res.data
        } catch(err) {
            // console.log(err)
            return "Internal Server Error"
        }
    }
}

module.exports = MovieDatasource