'use strict'


function getElements(req , res){
        //res.send("Peticion Recibida")
        //res.json({"response":"Peticion Recibida"})
        res.status(200).json({"response":"Peticion Recibida"})
} 

function newElement(req, res){
    const element = req.body;
    console.log(element)
    res.status(200).json(element)
}


module.exports.getElements = getElements
module.exports.newElement = newElement