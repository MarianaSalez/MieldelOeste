import {crearArrayDom,crearBoton,crearDom} from './datosBase/funciones.js'
import {mieles,calculo} from "./datosBase/productos.js";


//veo los productos disponibles por consola
console.log("Los productos disponibles son: ");
console.log(JSON.stringify(mieles));

//Generación de carrito de compra en DOM
crearArrayDom("#carrito",mieles);

//Boton cotización
crearBoton("#carrito","cotizar");
$("#cotizar").click(calculo);

//Boton comprar

crearBoton("#carrito","comprar");
$("#comprar").click(calculo,console.log("Su compra ha sido realizada"));

$("#comprar").click(function calculo(){
crearDom("#carrito","prepend",`<div style="display:hidden" id="alert" class="alert alert-success" role="alert">
<strong>Muchas gracias por elegirnos!</strong> Su compra ha sido procesada correctamente
</div>`); $("#alert").fadeIn().delay(1000).slideUp("slow")});

crearDom("#carrito","append",`<div class="text-right"><h4>El total hasta ahora es: </h4><input id=valorCompra></><hr>
</div>`)