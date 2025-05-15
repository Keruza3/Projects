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

        /////////////////////////////
            //SCOPE(Ambito)//

// Es el contecto en el cual las variables y funciones son accesibñes y pueden ser referenciadas
// global scope o ambito local
// las variables declaradas fiera dwe cualquier funcion o bloque{} tienen alcance global y son accesisbles desde cualquier parte del codigo

var globalVar = "Soy global";

function mostrarGlobal() {
    console.log(globalVar);
}

//local scope - Function scope o ambito local o de funcion
// Las varuiables declaradas dentro de una funcion solo son accesibles dentro de esa funcion -> ambito local

function mostrarLocal() {

    var localvar = ("Soy local");
    console.log(localvar);
}

mostrarLocal(); // soy local

console.log(mostrarLocal) //valor not defined

//bloack scope o ambito de bloque
// a partir de ES6 (JS 2015), las variables let y const tienen alcance de bloque
// esto signidica que solo son accesibles dentro del bloque en el que se declaran

if(true) {
    let bloqueBar = "Soy un bloque";
    console.log(bloqueBar);
}

console.log(bloqueBar);

//scope chain o cadena de ambito
// Cuando intentamos acceder a una variable, js busca en la cadena de ambito
// comienza  oir ek cibtexti (ambito) mas interno y va moviendose hacua los externos hasta encontrar la varfiable o llegar al ambnito global

var globarvar2 = "Global 2";

function externa() {
    var externaVar = "externa";

    function interna() {

        var internaVar = "interna";

        console.log(globarvar2);
        console.log(externaVar);
        console.log(internaVar);
    }

    interna();
    console.log(internaVar);
}

externa();
// tip: siempre internar cer hasta donde llega el codigo con un console.log("test")

// function scope (ambito de funcion) vs block scope (ambito de bloque)
// con function scope, las variables declaradas con var tienen ambito de funcion.
// por tanto si se declaran adentro de una funcion, no son accesibles fuera de esa funcion, pero NO estan limitadas por bloques

function scopeFunction() {
    if(true) {
        var funcionVar = "soy de funcion";
    }

    console.log(funcionVar);
}

scopeFunction();

// con block scope, las variables let y const eran limitadas por el BLOQUE {} en el que se declaran

function scopeBloque() {
    if(true) {
        let bloqueLet = "Soy de bloque";
        const bloqueConst = "yo soy de bloque tambien";
    }
}

scopeBloque();

                ///////////////////////////
                // Hoisting (Elevación) //
// Las declaraciones de variables y función en JavaScript se mueven hacia arriba de su contexto de ejecución
// Solo las declaraciones son elevadas, no las inicializaciones

// variables con var: Se elevan y se inicializan con undefined

console.log(elevadaVar);
var elevadaVar = "Soy elevada!" 
console.log(elevadaVar);

// variables con let y const: Se elevan pero NO se inicializan (de hecho nos tira un error al acceder antes de la declaracion)

console.log(elevadaLet);
let elevadaLet = "soy de funcion"; 

console.log(elevadaLet);

// diferencia entre var y let y const

//var: tiene ambito de funcion (se declara dentro de la funcion actul y esta disponible en todo momento) y permite la redeclaracion y reasignacion

// let: tiene ambito de bloque (se deckara debtri de un bloque {}) y solo esta disponible dentro de ese bloque. tambien permite la redeclaracion pero no la reasignacion

// const: tiene ambito de bloque({}) y solo esta dentro de ese bloque. pero a diferencia de let prohibe la reasignacion y la redeclaracion

let i = 0;

function muestralet() {

    i = l;

    let j = 2;

    if(true) {
        console.log(1);
        console.log(j);
    }
}

console.log(i);
muestralet();

function muestralet2() {
    let x = 1;
    {
        let y = 2;
        console.log(y); //2
    }

    console.log(x); //1
    console.log(y); // error y is not defined
}

muestralet2();

//recomendaciones
// usaremos const para variables de solo lectura, como constantes u objetos inmutables
// usaremos let para variables que puedan cambiar con el timepo pero que no deban volver a declararse
// evitar siempre usar ar debido a su ambito global o de funcion que puede dar lugar a bugs y problemas

const PI = 3.1416;

let contador = 0;
contador ++;
console.log(contador);

//NO RECOMENDADO :var

var x = 10;
x = 20;

/*
var :
• De ámbito global o de ámbito de función.
• Puede ser redeclarado y reasignado.
• Tiene elevación a nivel de función, lo que significa que puede utilizarse antes de la declaración.
let :
• De ámbito bloque (dentro de un bucle, una sentencia condicional o una función).
• Se puede volver a declarar, pero no reasignar.
• Tiene elevación a nivel de bloque, lo que significa que no es accesible antes de la declaración.
const :
• A nivel de bloque (dentro de un bucle, sentencia condicional o función).
• No se puede volver a declarar ni reasignar.
• Tiene elevación a nivel de bloque, lo que significa que no es accesible antes de la declaración.
*/

