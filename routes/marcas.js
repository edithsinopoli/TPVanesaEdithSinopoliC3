const express = require('express')//requiero express
const router = express.Router()//traigo el metodo router de express ejecutado
//las primeras dos lineas van en todos los archivos de rutas
const controller = require('../controller/marcasController')

router.get('/', controller.index)
router.get('/:id', controller.mostrar)
module.exports = router
