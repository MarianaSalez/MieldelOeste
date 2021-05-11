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


crearDom("#lugarSaludo",`
    <div id="saludo" style="display:none"  style=z-index:2 class="text-center"><card>Bienvenido ${localStorage.getItem("savedUser",[0])}</card>
        </div>`)

$("#login").click(()=>{
    $("#saludo").css({"display":"block"})
            //.css("background-color","color:#756202")
    })

    $("#login").click(()=>{$("#saludo").fadeIn()
    .delay()
    .fadeOut()})