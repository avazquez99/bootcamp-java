
var nombre = prompt("Introduzca su nombre: ")

console.log("Hola " + nombre + ". Para validar su acceso al sistema, debemos validar su edad");

var edad = parseInt(prompt("Ingrese su edad: "));

if (edad >= 18) {

    console.log("Bienvenido al sistema " + nombre)

} else {

    alert("Lamentamos el inconveniente. Usted es menor de edad para ingresar al sistema")

};
