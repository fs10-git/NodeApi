
import * as produtoRepository from '../repository/produto.repository.js';

export const getAll = async (req, res) => {
  try {
    const produtos = await produtoRepository.getAll();
    res.status(200).json(produtos);
  } catch (error) {
    res.status(500).json({ message: error});
  }
};

export const getOne = async (req, res) => {
  try {
    const id = req.params.id;
    console.log(id)
    const produtos = await produtoRepository.getOne(id);
    res.status(200).json(produtos);
  } catch (error) {
    res.status(500).json({ message: error});
  }
};

export const create = async (req, res) => {
  try {
    const data = req.body;
    const produtos = await produtoRepository.create(data);
    res.status(200).json(produtos);
  } catch (error) {
    res.status(500).json({ message: error});
  }
};

export const update = async (req, res) => {
  try {
    const data = req.body;
    const id = req.params.id;
    const produtos = await produtoRepository.update(id, req.body);
    res.status(200).json(produtos);
  } catch (error) {
    res.status(500).json (console.log('${error}'));
  }
};

export const deletar = async (req,res) => {
  try{
    const id = req.params.id;
    const produtos = await produtoRepository. 
    deletar(id);
    res.status(201).json ('produto deletado com sucesso');
  } catch (error){
     res.status(500).json ({message: error});
  }
}
