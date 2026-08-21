//Condicionales/Selectivas
//Simples
//Comparar el mayor de dos numeros
let numero1 = 5;
let numero2 = 10;
//Primero mayor
if(numero1>numero2){
    console.log("El mayor es: "+numero1);
}

if(numero2>numero1){
    console.log("El mayor es: "+numero2);
}
//doble
//Positivo o Negativo;
let numero3=-30;
if(numero3>0){
console.log("El numero es positivo");
}else if(numero3<0){
    console.log("El numero es negativo");
}else{
    console.log("El numero es neutro");
}

//Ejercicio
//+0
let base1=2;
let expP=2;

let result1=base1**expP;
console.log("El resultado con exponente mayor a 0 es: "+result1)

//-0
let base2=2;
let expN=-2;

let result2=base2**expN;
console.log("El resultado con exponente menor a 0 es: "+result2);

//0
let base3=2;
let exp0=0;

let result3=base3**exp0;
console.log("El resultado con exponente igual a 0 es: "+result3);

