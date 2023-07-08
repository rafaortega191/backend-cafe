import { Router } from "express";
import { controladorPrueba } from "../controller/productos.controllers";

const router = Router();
router.route("/prueba").get(controladorPrueba);
router.route("/productos").post(crearProducto);

export default router;

// app.get('/prueba', (req, res )=>{
//     res.send('esto es una prueba de la ruta GET')
// })
