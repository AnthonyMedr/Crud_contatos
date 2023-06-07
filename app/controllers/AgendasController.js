
const Contact = require('../models/agendas');

const AgendasController = {
  // Método para criar um novo contato na Agenda
  create: async (req, res) => {
    try {
      const { nome, celular, email, rua, numero, bairro, cidade, estado, cep, complemento } = req.body;

      // Cria o novo contato
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

      // Retorna o contato criado
      res.status(201).json(contact);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Erro ao criar contato' });
    }
  },

  // Método para obter todos os contatos da Agenda
  getAll: async (req, res) => {
    try {
      // Obtem todos os contatos
      const contacts = await Contact.findAll();

      // Retorna os contatos encontrados
      res.json(contacts);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Erro ao obter contatos' });
    }
  },

  // Método para obter um contato específico da Agenda
  getById: async (req, res) => {
    try {
      const { id } = req.params;

      // Obtem o contato pelo ID
      const contact = await Contact.findByPk(id);

      // Verifica se o contato foi encontrado
      if (!contact) {
        return res.status(404).json({ message: 'Contato não encontrado' });
      }

      // Retorna o contato encontrado
      res.json(contact);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Erro ao obter contato' });
    }
  },

  // Método para atualizar um contato da Agenda
  update: async (req, res) => {
    try {
      const { id } = req.params;
      const { nome, celular, email, rua, numero, bairro, cidade, estado, cep, complemento } = req.body;

      // Verifica se o contato existe
      const contact = await Contact.findByPk(id);
      if (!contact) {
        return res.status(404).json({ message: 'Contato não encontrado' });
      }

      // Atualiza o contato
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

      // Retorna o contato atualizado
      res.json(contact);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Erro ao atualizar contato' });
    }
  },

  // Método para remover um contato da Agenda
  delete: async (req, res) => {
    try {
      const { id } = req.params;

      // Verifica se o contato existe
      const contact = await Contact.findByPk(id);
      if (!contact) {
        return res.status(404).json({ message: 'Contato não encontrado' });
      }

      // Remove o contato
      await contact.destroy();

      // Retorna uma resposta de sucesso
      res.json({ message: 'Contato removido com sucesso' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Erro ao remover contato' });
    }
  }
};

module.exports = AgendasController;
