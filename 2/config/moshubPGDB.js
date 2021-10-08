const SQL = require('sequelize');
const {HOST, DATABASE, USERNAME, PASSWORD} = require('./config')


module.exports.moshubPG =()=>{
  const sequelize = new SQL(DATABASE, USERNAME, PASSWORD, {
    host: HOST,
    port: 5432,
    dialect: 'postgres',
    dialectOptions: {
      useUTC: false, //for reading from database
      dateStrings: true,
      typeCast: true
    },
    pool: {
      max: 5,
      min: 0,
      idle: 20000,
      acquire: 20000
      },
  timezone: '+07:00'
});
    
  sequelize.authenticate()
  .then(function(err) {
    console.log('PostGre Connection has been established successfully.');
  })
  .catch(function (err) {
    console.log('Unable to connect to the database:', err);
  });

  return { sequelize };
}
