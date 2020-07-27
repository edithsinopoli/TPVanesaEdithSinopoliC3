let database=require('../data/database') //requiero el archivo con el json parseado
//exporto y declaro el controlador, que opera la tareas de cada ruta
//esta estructura es comun a todos los controladores
module.exports =  controller = {
    index: function(req, res) {
        res.write("Bienvenidos/as a concesionarias VANDEB: \n\n"+'========================================\n\n'); //muestra por pantalla un mensaje
        database.forEach(concesionaria=>{
            res.write(concesionaria.sucursal+'\n')
            res.write('Autos con los que cuenta la sucursal: '+concesionaria.autos.length+'\n----------------------------------------\n\n')
        })        
        res.end()       
    }          
}

