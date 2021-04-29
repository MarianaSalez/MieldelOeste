//Capturo la información del usuario y la guardo
let user=document.getElementById("myUser")
user.addEventListener("submit",validate)


//Declaracion de funciones
function validate(event){
    event.preventDefault()
    let usuario=document.getElementById("usuario").value
    let password=document.getElementById("password").value
    const usuario1=[usuario, password]
    console.log(usuario1)}

function save() {
    let usuario=document.getElementById("usuario").value
    let password=document.getElementById("password").value
    const usuario1=[usuario, password]
    let usuarioguardado=localStorage.setItem("savedUser",usuario1)
    console.log(localStorage.getItem("savedUser"))}

function limpiar(idBoton,textoBoton,elemento1,elemento2,mensaje) {
        let signout = document.getElementById(idBoton);
        let boton = document.createElement("div");
        boton.innerHTML=`<button>${textoBoton}</button>`
        signout.appendChild(boton)
        signout.onclick=()=>{
        localStorage.clear()
        document.getElementById(elemento1).value=""
        document.getElementById(elemento2).value=""
        console.log(mensaje)
        
            }}

//Guardo la informacion y aviso al usuario
crearBoton("login","login",save,"Informacion Guardada")


//Borro la informacion
limpiar("signout","signout","usuario","password","Sesión cerrada");
