//-- VARIABLES--
const email = document.getElementById("email");
const asunto = document.getElementById("asunto");
const mensaje = document.getElementById("mensaje");
const btnEnviar = document.getElementById("enviar")

//-- EVENT LISTENER'S --
eventListeners();
function eventListeners(){
   //Configura el inicio de la app
   document.addEventListener("DOMContentLoaded", inicioApp);
}

//-- FUNCIONES --
//Configura el inicio de la app
function inicioApp(){
   btnEnviar.disabled = true;    
}