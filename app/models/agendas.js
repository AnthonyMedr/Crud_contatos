const { DataTypes } = require('sequelize');
const { sequelize } = require('../core/sequelize');

const Contact = sequelize.define('Contact', {
  nome: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  celular: {
    type: DataTypes.INTEGER(20),
    allowNull: false
  },
  email: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  rua: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  numero: {
    type: DataTypes.INTEGER(3),
    allowNull: false
  },
  bairro: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  cidade: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  estado: {
    type: DataTypes.STRING(2),
    allowNull: false
  },
  cep: {
    type: DataTypes.INTEGER(8),
    allowNull: false
  },
  complemento: {
    type: DataTypes.STRING(100),
    allowNull: true
  }
});

module.exports = Contact;