//////////////////////////////
///PARAMETROS Y ARGUNEMTOS///

function sumame(a, b) {

    let resultado = a + b;
    console.log(`el resultado es: ${resultado}`);
}

sumame(5, 3);

function multiplicame(a, b) {

    return a * b;
}

console.log(multiplicame(4, 5));

function saludame(nombre = "maestro") {

    console.log(`como le va ${nombre}`); 
}

function sumasTresNum(a, b, c) {

    return a + b + c; 
}

let sumaTres = sumasTresNum(3 , 2, 1);

console.log(sumaTres);


////////////////////////////////////////
        ///JAVA SCRIPT IV///

//INTRODUCCION A ARRAYS Y OBJETOS. METODOS DE STRINGS Y ARRAYS

// arrays y objetos son estructuras de datos fundamentales
// arrays para almacenar una lista ORDENADA de elementos
// objetos para almacenar datos con propiedades CLAVE-VALOR

/* 
USO PRINCIPAL: 
    ARRAY: Lista ordenada de elementos
    OBJETOS: Coleccion de pares clave-valor



*/


            //////////
            //ARRAYS//
let frutas = ["pera", "banana", "mandarina"];

console.log(frutas[0]); //pera
            ///////////
            //OBJETOS//

//objetos para almacenar datos con propiedades CLAVE-VALOR

let alumno = {

    nombre: "camilo",
    edad: 19,
    ciudad: "Lanus",

    agitar: function() {
        console.log("Aguante Lanus");
    }
};

// Notacion de punto
console.log(alumno.nombre);

//notacion corchete

console.log(alumno["ciudad"]);

alumno.agitar();

//agregar una propiedad
alumno.pais = "argentina";

console.log(alumno);

//eliminar una propiedad

delete alumno.edad;
console.log(alumno);

//ejemplo de un objeto completo

let libro = {

    titulo: "el eternauta",
    autor: "hector german oesterheld",
    año: 1957,
    
    detalles: function(){

        return `${this.titulo} es un libro escrito por ${this.autor} en el año ${año}.`
    }
};

console.log(libro.detalles);

libro.editorial = "hora cero semanal";

console.log(libro)

                    /////////////////////////////////////////////
                    //OBJECT WRAPPERS - ENVOLVEDORES DE OBJETOS//

// java script otorga metodos a tipos de datos primitivos
// por eso se dice que JS son todo objetos (de datos que no son objetos)

let texto1 = "JS esta re bueno";

console.log(texto1.toLocaleUpperCase);
console.log(texto1.toLocaleLowerCase);

// reemplazamos valores

let texto2 = "JS es dificil"
let nuevotexto2 = texto2.replace("dificil", "facil");

console.log(nuevotexto2);

// Extraer una parte del string sin alterar el string original

let texto3 = "aprendiendo javaScript";
let parte3 = texto3.slice(11, 21);
console.log(parte3);

//dividir un string en un array de subcadenas

let texto4 = "MANZANA, NARANJA, POMELO";
let frutas4 = texto4.split(",");
console.log(frutas4)

// eliminar los espacios en blanco al principio y al final de un string(tambien esta trimStart y trimEnd)

let texto5 = "      JS      ";

console.log(texto5.trim);

//replace all (bueno)


// Eliminar el último valor de un array
let ultimaVerdura = verduras.pop();
console.log(ultimaVerdura);
console.log(verduras);

// Eliminar el PRIMER valor de un array
verduras.shift();
console.log(verduras);

// Añadimos uno o más elementos al INICIO del array
verduras.unshift("Ajo");
console.log(verduras);

// EXTRA: Otras estructuras de datos

// Date
// Estructura para manejar fechas y horas

const fecha = new Date("2023-12-25");
console.log(fecha.getFullYear);

//JSON( JavaScript Object Notation)
// Estructura para reprensentar datos en un texto. Se convierte a/desde ibjetis con json.Stringify() y JSON.parse()
const persona = {nombre: "Ana", edad: 30};
const json = JSON.stringify(persona);

console.log(json)

const obj = JSON.parse(json);
console.log(obj);

// Map
// Colección de pares clave-valor donde las claves pueden ser de cualquier tipo
const mapa = new Map()
mapa.set("nombre", "Ana");
mapa.set(123, "ID");
mapa.set(true, "activado");

// Set
// Colecciones de valores unicos. NO permite valores duplicados
const conjunto = new set([1, 2, 2, 3]);
conjunto.add(4);
console.log(conjunto);
console.log(conjunto.has(2));

