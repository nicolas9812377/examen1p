const buscar = require('./buscar')
const fs = require("fs-extra");
let pais = ["ABW", "AFG", "AGO", "ALB", "AND", "ARB", "ARE", "ARG", "ARM", "ASM", "ATG", "AUS", "AUT", "AZE", "BDI", "BEL", "BEN", "BFA", "BGD", "BGR", "BHR", "BHS", "BIH", "BLR", "BLZ", "BMU", "BOL", "BRA", "BRB", "BRN", "BTN", "BWA", "CAF", "CAN", "CEB", "CHE", "CHI", "CHL", "CHN", "CIV", "CMR", "COD", "COG", "COL", "COM", "CPV", "CRI", "CSS", "CUB", "CUW", "CYM", "CYP", "CZE", "DEU", "DJI", "DMA", "DNK", "DOM", "DZA", "EAP", "EAR", "EAS", "ECA", "ECS", "ECU", "EGY", "EMU", "ERI", "ESP", "EST", "ETH", "EUU", "FCS", "FIN", "FJI", "FRA", "FRO", "FSM", "GAB", "GBR", "GEO", "GHA", "GIB", "GIN", "GMB", "GNB", "GNQ", "GRC", "GRD", "GRL", "GTM", "GUM", "GUY", "HIC", "HKG", "HND", "HPC", "HRV", "HTI", "HUN", "IBD", "IBT", "IDA", "IDB", "IDN", "IDX", "IMN", "IND", "INX", "IRL", "IRN", "IRQ", "ISL", "ISR", "ITA", "JAM", "JOR", "JPN", "KAZ", "KEN", "KGZ", "KHM", "KIR", "KNA", "KOR", "KWT", "LAC", "LAO", "LBN", "LBR", "LBY", "LCA", "LCN", "LDC", "LIC", "LIE", "LKA", "LMC", "LMY", "LSO", "LTE", "LTU", "LUX", "LVA", "MAC", "MAF", "MAR", "MCO", "MDA", "MDG", "MDV", "MEA", "MEX", "MHL", "MIC", "MKD", "MLI", "MLT", "MMR", "MNA", "MNE", "MNG", "MNP", "MOZ", "MRT", "MUS", "MWI", "MYS", "NAC", "NAM", "NCL", "NER", "NGA", "NIC", "NLD", "NOR", "NPL", "NRU", "NZL", "OED", "OMN", "OSS", "PAK", "PAN", "PER", "PHL", "PLW", "PNG", "POL", "PRE", "PRI", "PRK", "PRT", "PRY", "PSE", "PSS", "PST", "PYF", "QAT", "ROU", "RUS", "RWA", "SAS", "SAU", "SDN", "SEN", "SGP", "SLB", "SLE", "SLV", "SMR", "SOM", "SRB", "SSA", "SSD", "SSF", "SST", "STP", "SUR", "SVK", "SVN", "SWE", "SWZ", "SXM", "SYC", "SYR", "TCA", "TCD", "TEA", "TEC", "TGO", "THA", "TJK", "TKM", "TLA", "TLS", "TMN", "TON", "TSA", "TSS", "TTO", "TUN", "TUR", "TUV", "TZA", "UGA", "UKR", "UMC", "URY", "USA", "UZB", "VCT", "VEN", "VGB", "VIR", "VNM", "VUT", "WLD", "WSM", "XKX", "YEM", "ZAF", "ZMB", "ZWE"]


const mostrar = (file, country, year) => {
    return new Promise((resolve, reject) => {
        if (year < 1960 || year > 2019) {
            reject(`El año ${year} no esta en el rango`);
            return;
        }
        if (pais.find(p => p == country) != country) {
            reject(`El codigo del pais ${country} no existe`);
            return;
        }
        buscar.literal1(file, country, year).then(v => resolve(v)).catch(msg => console.log(msg.message));
    });
};

const guardar = (file, country, year) => {
    return new Promise((resolve, reject) => {
        if (year < 1960 || year > 2019) {
            reject(`El año ${year} no esta en el rango`);
            return;
        }
        if (pais.find(p => p == country) != country) {
            reject(`El codigo del pais ${country} no existe`);
            return;
        }
        buscar.literal1(file, country, year).then(v => console.log(escribirTexto(v, country, year))).catch(msg => console.log(msg.message));
    });
};

const escribirTexto = (vector, country, year) => {
    temp = '';
    for (let lista of vector) {
        temp += `Datos: ${lista.datos}\n`;
        temp += `Pais: ${lista.pais}\n`;
        temp += `Año: ${lista.anio}\n`;
        temp += `Valor: ${lista.valor}`;
    }
    fs.outputFile(`resultados/${country}-${year}.txt`, temp, (err) => {
        if (err) throw new Error("Error al crear archivo", err);
    });
    return `Archivo guardado exitósamente: resultados/${country}-${year}.txt`

};
module.exports = {
    mostrar,
    guardar
}