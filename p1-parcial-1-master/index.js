'use strict';

/*
 * LEZCANO, ALEXIS | DE JUAN GUEVARA RAMIREZ, ZAHIR
 */


// Discos:

let discos = []
let disco;
let nombreDisco;
let nombreAutor;
let numeroCodigo;
let nombrePista;
let duracionPista;
let pista;



function agregar() {
    nombreDisco = validarTextoVacio(" del disco");
    nombreAutor = validarTextoVacio(" del autor");
    numeroCodigo = validarCodigo(discos);

    disco = {
        Nombre: nombreDisco,
        Autor: nombreAutor,
        Codigo: numeroCodigo,
        Pistas: []
    }
    do {
        nombrePista = validarTextoVacio(" de la pista");
        duracionPista = validarDuracion();
        pista = {
            Nombre: nombrePista,
            Duracion: duracionPista,
        }

        disco["Pistas"].push(pista);


    }while (confirm("¿Desea ingresar otra pista?") == true);
    discos.push(disco);
}


// Crear la función 
// Recorrer los códigos
// Agregar condicional
// El código numérico único del disco no puede ser menor a 1, ni mayor a 999.
function validarCodigo(discoVerificar){

    let numeroIgresado = parseInt(prompt("Ingrese el número de código:"))
    for (let i = 0; i < discoVerificar.length; i++){
        while((numeroIgresado == discoVerificar[i].Codigo) || (numeroIgresado < 1 || numeroIgresado > 999)){
            alert("codigo ya existente")
            numeroIgresado = parseInt(prompt("Ingrese el número de código "));
        }
    }
    return numeroIgresado;
}


// La duración de cada pista debe estar entre 0 y 7200 (segundos) inclusive.
function validarDuracion(duracionVerificar){

    let numeroIgresado = parseInt(prompt("Ingrese la duración de la pista:"));

        while ((numeroIgresado < 0 || numeroIgresado > 7200 )){
            alert("Duración maxima 7200 (segundos) y duración minima 0 (segundos)")
            numeroIgresado = parseInt(prompt("Ingrese la duración de la pista"));
        }
    
    return numeroIgresado;
}


// El nombre del disco, autor/banda y nombre de la pista no pueden quedar vacíos.
// Pedir el dato, crear una condicional y saber el tamaño del texto.
function validarTextoVacio(tipo){
    
    let textoIngresado = prompt("Ingrese el nombre" + `${tipo}`)
    console.log(textoIngresado.length)
    while (textoIngresado.length < 1) {
        alert("Por favor completa los datos")
        textoIngresado = prompt("Ingrese de nuevo el nombre" + `${tipo}`);
    }
    
    return textoIngresado;
}


// Destacar visualmente con rojo las duraciones mayores a 180
function mostrar(){
    let html = "<ul>";


    for (let i = 0; i < discos.length; i++) {
        html += `<strong> Album: </strong> <li>${discos[i].Nombre}</li>`;
        html += `<strong> Autor: </strong> <li>${discos[i].Autor}</li>`;
        html += `<strong> Código: </strong> <li>${discos[i].Codigo}</li>`;
        
        html += `<strong> Nombre Pista </strong>`;
        for (let j = 0; j < discos[i].Pistas.length; j++){
            html += `<strong> Nombre: </strong> <li>${discos[i].Pistas[j].Nombre}</li> <strong> Duración: </strong> ${colorDuracion(discos[i].Pistas[j].Duracion)}`; 
        }
        }
        
    html += "</ul>";
    document.querySelector("#info").innerHTML = html;

};

function colorDuracion(duracion){

    let retorno = `<li>${duracion}</li>`;

    if(duracion >= 180){
        retorno = `<li style="color: red;"> ${duracion}</li>`
    }
    return retorno;
};

