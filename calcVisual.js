const calculadora = require("./CalcObj");
let accion = process.argv[2]; //Capturar la entrada por terminal   node app.js crear "cocinar"
let n1 = process.argv[3];
let n2 = process.argv[4];

switch (accion){
    case "sumar":
        break;
    case "restar":
        break;
    case "multiplicar":
        break;
    case "dividir":
        break;

    default: 
    console.log("Debe elegir un parámetro válido \t")
    console.log("Los parámetros válidos son: sumar,restar, multiplicar, dividir \t")
    console.log("Debe ingresar dos números para hacer la operación")
}