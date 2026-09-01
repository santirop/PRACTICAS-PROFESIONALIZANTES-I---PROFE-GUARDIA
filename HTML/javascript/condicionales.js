import PromptSync from "prompt-sync";
const prompt = PromptSync();

//Comparar el mayor de dos numeros

//let num1 = parseInt(prompt("Ingrese el primer numero: "))
//let num2 = parseInt(prompt("Ingrese el primer numero: "))

//if (num1>num2) {
   // console.log("EL mayor de los dos numeros es: " + num1);
    
//}else{
 //   console.log("El  mayor de los dos numeros es: " + num2);
    
//}

//Cotizacion de hardware con impuestos cascargados

let PrecioPlacaM= Number(prompt("Ingrese el precio de las placas madre: "));
let CantPlacaM= Number(prompt("Ingrese la cantidad de las placas madre: "));

let PrecioProcesador= Number(prompt("Ingrese el precio de los procesadores: "));
let CantProcesador= Number(prompt("Ingrese la cantidad de los procesadores: "));

let PrecioModulosMR= Number(prompt("Ingrese el precio de los Modulos de Memoria Ram: "));
let CantModulosMR= Number(prompt("Ingrese la cantidad de los Modulos de Memoria Ram: "));

let subB=(PrecioPlacaM*CantPlacaM)+(PrecioProcesador*CantProcesador)+(PrecioModulosMR*CantModulosMR);

if ((CantModulosMR+CantPlacaM+CantProcesador)>10) {
  let  subB1=subB-(subB*0.05);
  let  subIvaCd=subB1+(subB1*0.21);
  let total=subIvaCd+(subIvaCd*0.025)
  console.log("Comprobante:");
  console.log("Subtotal Bruto: $"+subB);
  console.log("Descuento aplicado del 5%: $"+subB1);
  console.log("Iva del 21%: $"+subIvaCd);
  console.log("Percepcion IIBB del %2.5: $"+total);
  console.log("Total a pagar: $"+ total);
}else{
  let  subIvaSd=subB+(subB*0.21);
  let total=subIvaSd+(subIvaSd*0.025)
  console.log("Comprobante:");
  console.log("Subtotal Bruto: $"+subB);
  console.log("Iva del 21%: $"+subIvaSd);
  console.log("Percepcion IIBB del %2.5: $"+total);
  console.log("Total a pagar: $"+ total);
}


