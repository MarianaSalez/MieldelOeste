//Declaración del servidor donde se guardara la información
const URLJSON="https://jsonplaceholder.typicode.com/posts"

//Guardado de datos y publicación de los mismos
$("#cSent").click(function validate(event){
    event.preventDefault()
    let nombre=$("#cName").val()
    let apellido=$("#cSurname").val()
    let telefono=$("#cPhone").val()
    let correo=$("#cMail").val()
    let mensaje=$("#cMessage").val()
    const consulta=[nombre, apellido, telefono,correo,mensaje];
    console.log(consulta)
    {$.post(URLJSON, consulta,
        function(respuesta, estado) {
        if(estado==="success"){
            let lastConsult=localStorage.setItem("lastconsult",(respuesta))
            console.log(lastConsult)
            alert("Se ha enviado su formulario con éxito, gracias!")}
        else {console.log ("No se ha podido enviar su formulario, intente mas tarde nuevamente")}
        })}
});
