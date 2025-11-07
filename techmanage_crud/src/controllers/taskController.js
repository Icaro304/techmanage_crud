const Task = require('../models/Task');

module.exports = {
  async create(req, res) {
    try {
      const task = await Task.create(req.body);
      res.status(201).json(task);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  async getAll(req, res) {
    const tasks = await Task.findAll();
    res.json(tasks);
  },

  async getById(req, res) {
    const task = await Task.findByPk(req.params.id);
    task
      ? res.json(task)
      : res.status(404).json({ message: 'Tarefa não encontrada' });
  },

  async update(req, res) {
    const task = await Task.findByPk(req.params.id);
    if (!task) return res.status(404).json({ message: 'Tarefa não encontrada' });
    await task.update(req.body);
    res.json(task);
  },

  async delete(req, res) {
    const task = await Task.findByPk(req.params.id);
    if (!task) return res.status(404).json({ message: 'Tarefa não encontrada' });
    await task.destroy();
    res.json({ message: 'Tarefa deletada com sucesso' });
  }
};

