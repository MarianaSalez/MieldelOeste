
//Funciónes de para crear elementos en DOM

//Funcion para crear Dom
export function crearDom(idLocacion,lugar,html) {
    if(lugar==="append"){
        $(`${idLocacion}`).append(`${html}`)}
    else if(lugar==="prepend"){$(`${idLocacion}`).prepend(`${html}`)}
    else console.log("faltan datos para crear el elemento")};

//Función para crear un array de productos
export function crearArrayDom(IdLocacion,array) {
    for (const elemento of array) {
        $(IdLocacion).append(`<form class="container d-flex align:center" id="myCarrito${elemento.id}">
        <hr>
        <h3> ${elemento.nombre}</h3>
        <hr>
        <input type="number" id="cantidad${elemento.id}" style=background-color:white></input>
        <hr>
        <p> $ (${elemento.precio})</p>
</form>
<br>`)
    }};

//Función para crear botones
export function crearBoton(idLocacion,textoBoton){
        $(`${idLocacion}`).append(`<button id="${textoBoton}">${textoBoton}</button>`)};

        