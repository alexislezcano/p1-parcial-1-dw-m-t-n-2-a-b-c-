'use strict';

/*
 * APELLIDO, NOMBRE | APELLIDO, NOMBRE
 */

// Ejemplo de la estructura de un disco:
// let disco = {
//     Nombre: 'El lado oscuro de la Programación',
//     Autor: 'Los Programadores Anónimos',
//     Codigo: 1,
//     Pistas: [
//         {
//             Nombre: 'Esa cajita loca llamada variablecita',
//             Duracion: 200,
//         },
//         {
//             Nombre: 'Nunca quise ser un NaN',
//             Duracion: 180,
//         },
//         {
//             Nombre: 'No quiero programar',
//             Duracion: 90,
//         },
//         {
//             Nombre: 'Bajo presión',
//             Duracion: 240,
//         },
//         {
//             Nombre: 'La odisea de las variables privadas',
//             Duracion: 120,
//         },
//         {
//             Nombre: 'Sr. Programador',
//             Duracion: 720,
//         },
//     ],
// };

// Discos:

let discos = []
let disco;
let nombreDisco;
let nombreAutor;
let numeroCodigo;
let nombrePista;
let duracionPista;
let pista;




//Esto es un harcodeo

for(let i = 0; i < 4; i++){
    disco = {
    Nombre: "Fulano",
    Autor: "Fulana",
    Codigo: i,
    Pistas:[]
    }
    discos.push(disco)
}

function agregar() {
    nombreDisco = prompt("Ingrese el nombre del disco");
    nombreAutor = prompt("Ingrese el nombre del autor");
    // numeroCodigo = validarCodigo (Number(prompt("Ingrese el número de código")), discos);
    numeroCodigo = validarCodigo(discos);

    disco = {
        Nombre: nombreDisco,
        Autor: nombreAutor,
        Codigo: numeroCodigo,
        Pistas: []
    }
    do {
        nombrePista = prompt("Ingrese el nombre de la pista");
        duracionPista = Number(prompt("Ingrese la duración de la pista"));
        pista = {
            Nombre: nombrePista,
            Duracion: duracionPista,
        }

        disco["Pistas"].push(pista);


    }while (confirm("¿Desea ingresar otra pista?") == true);
    discos.push(disco);
}
//Crear la función 
//Recorrer los códigos
//Agregar condicional
//El código numérico único del disco no puede ser menor a 1, ni mayor a 999.

function validarCodigo(discoVerificar){

    let numeroIgresado = Number(prompt("Ingrese el número de código:"))
    for (let i = 0; i < discoVerificar.length; i++){
        while(numeroIgresado == discoVerificar[i].Codigo && ){
            alert("codigo ya existente")
            numeroIgresado = Number(prompt("Ingrese el número de código "));
        }
    }
    return numeroIgresado;
}



function mostrar() {
    console.log(discos);
    let html = "<ul>";

    // //     for (const item of discos){
    // //     console.log(item);
    // // }

    console.log(discos.length)

    for (let i = 0; i < discos.length; i++) {
        console.log(discos[i]);
        html += `<strong> Album: </strong> <li>${discos[i].Nombre}</li>`;
        html += `<strong> Autor: </strong> <li>${discos[i].Autor}</li>`;
        html += `<strong> Código: </strong> <li>${discos[i].Codigo}</li>`;
        
        html += `<strong> Nombre Pista </strong>`;
        for (let j = 0; j < discos[i].Pistas.length; j++){
            html += `<strong> Nombre: </strong> <li>${discos[i].Pistas[j].Nombre} \n  </li> \n <strong> Duración: </strong> <li>  ${discos[i].Pistas[j].Duracion} </li>`; 
        }    

    }

    html += "</ul>";

    document.querySelector("#info").innerHTML = html;

};



// Nombre: 'Donda',
// Autor: 'Kanye West',
// Codigo: 1,
// Pistas: [
//             {
//                 Nombre: 'Donda',
//                 Autor: 'Kanye West',
//                 Codigo: 1,
//                 Pistas: 
//             }
//             {
//                 Nombre: 'Jail',
//                 Duracion: 457,
//             },
//             {
//                 Nombre: 'God Breathed',
//                 Duracion: 533,
//             },
//             {
//                 Nombre: 'Off The Grid',
//                 Duracion: 539,
//             },
//             {
//                 Nombre: 'Hurricane',
//                 Duracion: 403,
//             },
//             {
//                 Nombre: 'Praise God',
//                 Duracion: 346,
//             },
//             {
//                 Nombre: 'Jonah',
//                 Duracion: 315,
//             },
//         ],

//         console.log (discos);
//         console.table (discos);



// // Función Cargar:
// function cargar = () => {
//     let html = '<ul>';
//     for (const item of discos) {
//         console.log(item)
//         html += `
//             <li>Kanye West</ul>
//         `
//     }

//     html+= '</ul>';
//     document.querySelector('#info').innerHTML = html;

//     // Cositas:
// };

// // Función Mostrar:
// const mostrar = () => {
//     // Variable para ir armando la cadena:
//     let html = '';

//     // Cositas:

//     // Si modificaste el nombre de la variable para ir armando la cadena, también hacelo acá:
//     document.getElementById('info').innerHTML = html; // <--- ahí es acá
// };

// // Todas las funciones que necesites