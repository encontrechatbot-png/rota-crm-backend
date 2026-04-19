const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;
const HOST = "0.0.0.0";

app.use(express.json());

app.get("/", (req, res) => {
  res.send("ROTA CRM BACKEND OK");
});

app.get("/teste", (req, res) => {
  res.json({ status: "ok" });
});

app.listen(PORT, HOST, () => {
  console.log(`Servidor rodando em http://${HOST}:${PORT}`);
});