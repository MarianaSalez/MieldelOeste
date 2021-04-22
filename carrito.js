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
let total=0

//carrito de compra
let cantidad=0
let carrito=document.getElementById("carrito")
    for (const elemento of mieles) {
        let card= document.createElement("div")
        card.innerHTML = `<div class= container align:center>
        <h3> ${elemento.nombre}</h3>
        <input type="number" id="cantidad${elemento.id}" style=background-color:white></input>
        <p> $ (${elemento.precio})</p>
</div>`;
carrito.appendChild(card)
    } 

var cantidadPradera=document.getElementById("cantidadpradera").value
let cambios1=document.getElementById("cantidadPradera")
cantidad1.addEventListener("change", actualizar)

var cantidadAlgarrobo=document.getElementById("cantidadalgarrobo").value
let cambios2=document.getElementById("cantidadAlgarrobo")
cambios2.addEventListener("change", actualizar)

var cantidadArrope=document.getElementById("cantidadarrope").value
let cambios3=document.getElementById("cantidadArrope")
cambios3.addEventListener("change", actualizar)

var cantidadPanal=document.getElementById("cantidadpanal").value
let cambios4=document.getElementById("cantidadPanal")
cambios4.addEventListener("change", actualizar)

function actualizar(){

const total=(cantidadPradera*mielPradera.precio+
cantidadAlgarrobo*mielAlgarrobo.precio+
cantidadArrope*arropeMiel.precio+
cantidadPanal*mielPanal.precio)
console.log(total)
}

let mycarrito=document.getElementById("carrito");
let saldo=document.createElement("div");
saldo.innerHTML=`<h3>"El valor de su compra es: ${total}"</h3>`
mycarrito.appendChild(saldo)
