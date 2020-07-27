const express = require('express')//requiero express
const router = express.Router()//traigo el metodo router de express ejecutado
//las primeras dos lineas van en todos los archivos de rutas

const controller=require('../controller/sucursalesController');//requiero el controlador de la ruta home
router.get('/',controller.index)//uso el controlador, mostrar informacion, recibe una url+callback(controlador)+un metodo del callback
router.get('/:id',controller.sucursal);//uso el controlador, mostrar informacion, recibe url y un parametro+callback+un metodo del mismo
module.exports=router; //exporto la funcion router