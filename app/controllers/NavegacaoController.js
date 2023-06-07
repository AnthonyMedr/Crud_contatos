function NavegacaoController() {

    function index(request, response) {
        return response.render("index", {
            title: "Página Inicial"
        });
    }

    function usuarios(request, response) {
        return response.render("users/index", {
            title: "Lista de Usuários"
        });
    }

    function sobre(request, response) {
        return response.render("sobre", {
            title: "Sobre a empresa"
        });
    }

    function agenda(request, response) {
        return response.render("agenda", {
            title: "Agenda de Contatos"
        });
    }


    function notFound(request, response) {
        return response.render("404");
    }

    return {
        usuarios,
        sobre,
        agenda,
        index,
        notFound
    }

}

module.exports = NavegacaoController();
