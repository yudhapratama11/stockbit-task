const DoQuery = (database, sql, bind) => {
    return database.db.sequelize.query(
            sql, {
                bind : bind,
                raw : true
            }
        ).then(
            async ([results, metadata]) => {
                return [0, results, metadata]
            }
        ).catch(
            function(err){
                return [1, err, null]
            }
        )
}

module.exports = {
    DoQuery,
};