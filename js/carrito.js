<<<<<<< HEAD
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


//Generación de carrito de compra en DOM
let cantidad=0
let carrito=document.getElementById("carrito")
    for (const elemento of mieles) {
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

//Generaion de boton de compra
let compra = document.createElement("button");
compra.innerHTML=`<p>Compra</p>`
    compra.onclick=()=>{
        calculo()
        console.log ("Calculo de compra realizado")}
carrito.appendChild(compra)

//Compra final por pantalla
let saldonFinal=document.getElementById("carrito")
    let saldo=document.createElement("div")
    saldo.innerHTML=`
    <div class="text-right"><h4>El total hasta ahora es: </h4><input id="valorCompra"></input><hr>
    </div>`
saldonFinal.appendChild(saldo)

//funcion de calculo del valor de compra total
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




=======
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


//Generación de carrito de compra en DOM
let cantidad=0
let carrito=document.getElementById("carrito")
    for (const elemento of mieles) {
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

//Generaion de boton de compra
let compra = document.createElement("button");
compra.innerHTML=`<p>Compra</p>`
    compra.onclick=()=>{
        calculo()
        console.log ("Calculo de compra realizado")}
carrito.appendChild(compra)

//Compra final por pantalla
let saldonFinal=document.getElementById("carrito")
    let saldo=document.createElement("div")
    saldo.innerHTML=`
    <div class="text-right"><h4>El total hasta ahora es: </h4><input id="valorCompra"></input><hr>
    </div>`
saldonFinal.appendChild(saldo)

//funcion de calculo del valor de compra total
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




>>>>>>> c2bec0e08acba0b522e177bc876d5239f7b492ca
