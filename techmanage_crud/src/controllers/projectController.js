const Project = require('../models/Project');

module.exports = {
  async create(req, res) {
    try {
      const project = await Project.create(req.body);
      res.status(201).json(project);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  async getAll(req, res) {
    const projects = await Project.findAll();
    res.json(projects);
  },

  async getById(req, res) {
    const project = await Project.findByPk(req.params.id);
    project
      ? res.json(project)
      : res.status(404).json({ message: 'Projeto não encontrado' });
  },

  async update(req, res) {
    const project = await Project.findByPk(req.params.id);
    if (!project) return res.status(404).json({ message: 'Projeto não encontrado' });
    await project.update(req.body);
    res.json(project);
  },

  async delete(req, res) {
    const project = await Project.findByPk(req.params.id);
    if (!project) return res.status(404).json({ message: 'Projeto não encontrado' });
    await project.destroy();
    res.json({ message: 'Projeto deletado com sucesso' });
  }
};

