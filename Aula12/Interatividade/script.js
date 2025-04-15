alert("Olá mundo");

var titulo = document.querySelector("#titulo");
titulo.textContent = "Olá mundo"; 
document.getElementById("titulo").style.color="red"; 

function mostraAlerta() {
    alert("Funciona"); 
}

titulo.onclick = mostraAlerta("Feliz nossa pascoa");