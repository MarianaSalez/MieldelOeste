const URLJSON="https://jsonplaceholder.typicode.com/posts"

$("#cSent").click(function validate(event){
    event.preventDefault()
    let nombre=$("#cName").val()
    let apellido=$("#cSurname").val()
    let telefono=$("#cPhone").val()
    let correo=$("#cMail").val()
    let mensaje=$("#cMessage").val()
    const consulta=[nombre, apellido, telefono,correo,mensaje];
    console.log(consulta)
    $.post(URLJSON, consulta,
        function(respuesta, estado) {
        if(estado==="success"){
            let lastConsult=localStorage.setItem("lastconsult",(respuesta))
            console.log(lastConsult)
            alert("Se ha enviado su formulario con exito, gracias!")}
        },);
})