
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



// let nom = prompt("Ingresa tu nombre");
// let nombreVip = "Manuel";
// let entrada = prompt("¿Tienes entrada? (si/no)");

// if (nom === nombreVip) {
//     alert("Bienvenido " + nom);
// } else if (entrada === "si") {
//     let tipoEntrada = prompt("¿Pase vip, normal o no?");
//     if (tipoEntrada === "vip") {
//         alert("Bienvenido " + nom);
//     } else if (tipoEntrada === "normal") {
//         let preguntaIngreso = prompt("¿Desea utilizarla? (si/no)");
//         if (preguntaIngreso === "si") {
//             alert("Bienvenido " + nom);
//         } else {
//             alert("Gracias por su visita " + nom);
//         }
//     } else {
//         alert("Gracias por su visita " + nom);
//     }
// } else {let comprarEntrada = prompt("¿desea comprar su entrada?(si/no)")
//     if (comprarEntrada === "si") {
//         let dinero = prompt("¿Cuanto dinero tienes disponible?")
//         if (dinero >= 1000) {
//             alert("Bienvenido " + nom)
//         }
//     } else {
//         alert("Gracias por su visita " + nom);
//     }  
// }

//Octavo ejercicio
// let numeroIncognita = 4 
// let numeroIngresado = parseInt(prompt("ingrese adivinanza"))

// if (numeroIngresado === numeroIncognita) {
//    console.log("ganaste"); 
// } else {
//     if (numeroIngresado > numeroIncognita) {
//          alert("tu numero es mayor, vuelve a intentarlo");
//     } else {
//         alert("tu numero es menor, vuelve a intentarlo")
//     }
//     numeroIngresado = parseInt(prompt("ingrese adivinanza"))

//     if (numeroIngresado === numeroIncognita) {
//         console.log("ganaste");
//     } else {
//         if (numeroIngresado > numeroIncognita) {
//         alert("tu numero es mayor, vuelve a intentarlo");
//    } else {
//        alert("tu numero es menor, vuelve a intentarlo")
//    }
//     numeroIngresado = parseInt(prompt("ingrese adivinanza"))

//     if (numeroIngresado === numeroIncognita) {
//         console.log("ganaste");
//     } else {
//         console.log("lo sentimos, jugamos despues");
//     }
// }
// }

//noveno ejercicio 


let edadIngresada = parseInt(prompt("ingrese su edad"))

if (edadIngresada <= "12") {
    alert("Perteneces a la categoria infante")
} else {
  if (edadIngresada >= "13" && edadIngresada <= "18") {
      alert("Perteneces a la categoria adolecente")
     }  else {
        if (edadIngresada >= "19" && edadIngresada <= "44") {
            alert("Perteneces a la categoria mayor joven")
           }  else {
            if (edadIngresada >= "45" && edadIngresada <= "99") {
                alert("Perteneces a la categoria anciano")
               }   else {
                if (edadIngresada >= "100") {
                    alert("¿10esta seguro que su edad es mayor a 100años?")
                   } 
                }
            }
        }
} 



// decimo tercer ejercicio 

// let nombreid = prompt("Ingresa su nombre completo")
// let numeroid = prompt("Ingresa tu numero de identificacion")
// let fechaNacimiento = prompt("Ingresa tu fecha de nacimiento dd/mm/aa")
// let lugarNacimiento = prompt("Ingresa su ciudad de nacimiento")
// let altura = prompt("Ingresa tu altura")

// let mensaje = nombreid + "\n" + 
// "numero de identidad" + " " + numeroid +"\n" + 
// "fecha de nacimiento" + fechaNacimiento + "\n" + 
// "lugar de nacimiento" + lugarNacimiento + "\n" + 
// "altura" + altura + "\n" + 
// "¿sus datos son correctos?"
// let confirmacion = confirm(mensaje)
// if (confirmacion) {
//     let cedula = {
//         nombreid: nombreid,
//         numeroid: numeroid,
//         fechaNacimiento: fechaNacimiento,
//         fechaNacimiento: fechaNacimiento,
//         lugarNacimiento: lugarNacimiento
//     };

//     console.table(cedula);

//     console.log("Registro exitoso.");
// } else {

//     console.log("vuelva a intentarlo en 1 mes.");
// }