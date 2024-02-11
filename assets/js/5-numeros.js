//INGRESO DE DATOS
// se crean dos variables con sus respectivos valores
console.log("Ingrese cinco números");
const val1 = parseInt(prompt("Ingrese valor 1"));
const val2 = parseInt(prompt("Ingrese valor 2"));
const val3 = parseInt(prompt("Ingrese valor 3"));
const val4 = parseInt(prompt("Ingrese valor 4"));
const val5 = parseInt(prompt("Ingrese valor 5"));


//PROCESO DE DATOS
//se operan los valores y el resultado se guarda en una nueva variable

const sumatoria = val1 + val2 + val3 + val4 + val5;
const promedio = sumatoria/5;


//SALIDA DE DATOS
// Se muestran los resultados en la consola y en el documento

console.log("resultado de sumatoria", sumatoria);
console.log("resultado de promedio", promedio);

document.write(`Para los valores: ${val1}, ${val2}, ${val3}, ${val4}, ${val5}, la suma es ${sumatoria} y el promedio es ${promedio}`);

var sum = document.getElementById("sum");
var prom = document.getElementById("prom");
sum.innerHTML= sumatoria;
prom.innerHTML= promedio;