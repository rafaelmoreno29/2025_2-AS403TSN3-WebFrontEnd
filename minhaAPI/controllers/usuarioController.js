const UsuarioModel = require('../models/usuario');

// Lógica para obter todos os usuários
exports.getAllUsers = async (req, res) => {
    try {
        const usuarios = await UsuarioModel.find();
        // const usuarios = await UsuarioModel.find({ativo:true});

        res.json(usuarios);
    } catch (error) {
        res.status(400).json(
            {
                'mensagem': 'Erro ao obter usuários - '
                    + error.message
            }
        );
    }
};

// Lógica para criar um novo usuário
exports.createUser = async (req, res) => {
    const novoUsuario = req.body;
    try {
        await UsuarioModel.create(novoUsuario);
        res.status(201).json(novoUsuario);
    } catch (error) {
        res.status(400).json(
            {
                'mensagem': 'Erro ao criar usuário - '
                    + error.message
            }
        );
    };
};
exports.getUserById = async (req, res) => {
    const userId = req.params.id;
    try {
        const usuario = await UsuarioModel.findById(userId);
        if (!usuario) {
            return res.status(404).json(
                { 'mensagem': 'Usuário não encontrado' });
        }
        res.json(usuario);
    } catch (error) {
        res.status(400).json(
            {
                'mensagem': 'Erro ao obter usuário - ' + error.message
            }
        );
    }
};