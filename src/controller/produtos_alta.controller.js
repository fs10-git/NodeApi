
import * as produtoAltaRepository from '../repository/produtos_alta.repository.js';

export const getAll = async (req, res) => {
  try {
    const produtos_alta = await produtoAltaRepository.getAll();
    res.status(200).json(produtos_alta);
  } catch (error) {
    res.status(500).json({ message: error});
  }
};
