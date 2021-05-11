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
    let usuarioguardado=localStorage.setItem("LastUser",usuario1)
    crearDom("#lugarSaludo",`
    <div id="saludo" style="display:none"  style=z-index:2 class="text-center"><card>Bienvenido ${usuario1[0]}</card>
        </div>`)})


crearBoton("#signout","signout")
$("#signout").click(function limpiar(){
    localStorage.clear()
    $("#usuario").val("")
    $("#password").val("")
    console.log("Sesión cerrada")})




$("#login").click(()=>{
    $("#saludo").css({"display":"block"})
            //.css("background-color","color:#756202")
    })

    $("#login").click(()=>{$("#saludo").fadeIn()
    .delay(1500)
    .fadeOut()})