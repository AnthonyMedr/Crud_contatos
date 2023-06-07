const { DataTypes } = require('sequelize')
const { sequelize } = require('../core/sequelize');

const Usuario = sequelize.define('Usuario', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
  }
})

module.exports = Usuario
