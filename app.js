const argv = require('./config/yargs').argv;
const control = require('./buscador/control')
let comando = argv._[0];


switch (comando) {
    case 'mostrar':
        control.mostrar(argv.archivo, argv.pais, argv.anio).then(msg => console.log(msg)).catch(err => console.log(err));
        break;
    case 'guardar':
        control.guardar(argv.archivo, argv.pais, argv.anio).then(msg => console.log(msg)).catch(err => console.log(err));
        break;
    default:
        console.log('Comando no reconocido');
}