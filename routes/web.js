const express = require("express");
const router = express.Router();

const NavegacaoController = require("../app/controllers/NavegacaoController");
const TasksController = require("../app/controllers/TasksController");
const AgendasController = require("../app/controllers/AgendasController")


// Rotas das Tarefas
router.get('/tasks', TasksController.list)
router.get('/tasks/create', TasksController.create)
router.post('/tasks/save', TasksController.save)
router.post('/tasks/remove/:id', TasksController.remove)
router.get('/tasks/edit/:id', TasksController.edit)
router.post('/tasks/update', TasksController.update)
router.post('/tasks/update-status/:id', TasksController.updateStatus)


router.get('/', NavegacaoController.index);
router.get('/usuarios', NavegacaoController.usuarios);
router.get('/sobre', NavegacaoController.sobre);

router.post('/agenda', AgendasController.create);
router.get('/agenda', AgendasController.getAll);
router.get('/agenda/:id', AgendasController.getById);
router.put('/agenda/:id', AgendasController.update);
router.delete('/agenda/:id', AgendasController.delete);



router.get('*', function notFound(request, response) {
    return response.render("404");
});


module.exports = router;