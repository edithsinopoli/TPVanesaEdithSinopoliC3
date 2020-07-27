let database=require('../data/database') //requiero el archivo con el json parseado
//exporto y declaro el controlador, que opera la tareas de cada ruta
module.exports =  controller = {
    index: function(req, res) {
        res.write("Nuestros Autos:  \n\n");
        database.forEach(concesionaria=>{
            concesionaria.autos.forEach(auto=>{
                res.write(auto.marca+' '+ auto.modelo+' '+auto.color+'\n............\n') 
            })
            res.write('Disponibles: '+concesionaria.autos.length+'\n______________________\n\n')
        })
        res.end()  
    },
    marca: function(req,res){
        res.writeHead(200,{'Content-Type':'text/plain;charset=utf-8'})
        let idMarca=req.params.id//al parametro que recibo de la url le asigno una variable
        database.forEach(concesionaria=>{
                concesionaria.autos.forEach(auto=>{
			if(auto.marca.toLowerCase()==idMarca.toLowerCase()){
                    res.write(auto.marca+' '+auto.modelo+' '+auto.anio+' '+auto.color+'\n********************\n')
            }  
        })
        })
        res.end()
},
opcion: function(req,res){
    res.writeHead(200,{'Content-Type':'text/plain;charset=utf-8'})
    let idMarca=req.params.id//al parametro que recibo de la url le asigno una variable
    let idDato=req.params.dato  //al parametro que recibo de la url le asigno una variable
        database.forEach(concesionaria=>{
                concesionaria.autos.forEach(auto=>{
			if(auto.marca.toLowerCase()==idMarca.toLowerCase()){
                if(auto.anio==idDato){
                    res.write(auto.marca+' '+auto.modelo+' '+auto.anio+' '+auto.color+'\n~~~~~~~~~~~~~~~~~~~~~~~\n')
                }else {
                    if(auto.color===idDato){
                        res.write(auto.marca+' '+auto.modelo+' '+auto.anio+' '+auto.color+'\n~~~~~~~~~~~~~~~~~~~~~~~\n')      
                    }       
            }
            res.write('No se encontraron resultados para su búsqueda') 
        }
        })
        })    
    res.end();
}
}
