let curso1 = "";
let curso2 = "";
let curso3 = "";
let curso4 = "";
let curso5 = "";

let paragrafo1 = document.getElementById("texto1");
let paragrafo2 = document.getElementById("texto2");
let paragrafo3 = document.getElementById("texto3");
let paragrafo4 = document.getElementById("texto4");
let paragrafo5 = document.getElementById("texto5");

fetch("./JSON/data.json")
    .then(response => response.json())
    .then(listaCursos => {
        curso1 = listaCursos.cursos[0].alunos;
        curso2 = listaCursos.cursos[1].alunos;
        curso3 = listaCursos.cursos[2].alunos;
        curso4 = listaCursos.cursos[3].alunos;
        curso5 = listaCursos.cursos[4].alunos; 

        paragrafo1.innerHTML = "Numero de alunos do curso de Introdução à IA <b>\"" + curso1 +  "\"</b>"; 
        paragrafo2.innerHTML = "Numero de alunos do curso de Desenvolvimento de Sistemas <b>\"" + curso2 +  "\"</b>"; 
        paragrafo3.innerHTML = "Numero de alunos do curso de Ciência da Computação <b>\"" + curso3 + "\"</b>"; 
        paragrafo4.innerHTML = "Numero de alunos do curso de Design Gráfico <b>\"" + curso4 +  "\"</b>"; 
        paragrafo5.innerHTML = "Numero de alunos do curso de Desenvolvimento Web <b>\"" + curso5 +  "\"</b>"; 
    })