const Task = require('../models/Task');

function TaskController() {

  function list(req, res) {
    Task.findAll({ raw: true })
      .then((data) => {

        res.render('tasks/list', { 
          title: "Lista de Tarefas",
          tasks: data, 
        })
      })
      .catch((err) => console.log(err))
  }

  function create(req, res) {
    res.render('tasks/create')
  }

  function save(req, res) {
    const task = {
      title: req.body.title,
      description: req.body.description,
      done: false,
    }

    Task.create(task)
      .then(res.redirect('/tasks'))
      .catch((err) => console.log(err))
  }

  function remove(req, res) {
    const id = req.params.id;

    Task.destroy({ where: { id: id } })
      .then(res.redirect('/tasks'))
      .catch((err) => console.log(err))
  }

  function edit(req, res) {
    const id = req.params.id

    Task.findOne({ where: { id: id }, raw: true })
      .then((data) => {
        res.render('tasks/edit', { task: data })
      })
      .catch((err) => console.log())
  }

  function update(req, res) {
    console.log(req.body);
    const id = req.body.id

    const task = {
      title: req.body.title,
      description: req.body.description,
      done: req.body.done === '1' ? true : false
    }

    Task.update(task, { where: { id: id } })
      .then(res.redirect('/tasks'))
      .catch((err) => console.log(err))
  }

  function updateStatus(req, res) {
    const id = req.params.id

    const task = {
      done: req.body.done === '0' ? true : false,
    }

 	  Task.update(task, { where: { id: id } })
      .then(res.redirect('/tasks'))
      .catch((err) => console.log())
    }

    return {
      create,
      save,
      list,
      remove,
      edit,
      update,
      updateStatus,
    }

}

module.exports = TaskController();
