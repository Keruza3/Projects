/*
En una empresa hay 3 turnos rotativos (0, 1, 2). 
Según el número de día del mes, se desea saber qué turno le corresponde a un trabajador. 
Pedir el dia entre 1 y 30.
*/

function asignarTurno(dia, turno = 0) {

    for(let i = 0; i <= dia; i++) {

        if(turno == 4) {
            turno = 0;
        }
        else{
            turno++;
        }
    }
}

function turnoCorrespondiente() {

    let numeroElegido = -1;

    while(0 > numeroElegido > 31) {
        
        numeroElegido = prompt("Ingrese el numero del mes: ", "");
    }

    return turno = asignarTurno(numeroElegido);
}


