const fs = require("fs");
const csv = require("csv-parser");
let vector = [];

const lecturacsv = async(file) => {
    const g = fs.createReadStream(file)
        .on("error", (err) => console.log(err))
        .pipe(csv({ cast: true, delimiter: ',' }))
    for await (const row of g) {
        for (let i = 4; i < 65; i++) {
            if (row[i] == "" || row[i] == " ") {
                row[i] = "0";
            }
        }
        vector.push(row);
    }
    return 'Se ha terminado de leer el archivo';
};

const consulta = async(anio, country) => {
    let vec = [];
    year = (anio % 1960) + 4;
    for (let i = 4; i < vector.length; i++) {
        if (vector[i][1] === country) {
            let temp = {
                datos: vector[i][2],
                pais: vector[i][0],
                anio: anio,
                valor: vector[i][year],
            };
            vec.push(temp);
            break;
        }
    }
    return vec;
};

const literal1 = async(file, country, year) => {
    let v = await lecturacsv(file);
    //console.log(v);
    let g = await consulta(year, country);
    return g;
};
module.exports = {
    literal1
}