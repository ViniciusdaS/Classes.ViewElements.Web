let imgPokemon = document.querySelector("#fotoPoke");
let form = document.querySelector("#form");
let inputF = document.querySelector("#inputForm");
let idPoke = document.querySelector("#idPokemon");
let nomePoke = document.querySelector("#nomePokemon");
let tipo1Poke = document.querySelector("#tipo1");
let tipo2Poke = document.querySelector("#tipo2");
let habilidade = document.querySelector("#habilidade");
let peso = document.querySelector("#peso");
let altura = document.querySelector("#altura");
let btnBack = document.querySelector("#btnVoltar");
let btnProx = document.querySelector("#idProx");
let audioPoke = document.querySelector("#audioPoke");

let numeroPokedex = 1000; 

/*const audio = new Audio(dados.sprites.front_default);
audio.play();*/

const fetchPokemon = async(pokemon) => {
    const APIresponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    const data = await APIresponse.json();
    return data;  
};


const showPokemon = async(pokemon) =>{
    const dataPokemon = await fetchPokemon(pokemon);
    segundaImagem(dataPokemon.sprites.other.showdown.front_default,dataPokemon.sprites.front_default);
    nomePoke.innerHTML = dataPokemon.name; 
    idPoke.innerHTML = dataPokemon.id;
    tipo1Poke.innerHTML = dataPokemon.types[0].type.name;  
    tipo2Poke.innerHTML = dataPokemon.types[1].type.name;
    habilidade.innerHTML = dataPokemon.abilities[0].ability.name; 
    peso.innerHTML = dataPokemon.weight / 10 + " kg";
    altura.innerHTML = dataPokemon.height / 10 + " m";
    audioPoke.innerHTML = dataPokemon.sprites.front_default; 
};

form.addEventListener("submit", (event) =>{
    event.preventDefault();
    showPokemon(inputF.value.toLowerCase());
});


btnBack.addEventListener("click", (event) => {
    if(numeroPokedex > 0)
    {
        numeroPokedex = numeroPokedex - 1
    }
    showPokemon(numeroPokedex);
});

btnProx.addEventListener("click", (event) =>{
    if(numeroPokedex > 0)
    {
        numeroPokedex = numeroPokedex + 1
    }
    showPokemon(numeroPokedex); 
});

function segundaImagem(gif, image){
    imgPokemon.src = gif;
    imgPokemon.onerror = function(){
        this.onerror = null; 
        this.src = image; 
    }
    return
}