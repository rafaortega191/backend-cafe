import { Router } from "express";
import {
  borrarProducto,
  controladorPrueba,
  crearProducto,
  editarProducto,
  obtenerListaProductos,
  obtenerProducto,
} from "../controller/productos.controllers";
import { check } from "express-validator";

const router = Router();
router.route("/prueba").get(controladorPrueba);
router
  .route("/productos")
  .post(
    [
      check("nombreProducto")
        .notEmpty()
        .withMessage("el nombre del producto es obligatorio"),
    ],
    crearProducto
  )
  .get(obtenerListaProductos);
router
  .route("/productos/:id")
  .get(obtenerProducto)
  .delete(borrarProducto)
  .put(editarProducto);

export default router;

// app.get('/prueba', (req, res )=>{
//     res.send('esto es una prueba de la ruta GET')
// })
