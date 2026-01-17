// routes/taskRoutes.js

const express = require('express');
const router = express.Router();

const db = require('../data');
const authenticateToken = require('../middleware/authenticateToken');

// GET
router.get('/', authenticateToken, (req, res) => {
  const userTasks = db.tasks.filter((t) => t.userId === req.user.userId);
  res.json(userTasks);
});

// POST
router.post('/', authenticateToken, (req, res) => {
  const { title, description, status, priority, dueDate } = req.body;

  if (!title || !description || !status) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const validStatuses = ['todo', 'in-progress', 'completed'];
  if (!validStatuses.includes(status)) {
    return res.status(400).json({ error: 'Invalid status' });
  }

  if (!title || title.length < 3 || title.length > 100) {
    return res.status(400).json({ error: 'Title must be 3-100 characters' });
  }
  if (!description || description.length < 10) {
    return res
      .status(400)
      .json({ error: 'Description must be at least 10 characters' });
  }

  const newTask = {
    id: db.counters.taskIdCounter++,
    title,
    description,
    status,
    priority,
    dueDate: dueDate ? new Date(dueDate) : null,
    userId: req.user.userId,
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  db.tasks.push(newTask);
  res.status(201).json(newTask);
});

// PUT

router.put('/:id', authenticateToken, (req, res) => {
  const taskId = parseInt(req.params.id);
  const task = db.tasks.find((t) => t.id === taskId);

  if (!task) {
    return res.status(404).json({ error: 'Task not found' });
  }

  if (task.userId !== req.user.userId) {
    return res.status(403).json({ error: 'Not authorized' });
  }

  const { title, description, status, priority, dueDate } = req.body;

  if (status) {
    const validStatuses = ['todo', 'in-progress', 'completed'];
    if (!validStatuses.includes(status)) {
      return res.status(400).json({ error: 'Invalid status' });
    }
  }

  if (title !== undefined) task.title = title;
  if (description !== undefined) task.description = description;
  if (status !== undefined) task.status = status;
  if (priority !== undefined) task.priority = priority;
  if (dueDate !== undefined) task.dueDate = dueDate ? new Date(dueDate) : null;

  task.updatedAt = new Date();

  res.json(task);
});

// DELETE

router.delete('/:id', authenticateToken, (req, res) => {
  const taskId = parseInt(req.params.id);
  const index = db.tasks.findIndex((t) => t.id === taskId);

  if (index === -1) {
    return res.status(404).json({ error: 'Task not found' });
  }

  if (db.tasks[index].userId !== req.user.userId) {
    return res.status(403).json({ error: 'Not authorized' });
  }

  db.tasks.splice(index, 1);
  res.json({ message: 'Task deleted' });
});

module.exports = router;
