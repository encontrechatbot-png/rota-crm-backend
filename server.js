const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('ROTA CRM BACKEND OK 🚀');
});

app.get('/api/status', (req, res) => {
  res.json({
    status: 'online',
    sistema: 'ROTA CRM CONTÁBIL',
    versao: '1.0.0'
  });
});

app.get('/api/clientes', (req, res) => {
  res.json([
    {
      id: 1,
      nome: 'Empresa Alpha',
      cnpj: '00.000.000/0001-00',
      status: 'em_dia'
    },
    {
      id: 2,
      nome: 'Empresa Beta',
      cnpj: '11.111.111/0001-11',
      status: 'pendente'
    }
  ]);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});