import mensagemObj from "./mensagen.js";

let text = document.querySelector(".text"),
btn = document.querySelector("#btn"),
contador = 0;
btn.addEventListener("click", control);

console.log(mensagemObj)

function control(){
    contador++;
    if(mensagemObj[contador] == undefined){
        reload()
    };
    text.innerHTML = mensagemObj[contador];
}


function reload(){
    return  document.location.reload()
}
