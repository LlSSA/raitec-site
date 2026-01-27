const express = require("express");
const app = express();

// Libera acesso do front (CORS)
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

// Rota principal
app.get("/", (req, res) => {
  res.send("Backend dos robôs está rodando!");
});

// Rota que o front vai usar
app.get("/api", (req, res) => {
  res.json({ mensagem: "Site do Raitec em Breve!!! É o mídias, não tem jeito" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Servidor rodando na porta", PORT);
});

