const express=require('express'); //requiero express
const app=express(); //uso la funcion express
app.listen(3030,()=>console.log("Servidor funcionando en puerto 3030")) //ejecuto el servidor

/* requiero las rutas, indicando la ruta de cada uno*/
const rutaHome = require('./routes/home');
const rutaSucursales = require('./routes/sucursales');
const rutaAutos = require('./routes/autos');
const rutaMarcas = require('./routes/marcas');


/*uso las rutas */
app.use('/',rutaHome);//uso la ruta
app.use('/sucursales',rutaSucursales);
app.use('/autos',rutaAutos);
app.use('/marcas',rutaMarcas);