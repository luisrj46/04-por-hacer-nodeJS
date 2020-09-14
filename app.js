/*




*/
const colors = require("colors");


const argv = require('./config/yargs').argv;


const { crear, getListado, actualizar, borrar } = require('./por-hacer/por-hacer');
// console.log(argv);
let comando = argv._[0];
// console.log(argv);

switch (comando) {
    case 'crear':

        let tarea = crear(argv.descripcion)
            // crearArchivo(argv.base, argv.limite)
            //     .then(archivo => console.log(`el Archivo ${archivo} ha sido creado`.))
            //     .catch(e => console.log(e));
        console.log(tarea);
        break;
    case 'listar':
        let list = getListado().listadoPorHacer;
        for (let tarea of list) {
            console.log('********** Por Hacer ************'.green);
            console.log('descripcion: ', tarea.descripcion);
            console.log('estado: ', tarea.completado);
            console.log('*********************************\n'.green);
        }
        console.log('Verdaderas ', getListado().listaTrue.length);
        console.log('********** Por Hacer True ************'.green);
        getListado().listaTrue.forEach(element => {
            console.log('desc: ', element.descripcion);
            console.log('comp: ', element.completado);
        });
        console.log('********** Por Hacer False ************'.green);
        getListado().listaTrue.forEach(element => {
            console.log('desc: ', element.descripcion);
            console.log('comp: ', element.completado);
        });
        console.log('Falsas ', getListado().listaFalse.length);

        break;
    case 'actualizar':
        actualizar(argv.descripcion, argv.completado)
        break;
    case 'borrar':
        borrar(argv.descripcion)
        break;

    default:
        console.log('Comando no reconocido');

        break;

}