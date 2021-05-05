//Capturo la información del usuario y la guardo
$("#myUser").submit(function validate(event){
    event.preventDefault()
    let usuario=$("#usuario").val()
    let password=$("#password").val()
    const usuario1=[usuario, password]
    console.log(usuario1)})

//Guardo la informacion y aviso al usuario
crearBoton("#login","login")
$("#login").click(function save() {
    const usuario1=[$("#usuario").val(), $("#password").val()]
    let usuarioguardado=localStorage.setItem("savedUser",usuario1)
    console.log(localStorage.getItem("savedUser"))})


crearBoton("#signout","signout")
$("#signout").click(function limpiar(){
    localStorage.clear()
    $("#usuario").val("")
    $("#password").val("")
    console.log("Sesión cerrada")})

crearDom("header",`<container style="display:none">
<div class="col-4"></div>
<div id="saludo" style=z-index:2 class="col-4"><h4>Bienvenido ${$(usuario).val()}</h4>
    </div>
<div class="col-4"></div>
</container>`)

$("#login").click(()=>{
$("#saludo").css("background-color","color:#756202")
            .fadeIn(1500)
            .delay(2500)
            .fadeOut("fast")
    })