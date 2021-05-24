import {crearBoton,crearDom} from './datosBase/funciones.js'
//Prevengo la recarga de la pagina con enter
$("#myUser").submit(function validate(event){
    event.preventDefault()});

//Guardo la información y aviso al usuario
let usuarioguardado=localStorage.setItem("LastUser","")

crearBoton("#login","login")
$("#login").click(function save() {
    const usuario1=[$("#usuario").val(), $("#password").val()]
    console.log(usuario1)
        if (localStorage.getItem("LastUser")===""){
            let usuarioguardado=localStorage.setItem("LastUser",usuario1[0])
        }
        else if (localStorage.getItem("LastUser")=== usuario1[0]) {
            console.log("Ya se encuentra iniciada sesión")
            
        } else {
            crearDom("#lugarSaludo","append",`<div id="saludo" style="display:none"  style=z-index:2 class="text-center"><card id="cardSaludo">Bienvenido ${usuario1[0]}</card>
        </div>`)};
        })
        
    
//Evento para saludo al click del login
$("#login").click(()=>{
    $("#saludo:last-child")
        .fadeIn()
        .delay(1200)
        .fadeOut("slow")});
        

//Botón para borrar la información y avisa al usuario que se ha cerrado sesión
crearBoton("#signout","signout")
$("#signout").click(function limpiar(){
    localStorage.clear()
    $("#saludo:first-Child").remove()
    $("#usuario").val("")
    $("#password").val("")
    console.log("Sesión cerrada")});


