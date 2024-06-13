import express from "express";
import mysql from "mysql2/promise"


const app = express();
const PORT = 666;

const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:'1234',
    database: 'dripstore'
  });

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
    try{
        res.json(produtos).status(200);
    } catch{
        res.json({message:"Internal Server Error"}).status(500)
    }

 })

 app.get('/produtos/:id', (req,res) => {
    const id = parseInt(req.params.id);
    const produto = produtos.find(produto=>produto.id===id);
    if(!produto){
        res.json({message:"Error ao encontrar produto"}).status(404)
    }
    try{
        res.json(produto).status(200);
    } catch {
        res.json({message:"Internal Server Error"}).status(500)
    }
    
 })

 app.post('/produtos', (req,res) => {
    const produto = req.body
    produtos.push(produto)
    try{
        res.json(produtos).status(200);
    } catch {
        res.json({message:"Internal Server Error"}).status(500)
    }
    
 })

 app.delete('/produtos/:id', (req,res) => {
    const id = parseInt(req.params.id)
    produtos = produtos.filter(produto => produto.id !==id)
    res.json(produtos).status(200)
    
 })
 app.put('/produtos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const updatedProduct = req.body;
    try{
        produtos = produtos.map(produto => {
            if (produto.id === id) {
              return { ...produto, ...updatedProduct };
            }
            return produto;
          });
          res.send(produtos).status(200);
    } catch{
        res.json({message:"Internal server error"}).status(500)
    }

  });


 app.listen(PORT,() => {
    console.log(`Aplicação rodando na porta ${PORT}`)
 })