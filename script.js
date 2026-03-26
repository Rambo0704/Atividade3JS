let botaoasc = document.getElementById("botaoasc");
let botaodesc = document.getElementById("botaodesc");
let contadorElemento = document.getElementById("contador");

let contador = 0;

botaoasc.onclick = function() {
    contador++;
    contadorElemento.textContent = contador;
};

botaodesc.onclick = function() {
    if (contador > 0) {
        contador--;
        contadorElemento.textContent = contador;
    }
    else{
        alert("O contador não pode ser negativo!");
    }
    
};
let campoEntrada = document.getElementById("campoEntrada");
let resultado = document.getElementById("resultado");

campoEntrada.onkeydown = function(event){
    if(event.key === "Enter"){
        resultado.textContent = campoEntrada.value;
        campoEntrada.value = "";
    }
};
let campoEntrada2 = document.getElementById("campoEntrada2");
let resultado2 = document.getElementById("resultado2");

campoEntrada2.addEventListener("input", function(){
    let texto = campoEntrada2.value;

    let semEspacos = texto.replace(/\s/g, "");

    resultado2.textContent = semEspacos.length;
});

let botao = document.getElementById("botaoAdicionar");
let tipoLista = document.getElementById("tipoLista");
let container = document.getElementById("container");

botao.onclick = function() {
    let tipo = tipoLista.value;

    let lista = document.createElement(tipo);

    for (let i = 1; i <= 3; i++) {
        let item = document.createElement("li");
        item.textContent = "Item ";
        lista.appendChild(item);
    }

    container.appendChild(lista);
};

let botaoReset = document.getElementById("resetar2");

botaoReset.onclick = function() {

    contador = 0;
    contadorElemento.textContent = contador;


    resultado.textContent = "";
    campoEntrada.value = "";

    resultado2.textContent = "";
    campoEntrada2.value = "";

  
    container.innerHTML = "";

};