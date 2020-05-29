const argv = require('./config/yargs').argv;
const control = require('./buscador/control')
let comando = argv._[0];
//Oscar
switch (comando) {
    case 'mostrar':
        control.mostrar(argv.file, argv.country, argv.year)
        break;
    case 'guardar':
        control.guardar(argv.file, argv.country, argv.year, argv.out);
        break;
    default:
        console.log('Comando no reconocido');
}