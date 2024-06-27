
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