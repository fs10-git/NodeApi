// app.js
import express from 'express';
import produtoRoutes from "./src/routes/produto.routes.js";

const app = express();
const PORT = 666;

app.use(express.json());
app.use('/produtos', produtoRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});




  