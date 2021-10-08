const Datasource = require('../datasources/Datasource');
const asyncHandler = require('../middlewares/async');
const MovieModel = require('../models/MovieModel');

exports.search = asyncHandler(async (req, res, next) => {
    if (!req.query.apikey) 
        return res.status(400).json(MovieModel.ErrorResponse("Should contain api key"))
    if (!req.query.s) 
        return res.status(400).json(MovieModel.ErrorResponse("Should contain query (q) params"))

    const result = await Datasource().MovieDatasource.search(req.query)
    if(result == "Internal Server Error")
        return res.status(500).json(MovieModel.ErrorResponse(result))

    return res.status(200).json(result)
})

exports.detail = asyncHandler(async (req, res, next) => {
    if (!req.query.apikey) 
        return res.status(400).json(MovieModel.ErrorResponse("Should contain api key"))
    if (!req.query.i && !req.query.t) 
        return res.status(400).json(MovieModel.ErrorResponse("Should contain imdb (i) / title (t) params"))

    const result = await Datasource().MovieDatasource.detail(req.query)
    if(result == "Internal Server Error")
        return res.status(500).json(MovieModel.ErrorResponse(result))

    return res.status(200).json(result)
})