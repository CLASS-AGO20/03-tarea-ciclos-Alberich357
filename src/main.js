export default class App {
    sumatoriaSerieUno(numero) {
        let suma = 1;
        for (let i = 2; i <= numero; i++) {
            suma = suma + 1 / i;
        }
        return suma;
        }
}

let app = new App();
console.log("Funcion sumatoria:");
console.log(app.sumatoriaSerieUno(5));
console.log(app.sumatoriaSerieUno(10));
console.log(app.sumatoriaSerieUno(15));