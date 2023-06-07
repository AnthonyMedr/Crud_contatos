const Task = require('../../models/Task');

function TaskController() {

  function save(req, res) {
    const task = {
      title: req.body.title,
      description: req.body.description,
      done: false,
    }

    Task.create(task)
      .then((data) => {
        res.status(201).json(data)
      })
      .catch((err) => console.log())
  }

  function list(req, res) {
    Task.findAll({ raw: true })
      .then((data) => {
        res.status(200).json(data);
      })
      .catch((err) => console.log(err))
  }

  async function show(req, res) {
    const id = req.params.id;

    try {

      const data = await Task.findOne({ where: { id: id }, raw: true });

      if (!data) {
        return res.status(404).send({
          message: "Tarefa não encontrada."
        })
      }

      res.status(200).json(data);

    } catch (error) {
      res.status(500).json({
        message: "Deu M capitão!"
      });
    }
    
  }

  function remove(req, res) {
    const id = req.params.id;

    Task.findOne({ where: { id: id }, raw: true })
      .then((data) => {

        if (!data) {
          return res.status(404).send({
            message: "Tarefa não encontrada."
          })
        }

        Task.destroy({ where: { id: id } })
          .then(() => {
            res.status(200).json({
              message: "Tarefa removida."
            })
          })
          .catch((err) => console.log())

      })
      .catch((err) => res.json(err));
    
  }

  function update(req, res) {
    const id = req.params.id

    const task = {
      title: req.body.title,
      description: req.body.description,
      done: req.body.done === '1' ? true : false
    }

    Task.findOne({ where: { id: id }, raw: true })
      .then((data) => {

        if (!data) {
          return res.status(404).send({
            message: "Tarefa não encontrada."
          })
        }

        Task.update(task, { where: { id: id } })
          .then(() => {
            res.json({
              message: "Tarefa atualizada."
            })
          })
          .catch((err) => console.log(err))

      })
      .catch((err) => res.json(err))

    
  }

  function updateStatus(req, res) {
    const id = req.params.id

    const task = {
      done: req.body.done === '1' ? true : false,
    }

    
    Task.findOne({ where: { id: id }, raw: true })
      .then((data) => {

        if (!data) {
          return res.status(404).send({
            message: "Tarefa não encontrada."
          })
        }

        Task.update(task, { where: { id: id } })
          .then(() => {
            res.json({
              message: "Status da Tarefa atualizado."
            })
          })
          .catch((err) => console.log(err))

      })
      .catch((err) => res.json(err));

    }

    return {
      save,
      list,
      show,
      remove,
      update,
      updateStatus,
    }

}

module.exports = TaskController();
