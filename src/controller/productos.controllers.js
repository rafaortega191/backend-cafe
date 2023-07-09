import producto from "../models/producto";

export const controladorPrueba = (req, res) => {
    res.send("esto es una prueba de la ruta GET");
  }

export const crearProducto = async (req, res) => {
    try{
        const productoNuevo = new producto(req.body);
        await productoNuevo.save();
        res.status(201).json({
            mensaje:'el producto fue creado correctamente'
        })
        
    }catch(error) {
        console.log(error);
        res.status(404).json({
            mensaje:'error al intentar crear un producto'
        })
    }
  }

export const obtenerListaProductos = async (req, res)=>{
    try{
        //buscar en la bd la collection de productos
        const productos = await producto.find();
        res.status(200).json(productos);
        
    }catch(error){
        console.log(error);
        res.status(404).json({
            mensaje:'error al recuperar la lista de productos'
        })
    }
}