const express = require("express");
const app = express();

// ROTA PRINCIPAL
app.get("/", (req, res) => {
  res.send("ROTA CRM BACKEND OK 🚀");
});

// ROTA DE TESTE
app.get("/teste", (req, res) => {
  res.json({ status: "ok" });
});

// PORTA DINÂMICA (OBRIGATÓRIO NO RAILWAY)
const PORT = process.env.PORT || 3000;

// SUBIR SERVIDOR
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});