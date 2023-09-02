import mensagemObj from "./mensagen.js";

let text = document.querySelector(".text"),
btn = document.querySelector("#btn"),
contador = 0;
btn.addEventListener("click", control);

console.log(mensagemObj)

function control(){
    contador++;
    let mensagen = mensagemObj[contador]
    if(mensagen == undefined){
        reload()
    };
    text.textContent = mensagen;
}
function reload(){
    document.location.reload()
}
