
// 1. Manejo de nùmeros y tipo de datos.

function calcularEstadisticas(datos) {
    // Funciòn que valida que todos los valores ingresados del array sean nùmeros
    if (!Array.isArray(datos) || datos.some(num => typeof num !== 'number')) {
        console.error("Error: todos los elementos deben ser números.");
        return;
    }

    // Funciòn que calcula la media
    const suma = datos.reduce((a, b) => a + b, 0);
    const media = suma / datos.length;

    // Funciòn que calcula la mediana
    const datosOrdenados = [...datos].sort((a, b) => a - b);
    const mitad = Math.floor(datosOrdenados.length / 2);
    const mediana = datosOrdenados.length % 2 === 0 ?
        (datosOrdenados[mitad - 1] + datosOrdenados[mitad]) / 2 :
        datosOrdenados[mitad];

    // Funciòn que calcula la moda
    const frecuencia = {};
    datos.forEach(num => {
        frecuencia[num] = (frecuencia[num] || 0) + 1;
    });
    const maxFrecuencia = Math.max(...Object.values(frecuencia));
    const moda = Object.keys(frecuencia).filter(key => frecuencia[key] === maxFrecuencia);

    // Funciòn que calcula la desviación estándar
    const varianza = datos.reduce((acum, num) => acum + Math.pow(num - media, 2), 0) / datos.length;
    const desviacionEstandar = Math.sqrt(varianza);

    return {
        media,
        mediana,
        moda,
        desviacionEstandar
    };
}

const datos = [1, 2, 3, 4, 4, 5, 5, 5, 6];
console.log("Los resultados son:",calcularEstadisticas(datos));


// 2. Iteración avanzada y destructuring

function procesarDatos(datosArray) {
    return datosArray.map(({ valor }) => calcularEstadisticas(valor));
}

const arrayDeObjetos = [
    { id: 1, valor: [1, 2, 3, 4, 5] },
    { id: 2, valor: [3, 4, 4, 5, 6] }
];
console.log("Probando la funciòn de procesamiento de datos:", procesarDatos(arrayDeObjetos));




// 4. Uso de fechas y tiempos
function calcularDiferenciaFechas(fecha1, fecha2) {
    const diferenciaMs = Math.abs(new Date(fecha2) - new Date(fecha1));
    const dias = Math.floor(diferenciaMs / (1000 * 60 * 60 * 24));
    return dias;
}

const fecha1 = '2023-08-01';
const fecha2 = '2023-09-01';
console.log(`EL resultado de la diferencia en días es: ${calcularDiferenciaFechas(fecha1, fecha2)} días`);


