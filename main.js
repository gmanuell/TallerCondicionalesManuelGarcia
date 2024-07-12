
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


// let edadIngresada = parseInt(prompt("ingrese su edad"))

// if (edadIngresada <= "12") {
//     alert("Perteneces a la categoria infante")
// } else {
//   if (edadIngresada >= "13" && edadIngresada <= "18") {
//       alert("Perteneces a la categoria adolecente")
//      }  else {
//         if (edadIngresada >= "19" && edadIngresada <= "44") {
//             alert("Perteneces a la categoria mayor joven")
//            }  else {
//             if (edadIngresada >= "45" && edadIngresada <= "99") {
//                 alert("Perteneces a la categoria anciano")
//                }   else {
//                 if (edadIngresada >= "100") {
//                     alert("¿esta seguro que su edad es mayor a 100años?")
//                    } 
//                 }
//             }
//         }
// } 

//decimo ejercicio 

// let jugador1 = prompt("jugador 1 ingrese piedra/papel/tijera")
// let jugador2 = prompt("jugador 2 ingrese piedra/papel/tijera")

// if (jugador1 === jugador2) {
//     alert("empate");
// } else if (jugador1 === "piedra") {
//     if (jugador2 === "papel") {
//     alert("gana el jugador 2")   
//     } else if (jugador2 === "tijera") {
//     alert("gana jugador 1")
//     } else {
//        alert("Jugador 2 esta haciendo trampa") 
//     }
// } else if (jugador1 === "papel") {
//     if (jugador2 === "piedra") {
//         alert("gana el jugador 1")   
//         } else if (jugador2 === "tijera") {
//         alert("gana jugador 2")
//         } else {
//            alert("Jugador 2 esta haciendo trampa") 
//         }
// } else if (jugador1 === "tijera") {
//     if (jugador2 === "piedra") {
//         alert("gana el jugador 2")   
//         } else if (jugador2 === "papel") {
//         alert("gana jugador 1")
//         } else {
//            alert("Jugador 2 esta haciendo trampa") 
//         }
// } else {
//     alert("jugador 1 hace trampa")
// }

// decimo primer ejercicio 

// let color = prompt("Ingrese un color")

// switch (color) {
//     case "blanco":
//         alert("Falta de color");
//         break;
//     case "negro":
//         alert("Falta de color");
//         break;
//     case "verde":
//         alert("El color de la naturaleza");
//         break;
//     case "azul":
//         alert("El color del agua");
//         break;
//     case "amarillo":
//         alert("El color del sol");
//         break;
//     case "rojo":
//         alert("El color del fuego");
//         break;
//     case "marron":
//         alert("El color de la tierra");
//         break;
//     default:
//         alert("Excelente elección, no lo teníamos pensado");
//         break;
//     }

// decimo segundo ejercicio

let aa = parseInt(prompt("Ingrese primer numero"))
let bb = parseInt(prompt("Ingrese segundo numero"))
let operacion = prompt("Ingrese la operación que desea realizar (suma/resta/producto/división)")

if (operacion == "suma") {
    let suma = aa + bb
    alert("el resultado de la operacion " + operacion + " es: " + suma)
} else if (operacion == "resta") {
    let resta = aa - bb
    alert("el resultado de la operacion " + operacion + " es: " + resta)
} else if (operacion == "producto") {
    let producto = aa * bb
    alert("el resultado de la operacion " + operacion + " es: " + producto)
} else if (operacion == "division") {
    let division = aa / bb

    if ((aa === 0) || (valor2 ===0)){
        alert("ERROR")
    } else {
        alert("el resultado de la operacion " + operacion + " es: " + division)
    }
} else{
    alert("La operacion que desea realizar no se encuentra disponible")
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