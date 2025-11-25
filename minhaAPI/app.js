const express = require('express')
const mongoose = require('mongoose');
const usuarioRouter = require('./routes/usuario');

const app = express();
const port = 3000;
require('dotenv').config();
const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
const url = process.env.DB_URL;


app.use(express.json());
app.use('/usuario', usuarioRouter);

app.get('/', (req, res) => {
    res.json({ 'mensagem': 'Olá, mundo!' });
});

app.get('/ola', (req, res) => {
    const nome = req.query.nome;
    res.json({ 'mensagem': 'Olá, ' + nome + '!' });
});

app.get('/calcular-dobro/:numero', (req, res) => {
    const numero = parseFloat(req.params.numero);
    const dobro = numero * 2;
    res.json({ 'numero': numero, 'dobro': dobro });
});

app.post('/somar', (req, res) => {
    const num1 = req.body.num1;
    const num2 = req.body.num2;
    const soma = num1 + num2;
    res.json({ 'num1': num1, 'num2': num2, 'soma': soma });
});

const mongoUrl = `mongodb+srv://${user}:${password}@${url}`;
mongoose.connect(mongoUrl)
    .then(() => {
        app.listen(port, () => {
            console.log(`Servidor executando em http://localhost:${port}`);
        });
    }).catch((error) => {
        console.error('Erro ao conectar ao MongoDB:', error);
    });