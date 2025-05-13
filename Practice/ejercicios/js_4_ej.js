/*Ejercicio propuesto
Crear una funcion que reciba una cadena de texto y
    - La convierta a mayusculas
    - Reemplace una palabra dentro del string
    - Elimine los espacios en blanco sobrantes*/


    function convertirTexto() {

        let oracion = prompt("Ingrese la oracion que quiere modificar: ", "");

        oracion = oracion.toLocaleUpperCase();

        let palabra = prompt("Ingrese la palabra que quiere modificar: ", "");

        palabra = palabra.toLocaleUpperCase();

        let modificar = prompt("Ingrese la palabra por la que la quiere modificar");
        
        modificar = modificar.toLocaleUpperCase();

        let oracionFinal = oracion.replace(palabra, modificar);

        return oracionFinal  
    }