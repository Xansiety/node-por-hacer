const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer'); // se llama al modulo
//console.log(argv);
const colors = require('colors');

//toma el argumento desde la consola
let comando = argv._[0];
switch (comando) {
    case "crear":
        //console.log('Crear por hacer')
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;

    case "listar":
        let listado = porHacer.getListado();

        for (let tarea of listado) {
            console.log('==============================='.green);
            console.log(tarea.descripcion);
            console.log("Estado: " + tarea.completado);
            console.log('==============================='.green);
        }
        //console.log('listar tareas por hacer')
        break;


    case "actualizar":
        //console.log('actualizar tareas por hacer')

        let actualizado = porHacer.Actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);

        break;
    case "borrar":
        let borrado = porHacer.Borrar(argv.descripcion);
        console.log(borrado);
        break;


    default:
        console.log('Comando no es reconocido');
}