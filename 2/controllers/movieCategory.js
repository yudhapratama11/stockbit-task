const Datasource = require('../datasources/Datasource');
const asyncHandler = require('../middlewares/async');

exports.getCategoryTier1 = asyncHandler(async (req, res, next) => {
    const result = await Datasource().CategoryDatasource.getCategoryTier1()
    return res.status(200).json(result)
})