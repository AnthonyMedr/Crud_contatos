const express = require("express");
const router = express.Router();

const TasksController = require("../app/controllers/api/TasksController");
const AgendasController = require("../app/controllers/AgendasController");

// Rotas das Tarefas
router.get('/tasks', TasksController.list)
router.get('/tasks/:id', TasksController.show)
router.post('/tasks', TasksController.save)
router.delete('/tasks/:id', TasksController.remove)
router.put('/tasks/:id', TasksController.update)
router.put('/tasks/:id/update-status', TasksController.updateStatus)

router.post('/agenda', AgendasController.create);
router.get('/agenda', AgendasController.getAll);
router.get('/agenda/:id', AgendasController.getById);
router.put('/agenda/:id', AgendasController.update);
router.delete('/agenda/:id', AgendasController.delete);

module.exports = router;