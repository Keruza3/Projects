// Un sistema solicita al usuario una contraseña para ingresar. 
// Tiene hasta 3 intentos para acertarla. Si la contraseña es correcta, se le da acceso. 
// De lo contrario, el acceso se deniega. Contraseña correcta "3propiedades"

const contraseña = "3propiedades"

for(let i = 0; i <= 3; i++) {

    if(intento = prompt("ingrese la contraseña:", "") == contraseña){
        
        console.log("contraseña correcta");
    }
    else{
        console.log("Le quedan " + (3 - i) + "intentos");
    }
}