import express from "express";
import mysql from "mysql2";
const app = express();
const PORT = 666;

app.use(express.json());

const conection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'db_dripstore'})

    conection.connect( (err) => {
        if(err) {
        console.log("Erro ao conectar");
        } else {
        console.log("Conectado vetim!!!");
        }
    });

//  let produtos = [
//     {
//         id:1,
//         nome:"tenis",
//         valor:20.00
//     },
//     {
//         id:2,
//         nome:"raquete",
//         valor:30.00
//     },
//     {
//         id:3,
//         nome:"short",
//         valor:30.00
//     },
//     {
//         id:4,
//         nome:"camisa",
//         valor:30.00
//     }
//  ]

 app.get('/produtos', (req,res) => {
conection.query('SELECT * FROM tb_produtos', (err, results) => {
    try{
    res.send(results).status(200)
    } catch {
    res.json("Erro ao encontrar produtos").status(500)
    }
})
 });



 app.get('/produtos/:id', (req,res) => {
    const id = req.params.id
    conection.query(`SELECT * FROM tb_produtos WHERE id = ${id}`, (err, results) => {
        try{
            res.send(results).status(200)
        }catch{
            res.json("Erro ao encontrar produtos").status(500)
        }
    })
     });

     app.delete('/produtos/:id', (req,res) => {
        const id = req.params.id
        conection.query(`DELETE FROM tb_produtos WHERE id = ${id}`, (err, results) => {
            try{
                res.send("deletado").status(204)
            }catch{
                res.json("Erro ao encontrar produtos").status(500)
            }
        })
     });

app.post('/produtos', (req,res) => {
    const {cor, tamanho, categorias_id, preco, estoque,num_serial, promocao_id} = req.body.produtos;
    const query = `INSERT INTO tb_produtos(cor, tamanho, categorias_id, preco, estoque, num_serial, promocao_id) 
    VALUES(?,?,?,?,?,?,?)`;
    const values = [cor, tamanho, categorias_id, preco, estoque, num_serial, promocao_id];

    try {
        conection.query(query, values, (err, results) => {
            res.send(results).status(201).send("Cadastrado com sucesso!");

        });
    } catch {
        console.error("erro ao adicionar produto", err);
        res.status(500).send("Erro ao adicionar o produto");
    }
});

app.post('/produtos', (req,res) => {
    const produto = req.body;
    produtos.push(produto)

    try {
        res.json(produtos).status(500)
    } catch {
        res.json({message:"Internal Server Error."}).status(500)
    }
})

app.put('/produtos/:id', (req,res) => {
    const id = req.params.id
    const {cor, tamanho, categorias_id, preco, estoque,num_serial, promocao_id} = req.body.produtos;
    const query = `UPDATE tb_produtos SET cor = ?, tamanho = ?, categorias_id = ?, preco = ?, estoque = ?, num_serial = ?, promocao_id = ? WHERE id = ?`;
    const values = [cor, tamanho, categorias_id, preco, estoque, num_serial, promocao_id, id];
    try {
        conection.query(query, values, (err, results) => {
            res.send(results).status(201).send("Cadastrado com sucesso!");
        });
    } catch {
        res.status(500).send("Erro ao atualizar o produto");
    }
});


 app.listen(PORT,() => {
    console.log(`Aplicação rodando na porta ${PORT}`)
 })