const fs = require('fs');
// const argv = require('yargs').argv; 

let listadoPorHacer = [];

let guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile(`./db/data.json`, data, (err) => {
        if (err) throw new Error('No se pudo grabar', err);
    })

}

let cargarDB = () => {
    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }
    // console.log(listadoPorHacer);
}

let crear = (descripcion) => {
    cargarDB();
    let porHacer = {
        descripcion,
        completado: false
    }
    listadoPorHacer.push(porHacer);
    guardarDB();
    return porHacer;
}
let getListado = () => {
    cargarDB();
    let listaTrue = listadoPorHacer.filter(tarea => (tarea.completado === false))
    let listaFalse = listadoPorHacer.filter(tarea => (tarea.completado === true))
    return { listadoPorHacer, listaTrue, listaFalse };

}
const actualizar = (descripcion, estado = true) => {
    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    if (index >= 0) {
        listadoPorHacer[index].completado = estado;
        guardarDB();
        console.log("Actualizacion Exitosa");
    } else console.log(`No se encuentran registros para ${descripcion}`);
}

const borrar = (descripcion) => {
    cargarDB();
    let nuevaCadenaa = listadoPorHacer.filter(registro => registro.descripcion !== descripcion)
    if (nuevaCadenaa.length === listadoPorHacer.length) {
        return console.log('No existe el Registro');
    } else {
        listadoPorHacer = nuevaCadenaa;
        guardarDB();
        return console.log('registro Eliminado');

    }

}
module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}