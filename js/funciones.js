//Declaración de funciones
//Saludo
function saludar() {
    var invitado=prompt("Ingrese su nombre")
    alert("Bienvenido"+" "+invitado+" "+"a Miel del Oeste")
}
//Función subtotal
function fsubtotal(precioProducto,cantidadProducto) {
    var subtotal=precioProducto * cantidadProducto
console.log("El subtotal es" + " " + subtotal)
alert ("El valor de su compra es: " + subtotal)
}

//Función mostrar 
function datoEntrada(mensaje) {
    console.log("Usted ingreso="+" "+ mensaje)
    
}