// WeakMap
// similiar a map, pero solo acepta objetos como claves

// WeakSet
// Como set, pero solo acepta objetos y no valores primitivos

// Typed Array buffer
// Para trabajar con datos binarios en bruto

                        ////////////////////////////
                        //////JAVA SCRIPT V/////////

// Objetos, clases y objetos globales. ALmacenamiento persistente
// Iteracion en arrays, objetos y arrays de objetos

// Object literal - objeto literal
// La manera mas comun de crear objetos en JavaScript

let auto = {
    marca: "Renault 12",
    modelo: 12,
    año: 2021,

    getInfo: function() {
        return `Este auto es un ${this.marca} del año ${this.año}`;
    }
}

console.log(auto,getInfo());

// Las clases en JavaScript
// las clases en JS son una forma de crear objetos y metodos. Proporcionan una estructura clara para organizar el codigo
// Fueron introducias en ES6 y simplifican la creacion de objetos con las fucniones constructoras anteriores

class Persona{

    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar() {
        console.log(`hola!, soy${this.nombre}`);
    }
}

let kevin = new Persona("Kevin", 25);
console.log(kevin);
kevin.saludar();

// Herencia
// Creamos nuevas clases basadas en clases existentes
// La clase hija puede heredar propiedades y métodos de la clase utilizando la palabra clave "extends"
class Animal {
  constructor(nombre) {
    this.nombre = nombre;
  }

  hacerSonido() {
    console.log(`${this.nombre} hace un sonido`);
  }
}

class Perro extends Animal {
  ladrar() {
    console.log(`${this.nombre} ladra`);
  }
}

let miPerro = new Perro("Firulais");
miPerro.hacerSonido();
miPerro.ladrar();
                        ///////////////////////////
                            // Clases globales

// Objetos globales en JS 

// Son objetos que estan disponibles en todo entorno de ejecucion sin necesidad de importarlos o declararlos explicitamente

// Objetos que estan disponibles en todo entorno de ejecucion sin necesidad de importarlos o declararlos explicitamente

// objetos globales del navegandor: Window

// alert(), prompt y confirm() son metodos de window

// set timeout() setInterval()

//metodos para programar la ejecucion de codigo despues de un tiempo setTimeout o en intervalos regulares setInterval
setTimeout(() => console.log("hola despuesn de dos segundos"), 500);

//location 
// Proporcionar informacion sobre la url actual de la pagina y permite redireccionar a otras URL

console.log(window.location.href);

//navigator
// Contiene informacion sobre el navegador, como la version, el agente de usuario y la geolocalizacion

console.log(navigator.userAgent);

/////////////
///console///

// Es un objeto global que proporiona metodos para acceder a la consola del navegador y se utiliza principalmente para depurar codigo
//y mostrar mensajes informativos, advertencias o errores

console.log("Mernsaje informativo") //Muestra mensajes informativos en consola
console.error("Esto es un error") //Muestra errores por consola
console.warn("Advertencia") // Muestra advertencias

let usuariosMuestra = [

    {nombre: "nahuel", edad: 30},
    {conmbre: "Lautaro", edad: 25}
];

console.table(usuariosMuestra) // Mostrar datos en forma de tabla, util para arrays y objetos


console.time("Tiempo ejecucion");

for(let i = 0; i < 1000; i++) {
    //simulaicon tarea
}

console.timeEnd("Tiempo ejecucion");

// Almacenamiento en JavaScript

// sessionStorage() localStorage() y Cookies

//Son mecanismos del navegador para almacenar datos del lado del cliente

//Cookies
// Auntentication (sesion), preferencias del usuario, seguimiento de actividad
//////HASTA ACA LLEGUE
/*
                        ///////////////////////////
                            // localStorage //
                        ///////////////////////////

    // Descripción //

- Nos permite almacenar datos de manera persistente en el navegador.

- Los datos almacenados en localStorage NO tienen una fecha de expiración, esto significa que estarán disponibles incluso después de cerrar el navegador o apagar la computadora.

    // Características //
- Capacidad de almacenamiento de 5-10 MB
- Persistencia: Los datos permanecen almacenados hasta que son eliminados manualmente
- Almacenamiento por origen (dominio y protocolo): 
  Los datos se almacenan por dominio, lo que significa que SOLO son accesibles dentro del mismo dominio
- Datos almacenados como strings: Todos los datos almacenados en localStorage son de tipo string. Si se quiere almacenar otros tipos de datos, como objetos, deben ser convertidos a strings (generalmente JSON)

    // Métodos //
- Guardar datos: localStorage.setItem(clave, valor)
- Leer datos: localStorage.getItem(clave)
- Eliminar un dato: localStorage.removeItem(clave)
- Eliminar todos los datos: localStorage.clear()
*/


