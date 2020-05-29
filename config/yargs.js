const archivo = {
    demand: true,
    alias: "f",
    desc: "Permite establecer el path del archivo CSV que contiene los datos a analizar",
};
const pais = {
    alias: "c",
    default: "ECU",
    desc: "Permite determinar el país a analizar a través de su código ISO 3166 ALPHA-3. El valor por defecto es “ECU”",
};
const anio = {
    alias: "y",
    default: "1960",
    desc: "Permite especificar el año para el cual se requiere las estadísticas. Por defecto, 1960"
};


const argv = require("yargs")
    .command("mostrar", "Imprimir en Pantalla Resultados", {
        archivo,
        pais,
        anio
    })
    .command("guardar", "Este comando genera un archivo de texto con el resultado de la búsqueda", {
        archivo,
        pais,
        anio
    }).argv;
module.exports = {
    argv,
};