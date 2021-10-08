const Datasource = require('../datasources/Datasource');
const asyncHandler = require('../middlewares/async');
const MovieModel = require('../models/MovieModel');

exports.search = asyncHandler(async (req, res, next) => {
    if (!req.query.search) 
        return res.status(400).json(MovieModel.ErrorResponse("Should contain query params"))
        
    const result = await Datasource().MovieDatasource.search(req.query)
    return res.status(200).json(result)
})

exports.detail = asyncHandler(async (req, res, next) => {
    if (!req.query.imdb && !req.query.title) 
        return res.status(400).json(MovieModel.ErrorResponse("Should contain imdb / title params"))

    const result = await Datasource().MovieDatasource.detail(req.query)
    return res.status(200).json(result)
})