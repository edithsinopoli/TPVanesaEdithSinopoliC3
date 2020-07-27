const fs= require('fs'); //requiero file system para trabajar con el json

module.exports= database=JSON.parse(fs.readFileSync('./data/concesionarias.json','utf-8'))//lo uso, indicando la ruta del archivo que quiero que lea y como quiero que lo vea. lo parseo (Lo converti en un array de objetos literales).Exporto el json parseado