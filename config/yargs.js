const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
}

const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como completado o pendinte la tarea'
}

//configuramos el argv con comandos
const argv = require('yargs')
    .command('crear', 'Crear una tarea por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado cpletado de una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Eliminar tarea', {
        descripcion
    })
    .help()
    .argv; //paquete quwe se instala


//se eporta el modulo
module.exports = {
    argv: argv //objeto
}