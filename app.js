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



//  app.get('/produtos/:id', (req,res) => {
//     const id = req.params.id;
//     connection.query( `SELECT * FROM tb_produtos WHERE id = ${id}`,(error,results) => {
//         try{
//             res.send(results).status(200)
//         }catch{
//             res.send("Error ao buscar produtos").status(500)
//         }
//     })
    
//  })

//  app.delete('/produtos/:id', (req,res) => {
//     const id = req.params.id
//     connection.query( `DELETE FROM tb_produtos WHERE id = ${id}`,(error,results) => {
//         try{
//             res.send("Produto deletado com sucesso").status(204)
//         }catch{
//             res.send("Error ao deletar produtos").status(500)
//         }
//     })
    
//  })

//  app.post('/produtos', (req, res) => {
//     const { cor, tamanho, categorias_id,preco,estoque,num_serial,promocao_id } = req.body.produtos; 
//     const query = "INSERT INTO tb_produtos (cor,tamanho,categorias_id,preco,estoque,num_serial,promocao_id) VALUES (?, ? , ? , ? , ? , ? , ?)";
//     const values = [cor,tamanho,categorias_id,preco,estoque,num_serial,promocao_id];
    
//     try{
//         connection.query(query, values, (err, results) => {
//             res.status(201).send('Produto adicionado com sucesso');
//           });

//     } catch{
//         console.error('Erro ao adicionar produto:', err);
//         res.status(500).send('Erro ao adicionar produto');
//     }
//   });
  
//   app.put('/produtos/:id', (req, res) => {
//     const id = req.params.id;
//     const { cor, tamanho, categorias_id,preco,estoque,num_serial,promocao_id } = req.body.produtos; 
//     const query = "UPDATE tb_produtos SET cor = ?, tamanho = ?, categorias_id = ?, preco = ?, estoque = ?, num_serial = ?, promocao_id = ? WHERE id = ?";
//     const values = [cor,tamanho,categorias_id,preco,estoque,num_serial,promocao_id,id];
    
//     try{
//         connection.query(query, values, (err, results) => {
//             res.status(201).send('Produto atualizado com sucesso');
//           });

//     } catch{
//         res.status(500).send('Erro ao atualizar produto');
//     }
//   });



  