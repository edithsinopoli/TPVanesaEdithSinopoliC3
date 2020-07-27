const express = require('express')//requiero express
const router = express.Router()//traigo el metodo router de express ejecutado
//las primeras dos lineas van en todos los archivos de rutas

const controller=require('../controller/homeController');//requiero el controlador de la ruta home
router.get('/',controller.index)//uso el controlador, mostrar informacion, recibe una url+callback(controlador)+un metodo del callback

module.exports=router; //exporto la funcion router