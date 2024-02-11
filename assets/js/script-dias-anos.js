//INGRESO DE DATOS
// se crean la variable con sus respectivos valores
const dias = 800;



//PROCESO DE DATOS
//se operan ambos valores y el resultado se guarda en una nueva variable

let ranos = Math.floor(dias/365);
let rsem = dias - (ranos*365);

rsem = Math.floor(rsem/7);
let rdias = dias - (ranos*365) - (rsem*7);



//SALIDA DE DATOS
// Se muestran los resultados en la consola y en la página

console.log(`${dias} días, equivalen a ${ranos} años ${rsem} semanas` + `y ${rdias} días`);


