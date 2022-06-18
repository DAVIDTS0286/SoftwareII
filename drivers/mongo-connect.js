'use restrict'

const mongoose =require('mongoose')

const url = 'mongodb://localhost:27017/store'

const db = mongoose.connect(url, {useNewUrlParser:true},(err)=>{

    if(err){
        console.log('Error en la conexion con Mongo')
    }else{
        console.log('Connect Succes')
    }

})

module.exports = db

