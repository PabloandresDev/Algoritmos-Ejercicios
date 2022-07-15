//Si enumeramos todos los números naturales debajo de 10 que son múltiplos de 3 o 5, obtenemos 3, 5, 6 y 9. La suma de estos múltiplos es 23.
//Encuentra la suma de todos los múltiplos de 3 o 5 por debajo de 1000.
//let total=0
//for (let i=1; i<1000; i++){
//    if ((i%3===0) || (i%5===0)) {
//        total=total+i;
//        console.log(total)
//    }
//}
//console.log(total)
//Cada nuevo término en la sucesión de Fibonacci se genera sumando los dos términos anteriores. 
//Al comenzar con 1 y 2, los primeros 10 términos serán:
//
//1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
//
//Al considerar los términos en la sucesión de Fibonacci cuyos valores no superan los cuatro millones,
// encuentre la suma de los términos de valor par.

/* let ini=1;
let final=2;
let auxTotal=0;
let auxPares=0;

while(auxTotal<=4000000){
   auxTotal=(ini+final)
   ini=((ini-ini)+final);
   final=((final-final)+auxTotal);
   if(auxTotal<4000000){
    console.log(auxTotal)
   }
   if(auxTotal%2==0){
    auxPares=auxPares+auxTotal;
   }
   console.log(auxPares)
}
 */
/* Un número palindrómico se lee igual en ambos sentidos. El palíndromo más grande hecho del producto de dos números de 2 dígitos es 9009 = 91 × 99.

Encuentra el palíndromo más grande hecho del producto de dos números de 3 dígitos.
 */

/* let palindro=[]
let resultadoCadena=0
let auxiliar1=''
let auxiliar2=''
for (let index = 100; index < 999; index++) {
    for (let j = 100; j < 999; j++) {
        resultadoCadena=(index*j)
        auxiliar1=String(resultadoCadena)
        auxiliar2=(auxiliar1.split("").reverse().join(""))
        if(auxiliar1==auxiliar2){
            resultadoCadena=parseInt(resultadoCadena)
            palindro.push(resultadoCadena)
        }
    }
}
console.log(palindro)
console.log(Math.max(...palindro))
 */

/* 2520 es el número más pequeño que se puede dividir por cada uno de los números
 del 1 al 10 sin resto.
¿Cuál es el número positivo más pequeño que es divisible
 por todos los números del 1 al 20? */
  /*  let cont=0
 let i=2520
 while(cont<20){
    for(let j=1; j<=20; j++){
         if (i%j==0){
            cont++  
         } else{
            break;
         }
    }i++
    if(cont>=20){
      console.log(i-1)
    }cont=0
 } */
 
 