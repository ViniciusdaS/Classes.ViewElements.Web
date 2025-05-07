let nome1 = "";
let nome2 = "";
let nome3 = "";
let nome4 = "";
let nome5 = "";

let paragrafo1 = document.getElementById("texto1");
let paragrafo2 = document.getElementById("texto2");
let paragrafo3 = document.getElementById("texto3");
let paragrafo4 = document.getElementById("texto4");
let paragrafo5 = document.getElementById("texto5");

fetch("./JSON/data.json")
    .then(response => response.json())
    .then(listaPessoas => {
        nome1 = listaPessoas.usuarios[0].nome;
        nome2 = listaPessoas.usuarios[1].nome;
        nome3 = listaPessoas.usuarios[2].nome;
        nome4 = listaPessoas.usuarios[3].nome;
        nome5 = listaPessoas.usuarios[4].nome; 

        paragrafo1.innerHTML = "Primeiro registro do array contém dados de <b>\"" + nome1 +  "\"</b>"; 
        paragrafo2.innerHTML = "Segundo registro do array contém dados de <b>\"" + nome2 +  "\"</b>"; 
        paragrafo3.innerHTML = "Terceiro registro do array contém dados de <b>\"" + nome3 + "\"</b>"; 
        paragrafo4.innerHTML = "Quarto registro do array contém dados de <b>\"" + nome4 +  "\"</b>"; 
        paragrafo5.innerHTML = "Quinto registro do array contém dados de <b>\"" + nome5 +  "\"</b>"; 
    })
