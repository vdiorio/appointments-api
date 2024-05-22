require('pg');
const Sequelize = require('sequelize');

const databaseUrl = process.env.DATABASE_CONNECTION_STRING;

const sequelize = new Sequelize(databaseUrl, {
  dialectOptions: {
    connectTimeout: 60000,
  },
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = sequelize;
