export const controladorPrueba = (req, res) => {
    res.send("esto es una prueba de la ruta GET");
  }

export const crearProducto = (req, res) => {
    try{

    }catch(error) {
        console.log(error);
        res.status(404).json({
            mensaje:'error al intentar crear un producto'
        })
    }
  }