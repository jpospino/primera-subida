const {argv } = require('./yargs');
const funciones = require('./funciones');

let commando = argv._[0];


switch(commando){
    case 'crear':
        funciones.crear(argv);
        break;
    case 'mostrar':
        funciones.mostrar();
        break;
    case 'mostrarEstudiante':
        funciones.mostrarEstudiante(argv);
        break;
    case 'mostrarMat':
        funciones.mostrarMat();
        break;
    case 'promedioEstudiante':
        funciones.promedioEstudiante(argv);
        break;
    case 'promSuperior':
        funciones.promSuperior();
        break;
    case 'actualizar':
        funciones.actualizar(argv.nombre, argv.asignatura, argv.calificacion);
        break;
    case 'eliminar':
        funciones.eliminar(argv.nombre);
        break;
    default:
        console.log('No ingresó una función existente');
}
