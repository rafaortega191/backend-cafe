import express from "express";
import cors from "cors";
import * as dotenv from "dotenv"
import morgan from "morgan"

dotenv.config();

//configurar un puerto
//crea una instancia de express
const app = express();

app.set('PORT', process.env.PORT || 4000);

app.listen(app.get('PORT'), ()=>{
    console.log('estoy en el puesto '+ app.get('PORT'))
});

//middlewares: funciones que se ejecutan antes de las rutas

app.use(express.json()); //permite interpretar json en un request
app.use(express.urlencoded({extended:true})); //permite interpretar string y arrays del request
app.use(cors()); //permite conexiones remotas
app.use(morgan('dev')); // da info extra en la terminal

//rutas