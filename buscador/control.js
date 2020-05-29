const buscar = require('./buscar')
const mostrar = (file, country, year) => {
    buscar.literal1(file, country, year);
};

const guardar = (file, country, year, out) => {
    buscar.getE(file, country, year).then(v => escribirjson(out, v)).catch(msg => console.log(msg.message));
};
module.exports = {
    mostrar,
    guardar
}