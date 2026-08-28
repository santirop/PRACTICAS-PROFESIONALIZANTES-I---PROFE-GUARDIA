import PromptSync from "prompt-sync";
const prompt = PromptSync();

//Comparar el mayor de dos numeros

let num1 = parseInt(prompt("Ingrese el primer numero: "))
let num2 = parseInt(prompt("Ingrese el primer numero: "))

if (num1>num2) {
    console.log("EL mayor de los dos numeros es: " + num1);
    
}else{
    console.log("El  mayor de los dos numeros es: " + num2);
    
}