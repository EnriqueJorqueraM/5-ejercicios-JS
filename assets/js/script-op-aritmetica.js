//INGRESO DE DATOS
// se crean dos variables con sus respectivos valores
console.log("Ingrese dos números diferentes y mayores a 0");
const num1 = parseInt(prompt("Ingrese valor 1"));
const num2 = parseInt(prompt("Ingrese valor 2"));


//PROCESO DE DATOS
//se operan ambos valores y el resultado se guarda en una nueva variable

const rsuma = num1+num2;
const rresta = num1 - num2;
const rdivision= num1/num2;
const rmultiplicacion = num1 * num2;
const rmodulo = num1%num2;

//SALIDA DE DATOS
// Se muestran los resultados en la consola y en la página

console.log("resultado de suma", rsuma);
console.log("resultado de resta", rresta);
console.log("resultado de división", rdivision);
console.log("resultado de multiplicación", rmultiplicacion);
console.log("resultado de módulo", rmodulo);
document.write("El resultado de la suma es: "+rsuma+". ");
document.write("El resultado de la resta es: "+rresta+". ");
document.write("El resultado de la división es: "+rdivision+". ");
document.write("El resultado de la multiplicación es: "+rmultiplicacion+". ");
document.write("El resultado del módulo es: "+rmodulo+". ");
