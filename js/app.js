//-- VARIABLES--
const email = document.getElementById("email");
const asunto = document.getElementById("asunto");
const mensaje = document.getElementById("mensaje");
const btnEnviar = document.getElementById("enviar");
const formularioEnviar = document.getElementById("enviar-mail");

//-- EVENT LISTENER'S --
eventListeners();
function eventListeners(){
   //Configura el inicio de la app
   document.addEventListener("DOMContentLoaded", inicioApp);

   //Campos del formulario
   //El event listener "blur" sirve para disparar el evento cuando el objeto está "fuera de foco";
   email.addEventListener("blur", validarCampo);
   asunto.addEventListener("blur", validarCampo);
   mensaje.addEventListener("blur", validarCampo);

   //Confirma el submit del formulario
   formularioEnviar.addEventListener("submit", enviarEmail);
}

//-- FUNCIONES --
//Configura el inicio de la app
function inicioApp(){
   btnEnviar.disabled = true;    
}

//Se encarga de validar los campos del formulario
function validarCampo(){
   //Se encarga de validar la logitud del mensaje
   //this Retorna el campo seleccionado (En HTML)
   validarLongitud(this);
   //Se encarga de seleccionar el campo email
   if(this.type === "email"){
      validarEmail(this);     //Se encarga de validar el campo email
   }
   //Obtiene la cantidad de veces que se encuentra presente la clase ".error" en el documento
   let errores = document.querySelectorAll(".error");
   //Verifica que los campos de texto no estén vaciós
   if(email.value !== "" && asunto.value !== "" && mensaje.value !== ""){
   //Compara si el valor de errores es igual a 0
      if(errores.length === 0){
         btnEnviar.disabled = false;   //Activa el botón enviar
      }else{
         btnEnviar.disabled = true;    //Desactiva el botón enviar
      }
   }
}

//Se encarga de validar la longitud de los campos
function validarLongitud(campo){
   //Verifica si la cantidad de caracteres del campo seleccionado es mayor a cero
   if(campo.value.length > 0){
      campo.classList.add("success");     //añade la clase success
      campo.classList.remove("error");    //remueve la clase error
   }else{
      campo.classList.add("error");       //añade la clase error
      campo.classList.remove("success");  //remueve la clase success
   }
}

//Se encarga de validar el campo email
function validarEmail(email){
   //Verifica si existe un @ dentro del campo email
   if(email.value.indexOf("@") !== -1){
      email.classList.add("success");     //añade la clase success
      email.classList.remove("error");    //remueve la clase error
   }else{
      email.classList.add("error");       //añade la clase error
      email.classList.remove("success");  //remueve la clase success
   }
}

//Se encarga del procesado después de pulsar el botón "enviar"
function enviarEmail(e){
   //Obtenemos el id del documento para el gif spinner
   const spinnerGif = document.getElementById("spinner");   
   //Añade el atributo css display:block a spinnerGif
   spinnerGif.style.display = "block";

   //Crea un nuevo elemento en el DOM del tipo img
   const enviadoGif = document.createElement("img");
   //Obtiene la fuente de la imagen (url);
   enviadoGif.src = "img/mail.gif";
   //Añade el atributo css display:block a enviado Gif
   enviadoGif.style.display = "block";

   //La función setTimeout permite ejecutar elementos en un intervalo de tiempo dado
   setTimeout(function(){
      //Añade el atributo css display: none a spinnerGif para ocultarlo
      spinnerGif.style.display = "none";
      //Agrega enviadoGif al DOM
      document.getElementById("loaders").appendChild(enviadoGif);

      setTimeout(function(){
         enviadoGif.remove();       //Remueve enviadoGif
         formularioEnviar.reset();  //Reinicia los valores del formulario
      }, 5000);
   }, 3000);

   //Previene el enviado por defecto del formulario
   e.preventDefault();
}