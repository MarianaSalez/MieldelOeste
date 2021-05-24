import {crearArrayDom,crearBoton,crearDom} from './datosBase/funciones.js'
import {mieles,calculo} from "./datosBase/productos.js";


//veo los productos disponibles por consola
console.log("Los productos disponibles son: ");
console.log(JSON.stringify(mieles));

//Generación de carrito de compra en DOM
crearArrayDom("#carrito",mieles);

//Botón cotización
crearBoton("#carrito","cotizar");
$("#cotizar").click(calculo);

//Botón comprar

crearBoton("#carrito","comprar");

$("#comprar").click(function calculo(){
$("#alert").fadeIn().delay(1500).slideUp("slow")});

//Creación de DOM para ver en pantalla el valor cotizado y a comprar
crearDom("#carrito","append",`<div class="text-right"><h4>El total hasta ahora es: </h4><input id=valorCompra></><hr>
</div>`)

//Aviso al usuario de la ejecución de su compra
$("#comprar").click(calculo,console.log("Su compra ha sido realizada"));