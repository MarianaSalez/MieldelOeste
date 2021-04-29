//Declaración del constructor de objetos de los productos
class Miel{
    constructor(id,name,composition, price) {
        this.id=id;
        this.nombre=name;
        this.composicion=composition;
        this.precio=price;
    }

    sumaIva (){this.precio= this.precio * 1.21};
}

//Declaración de objetos y modificación de precio a través de una función, para que contemple el IVA

const mielPradera=new Miel ("pradera","Miel de Pradera", "100% plantas serranas", 200);
const mielAlgarrobo=new Miel ("algarrobo","Miel de Algarrobo", "50% flores de algarrobo", 300);
const arropeMiel=new Miel ("arrope","Arrope de miel", "dulce artesanal de miel", 400);
const mielPanal=new Miel ("panal","Miel en panal", "Miel reposada en su panal", 500);

mielPradera.sumaIva();
mielAlgarrobo.sumaIva();
arropeMiel.sumaIva();
mielPanal.sumaIva();

//Compilación de objetos en un array

const mieles = [mielPradera, mielAlgarrobo, arropeMiel, mielPanal]

//veo los productos disponibles por consola
console.log("Los porudcots disponibles son: ")
console.log(JSON.stringify(mieles))


//Declaración de funciones

function crearArrayDom(IdLocacion,array) {
    let carrito=document.getElementById(IdLocacion)
    for (const elemento of array) {
        let card= document.createElement("div")
        card.innerHTML = `<form class="container d-flex align:center" id="myCarrito${elemento.id}">
        <hr>
        <h3> ${elemento.nombre}</h3>
        <hr>
        <input type="number" id="cantidad${elemento.id}" style=background-color:white></input>
        <hr>
        <p> $ (${elemento.precio})</p>
</form>
<br>`
;
carrito.appendChild(card)
    } 
}



function crearBoton(idLocacion,textoBoton,funcionBoton,impresionPorConsola){
    let lugar=document.getElementById(idLocacion)
    let compra = document.createElement("div");
    compra.innerHTML=`<button>${textoBoton}</button>`
        compra.onclick=()=>{
            funcionBoton()
            console.log (impresionPorConsola)}
    lugar.appendChild(compra)}



function crearDom(idLocacion,html) {
    let saldonFinal=document.getElementById(idLocacion)
    let saldo=document.createElement("div")
    saldo.innerHTML=`${html}`
saldonFinal.appendChild(saldo)

}



function calculo(){
    let pradera= document.getElementById("cantidadpradera").value
    let algarrobo= document.getElementById("cantidadalgarrobo").value
    let arrope= document.getElementById("cantidadarrope").value
    let panal= document.getElementById("cantidadpanal").value

const subtotal=(pradera*mielPradera.precio+
algarrobo*mielAlgarrobo.precio+
arrope*arropeMiel.precio+
panal*mielPanal.precio)

console.log(subtotal)
document.getElementById("valorCompra").value=subtotal
}



//Generación de carrito de compra en DOM
crearArrayDom("carrito",mieles)
//Boton de compra
crearBoton("carrito","Comprar",calculo,"Calculo de compra realizado")
//Creacion del DOM final
crearDom("carrito",`<div class="text-right"><h4>El total hasta ahora es: </h4><input id=valorCompra></><hr>
</div>`)









