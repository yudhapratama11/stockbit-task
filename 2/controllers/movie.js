const Datasource = require('../datasources/Datasource');
const asyncHandler = require('../middlewares/async');
const MovieModel = require('../models/MovieModel');

exports.search = asyncHandler(async (req, res, next) => {
    await Datasource().LogDatasource.createLog(req._parsedUrl.pathname, req.query)
    
    if (!req.query.apikey || !req.query.s) 
        return res.status(400).json(MovieModel.ErrorResponse("Should contain mandatory params"))

    const result = await Datasource().MovieDatasource.search(req.query)
    if(result == "Internal Server Error")
        return res.status(500).json(MovieModel.ErrorResponse(result))

    return res.status(200).json(result)
})

exports.detail = asyncHandler(async (req, res, next) => {
    await Datasource().LogDatasource.createLog(req._parsedUrl.pathname, req.query)
    
    if (!req.query.apikey || (!req.query.i && !req.query.t)) 
        return res.status(400).json(MovieModel.ErrorResponse("Should contain mandatory params"))

    const result = await Datasource().MovieDatasource.detail(req.query)

    if(result == "Internal Server Error")
        return res.status(500).json(MovieModel.ErrorResponse(result))

    return res.status(200).json(result)
})