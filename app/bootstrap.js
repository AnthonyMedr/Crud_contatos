const { sequelize, createDatabase } = require('./core/sequelize');

const Models = require('./models');

createDatabase(sequelize);