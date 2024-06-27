
import * as produtoRepository from '../repository/produto.repository.js';

export const getAll = async (req, res) => {
  try {
    const produtos = await produtoRepository.getAll();
    res.status(200).json(produtos);
  } catch (error) {
    res.status(500).json({ message: error});
  }
};