const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Project = require('./Project');

const Task = sequelize.define('Task', {
  titulo: { type: DataTypes.STRING, allowNull: false },
  status: { type: DataTypes.STRING, allowNull: false },
  prioridade: { type: DataTypes.STRING },
  id_projeto: {
    type: DataTypes.INTEGER,
    allowNull: false, // não aceita null
    references: { model: 'Projects', key: 'id' }
  }
});

// Relacionamentos
Project.hasMany(Task, { foreignKey: 'id_projeto', onDelete: 'CASCADE' });
Task.belongsTo(Project, { foreignKey: 'id_projeto', allowNull: false });

module.exports = Task;
