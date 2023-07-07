import conexion from "../database/db.js";

export const getEmpresa = async (req, res) => {
  try {
    let { name, cod } = req.body;
    if (name) {
      const [result] = await conexion.query(`SELECT * FROM empresas WHERE nombre LIKE "%${name}%"`)
      res.json(result);
    }
    if (cod) {
      const [result] = await conexion.query(`SELECT * FROM empresas WHERE nit LIKE "%${cod}%"`)
      res.json(result);
    }

  } catch (error) {
    console.log(error);
    return res.status(404).json({ message: "ERROR 404", error });
  }
};

export const getPerson = async (req, res) => {
  try {

    let { name, id } = req.body;
    if (name) {
      const [result] = await conexion.query(`SELECT * FROM usuarios WHERE nombre LIKE "%${name}%"`)
      res.json(result);
    }
    if (id) {
      const [result] = await conexion.query(`SELECT * FROM usuarios WHERE idusuario LIKE "%${id}%"`)
      res.json(result);
    }
  } catch (error) {
    console.log(error);
    return res.status(404).json({ message: "ERROR 404", error });
  }
}; 

export const getDatos = async (req,res) =>{
  try {
    console.log(req.body);
    res.json("hola")
  } catch (error) {
    console.log(error);
    return res.status(404).json({ message: "ERROR 404", error });
  }
}
