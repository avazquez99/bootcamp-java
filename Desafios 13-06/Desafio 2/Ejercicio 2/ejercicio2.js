var username = "admin";
var password = 1234;


/* Solicitar credenciales */

console.log("Bienvenido al sistema");

var user = prompt("Ingrese su usuario: ");
var pass = parseInt(prompt("Ingrese su contraseña"));

/* Validación de credenciales */

function validarDatos (usuario, contraseña) {

    if (user == username && pass == password) {

        console.log("Sus credenciales fueron validadas con éxito. Bienvenido! ");

    } else {

        console.log("Lo siento, sus credenciales no coinciden con un usuario registrado. Vuelva a intentar");

    }
}

/* Respuesta de sistema */

var acceso1 = validarDatos (user, pass);

console.log(acceso1)
