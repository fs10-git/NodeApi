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
    try {
        res.json(produtos).status(200);
    } catch {
        res.json({message:"Internal Server Error"}).status(500)
    }
 })

 app.get('/produtos/:id', (req,res) => {
    const id = parseInt(req.params.id);
    const produto = produtos.find(produto=>produto.id===id); //ArrayMethod, acha o primeiro id igual o Find

    if(!produto){
        res.json({message:"Erro ao encontrar produto"}).status(404)
    }
    try {
        res.json(produto).status(500)
    } catch {
        res.json({message:"Internal Server Error."}).status(500)
    }
})

app.post('/produtos', (req,res) => {
    const produto = req.body;
    produtos.push(produto)

    try {
        res.json(produtos).status(500)
    } catch {
        res.json({message:"Internal Server Error."}).status(500)
    }
})

 app.listen(PORT,() => {
    console.log(`Aplicação rodando na porta ${PORT}`)
 })