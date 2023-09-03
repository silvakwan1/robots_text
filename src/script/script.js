import mensagemObj from "./mensagen.js";

let text = document.querySelector(".text"),
btn = document.querySelector("#btn"),
contador = 0;
btn.addEventListener("click", control);

console.log(mensagemObj)

function control(){
    contador++;
    let mensagem = mensagemObj[contador]
    if(mensagem == undefined){
        reload()
    };
    text.textContent = mensagem;
}
function reload(){
    document.location.reload()
}