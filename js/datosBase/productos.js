//Declaración del constructor de objetos de los productos
class Miel{
    constructor(id,name,composition, price) {
        this.id=id;
        this.nombre=name;
        this.composicion=composition;
        this.precio=price;
    }

    sumaIva (){this.precio= this.precio * 1.21}
};

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
export const mieles = [mielPradera, mielAlgarrobo, arropeMiel, mielPanal];

//Función de cálculo
export function calculo(){
    let pradera= $("#cantidadpradera").val()
    let algarrobo= $("#cantidadalgarrobo").val()
    let arrope= $("#cantidadarrope").val()
    let panal= $("#cantidadpanal").val()

const subtotal=(pradera*mielPradera.precio+
algarrobo*mielAlgarrobo.precio+
arrope*arropeMiel.precio+
panal*mielPanal.precio)
console.log(subtotal)
$("#valorCompra").val(subtotal)};




