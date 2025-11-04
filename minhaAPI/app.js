const express = require('express')
const usuarioRouter = require('./routes/usuario');

const app = express();
const port = 3000;

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

app.listen(port, () => {
    console.log(`Servidor executando em http://localhost:${port}`);
});
