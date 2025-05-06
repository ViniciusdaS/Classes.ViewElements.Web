let nome1 = "";
let cidade = "teste";

let paragrafo = document.getElementById("demo");

fetch("./JSON/data.json")
    .then(response => response.json())
    .then(listaPessoas => {
        nome1 = listaPessoas.pessoas[1].nome;
        cidade = listaPessoas.pessoas[1].local.cidade; 

        paragrafo.innerHTML = "Primeiro registro do array contém dados de <b>\"" + nome1 + "\"</b> de <b>" + cidade + "</b>"; 
    })
