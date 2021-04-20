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

//Declaracion de variables a usar

let carrito=document.getElementById("carrito")
let cantidad=0

//ver como redefinir variables o porque no las toma, tener en cuenta JSON.stringify

for (const elemento of mieles) {
    let card= document.createElement("div")
    card.innerHTML = `<h3> ${elemento.nombre}</h3>
                    <p> Composicion: ${elemento.composicion}</p>
                    <p> $ ${elemento.precio}</p>
                    <div>
                    <button id="buttonLeft"><</button>
                    <label style="background-color:white" id="unidades">${cantidad}</label>
                    <button id="buttonRight">></button>
                    </div>`;
    carrito.appendChild(card);  
}

//delcaracion de las funciones de los botones


function sumar(){
    let unidades=document.getElementById("unidades")
    unidades.innerText=cantidad+1
}

function restar(){
    if (cantidad!=0) {cantidad.innerText=cantidad-1
        
    } else {cantidad=0  
    } 
    console.log (cantidad)
}

//Generacion de  eventos para los botones

let buttonLeft =document.getElementById ("buttonLeft")
buttonLeft.addEventListener("click", restar)


let buttonRight =document.getElementById ("buttonRight")
buttonRight.addEventListener("click", sumar)