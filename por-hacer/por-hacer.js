const fs = require('fs');

let listadoPorHacer = [];


const guardarDB = () => {

    let data = JSON.stringify(listadoPorHacer); //perite mandar un objeto a un json totalmente valido

    fs.writeFile(`db/data.json`, data, (err) => {
        if (err) throw new Error(
            'No se pudo grabar', err
        );
    });
}


//leer el archivo Json
const CargarDB = () => {

    try {
        listadoPorHacer = require('../db/data.json');
        //console.log(listadoPorHacer);
    } catch (error) {
        listadoPorHacer = [];
    }


}


const crear = (descripcion) => {

    CargarDB();
    let porHacer = {
        descripcion,
        completado: false,
    };

    //se manda al arreglo
    listadoPorHacer.push(porHacer);

    guardarDB();

    return porHacer;

}


const getListado = () => {

    CargarDB();
    return listadoPorHacer;
}


const Actualizar = (descripcion, completado = true) => {
    CargarDB(); //se cragan los datis

    // let index = listadoPorHacer.findIndex(tarea => {
    //     return tarea.descripcion === descripcion;
    // });
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);

    if (index >= 0) {

        listadoPorHacer[index].completado = completado; //posicion del arreglo obtenido
        guardarDB();
        return true;

    } else {
        return false;
    }
}


const Borrar = (descripcion) => {

    CargarDB();

    //let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);


    let nuevoListado = listadoPorHacer.filter(tarea => {
        return tarea.descripcion !== descripcion
    });

    if (listadoPorHacer.length === nuevoListado.length) {

        return false;
    } else {
        listadoPorHacer = nuevoListado;
        guardarDB();
        return true;
    }
}

module.exports = {
    crear,
    getListado,
    Actualizar,
    Borrar
}