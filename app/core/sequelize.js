const { Sequelize } = require('sequelize')

const config = require('../../config/database.js');
const db = config[config.default];
let sequelize = null;

if (config.default == 'sqlite') {
  sequelize = new Sequelize({
    storage: db.storage,
    dialect: db.dialect,
  });

} else {
  
  sequelize = new Sequelize(db.database, db.user, db.password, {
    host: db.host,
    dialect: db.dialect,
  });

}



async function createDatabase(sequelize) {
  try {
      await sequelize.authenticate();
      await sequelize.sync(); // Isso criará as tabelas
      
      console.log('Banco de dados criado com sucesso!');
  } catch (error) {
      console.error('Erro ao criar o banco de dados:', error);
  } finally {
      // sequelize.close(); // Encerra a conexão com o banco de dados
  }
}

module.exports = { sequelize, createDatabase };
