export default class App {
    sumatoriaSerieUno(numero) {
        let suma = 1;
        for (let i = 2; i <= numero; i++) {
            suma = suma + 1 / i;
        }
        return suma;
        }
        sumatoriaSerieDos(numero) {
            let suma = 1;
            for (let i = 2; i <= numero; i++) {
                if (i % 2 === 0) {
                suma = suma + 1 / i;
                } else {
                suma = suma - 1 / i;
                }
            }
            return suma;
            }
            esPrimo(numero){
                let i;
                if(numero == 0 | numero == 1 | numero == 4){
                    return false;
                }
            
                for(i=2; i<numero/2; i++){
                    if(numero % i == 0){
                        return false;
                    }
                }
                return true;
                }
                obtenerMultiplos(inicio, fin){
                    if(inicio > fin){
                        let t = inicio;
                        inicio = fin;
                        fin = t;
                    }
                    let i = inicio;
                    let string = "";
                    do {
                        if(i % 3 == 0)
                            string += i.toString();
            
                        i++;
                    }while(i<=fin);
                    return string;
                }  
    }

let app = new App();
console.log("Funcion sumatoria:");
console.log(app.sumatoriaSerieUno(5));
console.log(app.sumatoriaSerieUno(10));
console.log(app.sumatoriaSerieUno(15));
console.log("Funcion sumatoria de la serie dos:");
console.log(app.sumatoriaSerieDos(5));
console.log(app.sumatoriaSerieDos(10));
console.log(app.sumatoriaSerieDos(15));
console.log("Funcion si es primo:");
console.log(app.esPrimo(0));
console.log(app.esPrimo(7));
console.log("Funcion multiplos de un rango convertidos a string:");
console.log(app.obtenerMultiplos(20,35));