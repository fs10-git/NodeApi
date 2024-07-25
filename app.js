// app.js
import express from 'express';
import produtoRoutes from "./src/routes/produto.routes.js";
import produtoAltaRoutes from "./src/routes/produtos_alta.routes.js";
import cors from 'cors'
import bodyParser from 'body-parser'

const app = express();
const PORT = 666;
app.use(cors());
app.use(bodyParser.json());

app.use(express.json());
app.use('/produtos', produtoRoutes);
app.use('/produtos-alta', produtoAltaRoutes);


app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});




  