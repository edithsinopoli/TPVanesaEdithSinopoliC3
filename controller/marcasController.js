let database=require('../data/database') //requiero el archivo con el json parseado
//exporto y declaro el controlador, que opera la tareas de cada ruta
//esta estructura es comun a todos los controladores
module.exports =  controller = {
    index: function(req,res){
        res.writeHead(200,{'Content-Type':'text/plain;charset=utf-8'})
        database.forEach(concesionaria=>{
                concesionaria.autos.forEach(auto=>{
                    res.write(auto.marca+'\n~~~~~~~~~~~~~~~~~~~~~~~\n')
                        
                    })  
                })
            res.end();
        },
        mostrar: function(req,res){
            res.writeHead(200,{'Content-Type':'text/plain;charset=utf-8'})
            let idMark=req.params.id //al parametro que recibo de la url le asigno una variable
            database.forEach(concesionaria=>{
                    concesionaria.autos.forEach(auto=>{
                        if(auto.marca.toLowerCase()==idMark.toLowerCase()){
                            res.write(auto.marca+' '+auto.modelo+' '+auto.anio+' '+'\n~~~~~~~~~~~~~~~~~~~~~~~\n')
                        
                            }
                })
        })
            res.end();
        }
    }
