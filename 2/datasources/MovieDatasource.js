const axios = require('axios');
const MovieModel = require('../models/MovieModel');

class MovieDatasource {
    constructor(){
        // 
    }
    
    async search(param){
        try{
            const res = 
            await axios.get('http://www.omdbapi.com/', {
                params: {
                    apikey: param.apikey,
                    s: param.s,
                    type: param.type || "",
                    y: param.year || "",
                    r: param.r || "json",
                    page: param.page || "1",
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
                    apikey: param.apikey,
                    i: param.i || "",
                    t: param.t || "",
                    type: param.type || "",
                    y: param.y || "",
                    r: param.r || "json",
                    plot: param.plot || "short",
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