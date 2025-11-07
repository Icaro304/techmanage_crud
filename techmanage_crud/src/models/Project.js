const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User');

const Project = sequelize.define('Project', {
  titulo: {
    type: DataTypes.STRING,
    allowNull: false
  },
  descricao: {
    type: DataTypes.TEXT
  },
  data_inicio: {
    type: DataTypes.DATE,
    allowNull: false
  },
  data_fim: {
    type: DataTypes.DATE
  }
});

User.hasMany(Project, { foreignKey: 'id_usuario', onDelete: 'CASCADE' });
Project.belongsTo(User, { foreignKey: 'id_usuario', allowNull: false });

module.exports = Project;

