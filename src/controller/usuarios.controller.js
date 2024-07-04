import * as usuariosRepository from '../repository/usuarios.repository.js';


export const getAll = async (req, res) => {
    try {
      const usuarios = await usuariosRepository.getAll();
      res.status(200).json(usuarios);
    } catch (error) {
      res.status(500).json({ message: error});
    }
  };


  export const getOne = async (req, res) => {
    try {
      const id = req.params.id;
      console.log(id)
      const usuarios = await usuariosRepository.getOne(id);
      res.status(200).json(usuarios);
    } catch (error) {
      res.status(500).json({ message: error});
    }
  };

  export const create = async (req, res) => {
    try {
      const data = req.body;
      const usuarios = await usuariosRepository.create(data);
      res.status(200).json(usuarios);
    } catch (error) {
      res.status(500).json( `message: ${error} `);
    }
  };


  export const update = async (req, res) => {
    try {
      const data = req.body;
      const id = req.params.id;
      const usuarios = await usuariosRepository.update(id, req.body);
      res.status(200).json(usuarios);
    } catch (error) {
      res.status(500).json (console.log('${error}'));
    }
  };

  export const deletar = async (req,res) => {
    try{
      const id = req.params.id;
      const usuarios = await usuariosRepository. 
      deletar(id);
      res.status(201).json ('produto deletado com sucesso');
    } catch (error){
       res.status(500).json ({message: error});
    }
  }
  