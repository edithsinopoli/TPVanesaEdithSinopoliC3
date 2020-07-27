let database=require('../data/database') //requiero el archivo con el json parseado
//exporto y declaro el controlador, que opera la tareas de cada ruta
//esta estructura es comun a todos los controladores
module.exports =  controller = {
    index: function(req, res) {
        res.writeHead(200,{'Content-Type':'text/plain;charset=utf-8'})
        res.write("Nos podes encontrar en: \n\n"); //muestra por pantalla un mensaje
        database.forEach(concesionaria=>{
            res.write(concesionaria.sucursal+'\n')
            res.write('Dirección: '+concesionaria.direccion+'\n')
            res.write('Teléfono: '+concesionaria.telefono+'\n')
            res.write('Autos con los que cuenta la sucursal: '+concesionaria.autos.length+'\n--------------------------------------------------------------------------------------------------------\n\n')
            }) 
        res.end()
    },
    sucursal: function(req,res){
        res.writeHead(200,{'Content-Type':'text/plain;charset=utf-8'})
        let idConcesionaria=req.params.id  //al parametro que recibo de la url le asigno una variable
        database.forEach(concesionaria=>{
            if(concesionaria.sucursal.toLowerCase()==idConcesionaria.toLowerCase()){
                res.write(concesionaria.sucursal+'\n'+'Dirección: '+concesionaria.direccion+'\n'+'Teléfono: '+concesionaria.telefono+'\n\n')
                res.write('Cantidad de autos disonibles: '+concesionaria.autos.length+'\n\n'+'Modelos: \n\n')
                concesionaria.autos.forEach(auto=>{
                    res.write(auto.marca+' '+auto.modelo+' '+auto.anio+'\n~~~~~~~~~~~~~~~~~~~~~~~\n')
                })
                res.end();
            }
        })
        res.end('No tenemos sucursales en esa Localidad')
    }
}
 