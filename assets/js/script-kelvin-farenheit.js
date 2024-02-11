//INGRESO DE DATOS
// se crean dos variables con sus respectivos valores
console.log("Ingrese temperatura en grados Celsius");
const tempcelsius = parseInt(prompt("Ingrese temperatura en grados Celsius"));



//PROCESO DE DATOS
//se opera el valor y el resultado se guarda en una nueva variable

const tempkelvin = tempcelsius+273.15;
const tempfarenheit = (tempcelsius * 9/5) + 32;


//SALIDA DE DATOS
// Se muestran los resultados en la consola y en la página

console.log("La temperatura en grados Kelvin es: ", tempkelvin ," K. ");
console.log("La temperatura en grados Farenheit es: ", tempfarenheit, "°F. ");

document.write("La temperatura en grados Kelvin es: " + tempkelvin + " K. ");
document.write("La temperatura en grados Farenheit es: " + tempfarenheit + "°F. ");
