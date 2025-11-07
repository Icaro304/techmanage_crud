const User = require('../models/User');

module.exports = {
  async create(req, res) {
    try {
      const user = await User.create(req.body);
      res.status(201).json(user);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  async getAll(req, res) {
    const users = await User.findAll();
    res.json(users);
  },

  async getById(req, res) {
    const user = await User.findByPk(req.params.id);
    user
      ? res.json(user)
      : res.status(404).json({ message: 'Usuário não encontrado' });
  },

  async update(req, res) {
    const user = await User.findByPk(req.params.id);
    if (!user) return res.status(404).json({ message: 'Usuário não encontrado' });
    await user.update(req.body);
    res.json(user);
  },

  async delete(req, res) {
    const user = await User.findByPk(req.params.id);
    if (!user) return res.status(404).json({ message: 'Usuário não encontrado' });
    await user.destroy();
    res.json({ message: 'Usuário deletado com sucesso' });
  }
};

