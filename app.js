import express from "express";
const app = express();
const PORT = 666;

app.use(express.json());

 let produtos = [
    {
        id:1,
        nome:"tenis",
        valor:20.00
    },
    {
        id:2,
        nome:"raquete",
        valor:30.00
    },
    {
        id:3,
        nome:"short",
        valor:30.00
    },
    {
        id:4,
        nome:"camisa",
        valor:30.00
    }
 ]

 app.get('/produtos', (req,res) => {
    res.json(produtos);
 })

 app.listen(PORT,() => {
    console.log(`Aplicação rodando na porta ${PORT}`)
 })