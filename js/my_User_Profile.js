//Capturo la información del usuario y la guardo

let user=document.getElementById("myUser")
user.addEventListener("submit",validate)

function validate(e){
    e.preventDefault()
    let usuario=document.getElementById("usuario").value
    let password=document.getElementById("password").value
    const usuario1=[usuario, password]
    let usuarioguardado=localStorage.setItem("savedUser",usuario1)
    console.log(localStorage.getItem("savedUser"))}
    

//Verifico la informacion guardada y aviso al usuario

let login = document.getElementById("login");

login.onclick=()=>{
    validate
    //console.log (JSON.parse(localStorage.getItem("usuario")))
    console.log ("Informacion Guardada")
}

//boton para borrar la informacion

let signout = document.getElementById("signout");
signout.onclick=()=>{
localStorage.clear()
document.getElementById("usuario").value=""
document.getElementById("password").value=""
console.log("Sesión cerrada")
}

