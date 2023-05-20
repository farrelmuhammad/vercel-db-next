// database.js

const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize({
  dialect: 'postgres', // Specify the database dialect
  host: process.env.POSTGRES_HOST, // Your database host
  port: 5432, // Your database port
  username: process.env.POSTGRES_USER, // Your database username
  password: process.env.POSTGRES_PASSWORD, // Your database password
  database: process.env.POSTGRES_DATABASE, // Your database name
});

module.exports = sequelize;
