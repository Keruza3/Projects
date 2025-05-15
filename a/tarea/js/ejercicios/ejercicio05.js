// Un agricultor desea saber cuántos kilogramos de frutas ha cosechado en 5 árboles. 
// Cada árbol produce una cantidad distinta, que se ingresará en el sistema. 
// Al finalizar, debe mostrarse la cantidad total recolectada. 

let resultado = 0;

for(let i = 0; i == 5; i++) {

    resultado += prompt("ingrese los kg del arbol " + i, 0);
}

console.log(resultado);