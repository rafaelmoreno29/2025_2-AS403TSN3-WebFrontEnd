//Declarar Array para teste 
const usuarios = [];

// Lógica para obter todos os usuários
exports.getAllUsers = (req, res) => {
    res.json(usuarios);
};

// Lógica para criar um novo usuário
exports.createUser = (req, res) => {
    const novoUsuario = req.body;
    usuarios.push(novoUsuario);
    res.status(201).json(
        { 'mensagem': 'Usuário criado com sucesso' }
    );
};

exports.getUserById = (req, res) => {

    const userId = req.params.id;
    console.log(userId);
    const usuario = usuarios.find(u => u.id == userId);
    if (!usuario) {
        return res.status(404).json(
            { 'mensagem': 'Usuário não encontrado' });
    }
    res.json(usuario);
};