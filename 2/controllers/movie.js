const Datasource = require('../datasources/Datasource');
const asyncHandler = require('../middlewares/async');

exports.search = asyncHandler(async (req, res, next) => {
    const result = await Datasource().MovieDatasource.search()
    return res.status(200).json(result)
})

exports.detail = asyncHandler(async (req, res, next) => {
    const result = await Datasource().MovieDatasource.detail()
    return res.status(200).json(result)
})