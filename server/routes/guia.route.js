const GuiaController = require("../controllers/guia.controller");
const UserController = require("../controllers/login.controller");

const {authenticate} = require("../config/jwt.config");


module.exports = app => {
    app.get('/api/guias',  GuiaController.get_all);
    app.post('/api/guias',  GuiaController.create_guia);
    app.get('/api/guias/:id',  GuiaController.get_guia);
    app.put('/api/guias/:id',  GuiaController.editar_guia);
    app.delete('/api/guias/:id',  GuiaController.delete_guia);

    
    app.post('/api/login', UserController.login);
    app.get('/api/logout', UserController.logout);
}

