var express = require("express");
var router = express.Router();

var loginController = require("../controllers/loginController");

router.get("/", function (req, res) {
    loginController.testar(req, res);
});

router.get("/listar", function (req, res) {
    loginController.listar(req, res);
});

//Recebendo os dados do html e direcionando para a função cadastrar de loginController.js
router.post("/cadastrar", function (req, res) {
    loginController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    loginController.verificar(req, res);
});

module.exports = router;