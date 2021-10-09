const SQL = require('sequelize');

module.exports.movieDB =()=>{
  const sequelize = new SQL(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'mysql',
    dialectOptions: {
      // options: {
      //   useUTC: false, // for reading from database
      // },
      dateStrings: true,
      typeCast: true
    },
    pool: {
      max: 3,
      min: 0,
      idle: 20000,
      acquire: 20000
    },
    timezone: '+07:00'
  });
    
  sequelize.authenticate()
  .then(function(err) {
    console.log('MySQL connection has been established successfully.');
  })
  .catch(function (err) {
    console.log('Unable to connect to the database:', err);
  });

  return { sequelize };
}
