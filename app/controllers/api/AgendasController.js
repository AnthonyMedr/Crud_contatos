const Contact = require('../models/Contact');

const AgendasController = {

  create: async (req, res) => {
    try {
      const { nome, celular, email, rua, numero, bairro, cidade, estado, cep, complemento } = req.body;

      const contact = await Contact.create({
        nome,
        celular,
        email,
        rua,
        numero,
        bairro,
        cidade,
        estado,
        cep,
        complemento
      });

      res.status(201).json(contact);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Erro ao criar contato' });
    }
  },


  getAll: async (req, res) => {
    try {

      const contacts = await Contact.findAll();


      res.json(contacts);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Erro ao obter contatos' });
    }
  },


  getById: async (req, res) => {
    try {
      const { id } = req.params;


      const contact = await Contact.findByPk(id);


      if (!contact) {
        return res.status(404).json({ message: 'Contato não encontrado' });
      }

      res.json(contact);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Erro ao obter contato' });
    }
  },


  update: async (req, res) => {
    try {
      const { id } = req.params;
      const { nome, celular, email, rua, numero, bairro, cidade, estado, cep, complemento } = req.body;


      const contact = await Contact.findByPk(id);
      if (!contact) {
        return res.status(404).json({ message: 'Contato não encontrado' });
      }


      await contact.update({
        nome,
        celular,
        email,
        rua,
        numero,
        bairro,
        cidade,
        estado,
        cep,
        complemento
      });


      res.json(contact);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Erro ao atualizar contato' });
    }
  },


  delete: async (req, res) => {
    try {
      const { id } = req.params;


      const contact = await Contact.findByPk(id);
      if (!contact) {
        return res.status(404).json({ message: 'Contato não encontrado' });
      }


      await contact.destroy();


      res.json({ message: 'Contato removido com sucesso' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Erro ao remover contato' });
    }
  }
};

module.exports = AgendasController;
