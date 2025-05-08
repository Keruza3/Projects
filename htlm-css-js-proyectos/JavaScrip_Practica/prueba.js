console.log("hola")


//COMENTARIOS DE UNA LINEA

/* 
COMENTARIOS DE VARIAS LINEAS
*/
alert("Hola");

// DECLARACION HISTORICA DE VARIABLES

var nombre = "Kevin";

//DECLARACION ACTUAL DE VARIABLES(Puede cambiar)

let edad = 23;

//DECLARACION ACTUAL DE VARIABLES(No se puede cambiar)

const pi = 3.1416;


console.log(nombre);
console.log(edad);
console.log(pi);

//TIPOS DE DATOS PRIMITIVOS

let numero = 42; //Num
let texto = "Hola"; //Strign
let verdadero = true; // Boolean
let vacio = null; //Null
let indefinido; //Variable declarada pero no tiene valor

/* OPERADORES:
    +
    -
    *
    /
    %
    **
    +=
    -=

 COMPARACION:

    ==  igual
    === type
    !=  diferenteLinux Mint 22.1
    !== 
    ><
    =><

    OPERADORES LOGICOS:
     
    && and
     || or
     ! diferente
    */

///////////////////////////////////////////////////////////////////////////
                // Segunda parte//
    //Control de flujo, estructuras de control, condicionales, bucles//

                //////////////////
                //CONDICIONALES//

if(condicion){
    //Se ejecuta si es verdareda
} else if (condiucion2){
    //Se ejecuta si se cumple esta condicion
} else{
    //Se ejecuta si las condiciones no se cumplen
}

let a = -10;

if(a > 0) {
    console.log("El numero es positivo");
} else{
    console.log("El numero es negativo");
}

let estado = true

function alternarEstado() {
    estado = !estado
    console.log("Nuevo estado", estado)
}

alternarEstado();
alternarEstado();
alternarEstado();

            /////////////////////
            //OPERADOR TERNARIO//

let edad2 = 3;
let mensaje = (edad2 >= 18) ? "Sos mayor de edad!" : "Sos menor de edad"
console.log(mensaje)

//EXTRA: flecha? lambda?

const saludarPersona = nombre => {
    const saludo = "hola ${nombre}!";
    return saludo;
}

                //////////
                //BUCLES//

for (let i = 0; i < 5; i++) {
    //sintaxis templates lioteral
    console.log(`interaccion: ${i}`);
}

            //BUCLES ANIDADOS//

for (let x = 0; x < 3; x++) {

    console.log(`${i} - ${x}`);
}

            //CONTROL DE FLUJOS//

    //KEYWORDS:
//BREAK para salir del bucle            
//CONTINUE saltea un bucle 


                //////////
                //SWITCH & PROMPT//



let diaSemana = parseInt(prompt("Escribi el dia de semana"));

switch(diaSemana) {

    case 1:
        break
    
    case 2:
        break   

    case 3:
        break

    case 4:
        break
    
    case 5: 
        break
}


