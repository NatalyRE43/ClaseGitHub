const calc = require("./CalcObj");
let accion = process.argv[2]; //Capturar la entrada por terminal   node app.js crear "cocinar"
let num1 = process.argv[3];
let num2 = process.argv[4];

switch (accion){
    case "sumar":
        console.log("------------------------------");
        console.log("");
        console.log(" El resultado de la suma es " +calc.suma(num1,num2))
        break;
    case "restar":
        console.log("-----------------------------------------");
        console.log("|El Resultado de la Resta es:"+calc.resta(num1,num2)+"     |");
        console.log("-----------------------------------------");
        break;
    case "multiplicar":
       
        console.log(" El resultado de la multiplicacion es " + calc.multiplicacion(num1,num2));
        break;
    case "dividir":
        console.log("-----------------------------------------");
        console.log("|El Resultado de la Resta es:"+calc.division(num1,num2)+"     |");
        console.log("-----------------------------------------");
        break;

    default: 
    console.log("Debe elegir un parámetro válido \t")
    console.log("Los parámetros válidos son: sumar,restar, multiplicar, dividir \t")
    console.log("Debe ingresar dos números para hacer la operación")
}