const express = require('express');
const router = express.Router();
const userController = require('../controllers/usuarioController');

// Rota para obter todos os usuários
router.get('/', userController.obterTodos);

//Rota para obter um usuário por ID
router.get('/:id', userController.obterPorId);

// Rota para criar um novo usuário
router.post('/', userController.inserir);

//Rota para excluir um usuário por ID
router.delete('/:id', userController.excluir);

// Rota para atualizar um usuário por ID
router.put('/:id', userController.atualizar);

module.exports = router;
