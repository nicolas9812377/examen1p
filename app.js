const argv = require('./config/yargs').argv;
const control = require('./buscador/control');
const colors = require("colors");
let comando = argv._[0];


switch (comando) {
    case 'mostrar':
        control.mostrar(argv.archivo, argv.pais, argv.anio).then(lista => {
            for (let vector of lista) {
                console.log(`Datos: ${vector.datos}`.green);
                console.log(`Pais: ${vector.pais}`.red);
                console.log(`Año: ${vector.anio}`.yellow);
                console.log(`Valor: ${vector.valor}\n`.red);
            }
        }).catch(err => console.log(err));

        break;
    case 'guardar':
        control.guardar(argv.archivo, argv.pais, argv.anio).then(msg => console.log(msg)).catch(err => console.log(err));
        break;
    default:
        console.log('Comando no reconocido');
}