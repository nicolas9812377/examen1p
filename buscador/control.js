const buscar = require('./buscar')
const fs = require("fs-extra");
let pais = ["AFG", "ALA", "ALB", "DZA", "ASM", "AND", "AGO", "AIA", "ATA", "ATG", "ARG", "ARM", "ABW", "AUS", "AUT", "AZE", "BHS", "BHR", "BGD", "BRB", "BLR", "BEL", "BLZ", "BEN", "BMU", "BTN", "BOL", "BES", "BIH", "BWA", "BVT", "BRA", "IOT", "VGB", "BRN", "BGR", "BFA", "BDI", "KHM", "CMR", "CAN", "CPV", "CYM", "CAF", "TCD", "CHL", "CHN", "CXR", "CCK", "COL", "COM", "COK", "CRI", "HRV", "CUB", "CUW", "CYP", "CZE", "COD", "DNK", "DJI", "DMA", "DOM", "TLS", "ECU", "EGY", "SLV", "GNQ", "ERI", "EST", "ETH", "FLK", "FRO", "FJI", "FIN", "FRA", "GUF", "PYF", "ATF", "GAB", "GMB", "GEO", "DEU", "GHA", "GIB", "GRC", "GRL", "GRD", "GLP", "GUM", "GTM", "GGY", "GIN", "GNB", "GUY", "HTI", "HMD", "HND", "HKG", "HUN", "ISL", "IND", "IDN", "IRN", "IRQ", "IRL", "IMN", "ISR", "ITA", "CIV", "JAM", "JPN", "JEY", "JOR", "KAZ", "KEN", "KIR", "XKX", "KWT", "KGZ", "LAO", "LVA", "LBN", "LSO", "LBR", "LBY", "LIE", "LTU", "LUX", "MAC", "MKD", "MDG", "MWI", "MYS", "MDV", "MLI", "MLT", "MHL", "MTQ", "MRT", "MUS", "MYT", "MEX", "FSM", "MDA", "MCO", "MNG", "MNE", "MSR", "MAR", "MOZ", "MMR", "NAM", "NRU", "NPL", "NLD", "ANT", "NCL", "NZL", "NIC", "NER", "NGA", "NIU", "NFK", "PRK", "MNP", "NOR", "OMN", "PAK", "PLW", "PSE", "PAN", "PNG", "PRY", "PER", "PHL", "PCN", "POL", "PRT", "PRI", "QAT", "COG", "REU", "ROU", "RUS", "RWA", "BLM", "SHN", "KNA", "LCA", "MAF", "SPM", "VCT", "WSM", "SMR", "STP", "SAU", "SEN", "SRB", "SCG", "SYC", "SLE", "SGP", "SXM", "SVK", "SVN", "SLB", "SOM", "ZAF", "SGS", "KOR", "SSD", "ESP", "LKA", "SDN", "SUR", "SJM", "SWZ", "SWE", "CHE", "SYR", "TWN", "TJK", "TZA", "THA", "TGO", "TKL", "TON", "TTO", "TUN", "TUR", "TKM", "TCA", "TUV", "VIR", "UGA", "UKR", "ARE", "GBR", "USA", "UMI", "URY", "UZB", "VUT", "VAT", "VEN", "VNM", "WLF", "ESH", "YEM", "ZMB", "ZWE"]
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
        console.log(pais.length);
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
        buscar.literal1(file, country, year).then(v => escribirTexto(v, country, year)).catch(msg => console.log(msg.message));
    });
};

const escribirTexto = (vector, country, year) => {
    fs.outputFile(`resultados/${country}-${year}.txt`, vector, (err) => {
        if (err) throw new Error("Error al crear archivo", err);
    });

};
module.exports = {
    mostrar,
    guardar
}