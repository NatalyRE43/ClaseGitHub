const calcu = require("./CalcObj");
let accion = process.argv[2]; //Capturar la entrada por terminal   node app.js crear "cocinar"
let n1 = process.argv[3];
let n2 = process.argv[4];

switch (accion){
    case "sumar":
        let sumar = calculadora.suma(n1,n2)
        console.log("------------------------------");
        console.log("");
        console.log(" El resultado de la suma es " + sumar)
        break;
    case "restar":
        let restar = calculadora.resta(n1,n2);
        console.log("-----------------------------------------");
        console.log("|El Resultado de la Resta es:"+ restar +"     |");
        console.log("-----------------------------------------");
        break;
    case "multiplicar":
        let multiplicar = calculadora.multiplicacion(n1,n2)
        console.log(" El resultado de la multiplicacion es " + multiplicar);
        break;
    case "dividir":
        let division = calculadora.division(n1,n2);
        console.log("-----------------------------------------");
        console.log("|El Resultado de la Resta es:"+ division +"     |");
        console.log("-----------------------------------------");
        break;

    default: 
    console.log("Debe elegir un parámetro válido \t")
    console.log("Los parámetros válidos son: sumar,restar, multiplicar, dividir \t")
    console.log("Debe ingresar dos números para hacer la operación")
}