function login(){
    var user, password

    user = document.getElementById("usuario").value;
    password = document.getElementById("contraseña").value;

    if(user == "prueba" && password == "1234"){
        window.location = "FORMULARIOS/pagina2.html"
    } else{
        alert("Datos Ingresados Incorrectamente")
    }
}