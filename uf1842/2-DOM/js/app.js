/**
 * ¡Buena suerte! ¡Pasa el mensaje!
 */

const btnEnviar = document.querySelector("#btn-send");
const input = document.querySelector("#message");
const showMessage = document.querySelector("#last-message");

const handleClick = () => {
    showMessage.innerHTML = input.value;
    input.value = ""; 
}

btnEnviar.addEventListener('click', handleClick)