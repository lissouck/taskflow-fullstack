const Task = require('../models/Task');

// Récupérer toutes les tâches
const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (err) {
    res.status(500).json({ message: 'Erreur serveur', error: err.message });
  }
};

// Créer une nouvelle tâche
const createTask = async (req, res) => {
  try {
    const task = new Task(req.body);
    const savedTask = await task.save();
    res.status(201).json(savedTask);
  } catch (err) {
    res.status(400).json({ message: 'Données invalides', error: err.message });
  }
};

// Mettre à jour le statut d'une tâche
const updateTaskStatus = async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status },
      { new: true, runValidators: true }
    );
    if (!task) return res.status(404).json({ message: 'Tâche introuvable' });
    res.status(200).json(task);
  } catch (err) {
    res.status(400).json({ message: 'Erreur mise à jour', error: err.message });
  }
};

// Supprimer une tâche
const deleteTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) return res.status(404).json({ message: 'Tâche introuvable' });
    res.status(200).json({ message: 'Tâche supprimée avec succès' });
  } catch (err) {
    res.status(500).json({ message: 'Erreur serveur', error: err.message });
  }
};

module.exports = { getAllTasks, createTask, updateTaskStatus, deleteTask };