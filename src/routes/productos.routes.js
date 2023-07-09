import { Router } from "express";
import { controladorPrueba, crearProducto, obtenerListaProductos } from "../controller/productos.controllers";

const router = Router();
router.route("/prueba").get(controladorPrueba);
router.route("/productos").post(crearProducto).get(obtenerListaProductos);

export default router;

// app.get('/prueba', (req, res )=>{
//     res.send('esto es una prueba de la ruta GET')
// })
