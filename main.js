
// //primer ejercicio

// let numeroMayor = 55

// let numeroVerificar = 43

// if (numeroMayor > numeroVerificar) {
//     console.log("primer numero digitado es mayor");
// }

// //segundo ejercicio

// let numeroTres = 37

// let numeroCuatro = 22

// if (numeroTres === numeroCuatro) {
//     console.log("los numeros son iguales")
// }else{
//     console.log("los numeros son diferentes")
// }

// //tercer ejercicio

// let numeroCinco = 52

// let numeroSeis = 18

// if (numeroCinco == numeroSeis) {
//     console.log("son iguales")
// }else if(numeroCinco < numeroSeis) {
//     console.log("segundo numero digitado es mayor")
// }else{(numeroCinco > numeroSeis)
//     console.log("primer numero digitado es mayor");
// }

// //cuarto ejercicio 

// let numeroSiete = 55

// let numeroOcho = 43

// let numeroNueve = 55


// if (numeroSiete < numeroOcho < numeroNueve) {
//     console.log("numeroNueve es el mayor")
// }else if(numeroSiete > numeroOcho > numeroNueve) {
//     console.log("numeroSiete es el mayor")
// }else{(numeroSiete < numeroOcho > numeroNueve)
//     console.log("numeroOcho es el mayor");
// }

// //quinto ejercicio

// let personaA = {
//     nombre: "Manuel",
//     edad: 29,
//     altura: 176
// }

// let personaB = {
//     nombre: "Hector",
//     edad: 19,
//     altura: 180
// }

// if (personaA.altura > personaB.altura) {
//     alert(personaA.nombre + " es mas alto");
// }else if (personaA.altura < personaB.altura) {
//     alert(personaB.nombre + " es mas alto")
// }

// if (personaA.edad > personaB.edad) {
//     alert(personaA.nombre + " es mayor");
// }else if (personaA.edad < personaB.edad) {
//     alert(personaB.nombre + " es mayor")
// }

// //sexto ejercicio 

// let nombre = prompt("Ingresa tu nombre")
// let edad = prompt("Ingresa tu edad")
// let altura = prompt("Ingresa tu altura")
// let vision = prompt("Ingresa tu vision en escala del 0 al 10")

// let puedeConducir = edad >= 18 && altura >= 150 && vision >= 8
// console.log("aprovado");

//septimo ejercicio



let nom = prompt("Ingresa tu nombre");
let nombreVip = "Manuel";
let entrada = prompt("¿Tienes entrada? (si/no)");

if (nom === nombreVip) {
    alert("Bienvenido " + nom);
} else if (entrada === "si") {
    let tipoEntrada = prompt("¿Pase vip, normal o no?");
    if (tipoEntrada === "vip") {
        alert("Bienvenido " + nom);
    } else if (tipoEntrada === "normal") {
        let preguntaIngreso = prompt("¿Desea utilizarla? (si/no)");
        if (preguntaIngreso === "si") {
            alert("Bienvenido " + nom);
        } else {
            alert("Gracias por su visita " + nom);
        }
    } else {
        alert("Gracias por su visita " + nom);
    }
} else {let comprarEntrada = prompt("¿desea comprar su entrada?(si/no)")
    else if (comprarEntrada === no) {
     alert("Gracias por su visita " + nom);
}
}





