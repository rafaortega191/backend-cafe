// import generarJWT from "../helpers/jwt";
import Usuario from "../models/usuario";
import bcrypt from "bcrypt";

export const crearUsuario = async (req, res) => {
  try {
    const { email, password } = req.body;

    //verificar si el email ya existe
    let usuario = await Usuario.findOne({ email }); //devulve un null
    console.log(usuario);
    if (usuario) {
      //si el usuario existe
      return res.status(400).json({
        mensaje: "ya existe un usuario con el correo enviado",
      });
    }
    //guardamos el nuevo usuario en la BD
    usuario = new Usuario(req.body);
    //encriptamos el password
    const salt = bcrypt.genSaltSync(10);
    usuario.password = bcrypt.hashSync(password, salt);

    await usuario.save();
    res.status(201).json({
      mensaje: "usuario creado",
      nombre: usuario.nombre,
      uid: usuario._id,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      mensaje: "El usuario no pudo ser creado",
    });
  }
};

export const listarUsuarios = async (req, res) => {
  // res.send("esto es una prueba de una peticion get");
  try {
    //buscar en la BD la collection de productos
    const usuarios = await Usuario.find();
    //envio la respuesta al frontend
    res.status(200).json(usuarios);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "Error al buscar los usuarios",
    });
  }
};

export const login = async (req, res) => {
  try {
    //extraer el email y el password del req.body
    const { email, password } = req.body;
    //verificamos que el mail existe en la bd
    let usuario = await Usuario.findOne({email}); //manera corta debido a que la variable se llama igual sino usar find.one({email: email})
    if (!usuario) {
      //si no encuentro al usuario
      return res.status(404).json({
        mensaje: "correo o password invalido - correo",
      });
    }
    //verificar que el password coincidan
    const passwordValidado = bcrypt.compareSync(password, usuario.password); // devuelve un valor booleano si el password coincide
    if (!passwordValidado) {
      //preguntar si la variable es false
      return res.status(404).json({
        mensaje: "correo o password invalido - password",
      });
    }

    //responder al frontend con el usuario valido
    res.status(200).json({
      mensaje: "el usuario es correcto",
      nombreUsuario: usuario.nombreUsuario,
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "usuario o password incorrecto",
    });
  }
};
