const calculadora = require("./CalcObj");
let accion = process.argv[2]; //Capturar la entrada por terminal   node app.js crear "cocinar"
let n1 = process.argv[3];
let n2 = process.argv[4];

switch (accion){
    case "sumar":
        console.log("------------------------------");
        console.log("");
        console.log(" El resultado de la suma es " + calculadora.suma)
        break;
    case "restar":
        break;
    case "multiplicar":
        console.log(" El resultado de la multiplicacion es " + calculadora.multiplicacion);
        break;
    case "dividir":
        break;

    default: 
    console.log("Debe elegir un parámetro válido \t")
    console.log("Los parámetros válidos son: sumar,restar, multiplicar, dividir \t")
    console.log("Debe ingresar dos números para hacer la operación")
}