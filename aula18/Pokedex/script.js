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
let somPoke = document.querySelector("#somPoke");

let numeroPokedex = 1; 

const fetchPokemon = async(pokemon) => {
    const APIresponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    const data = await APIresponse.json();
    return data;  
}

fetch('seu_arquivo.mp3')
.then(response => response.arrayBuffer())
.then(arrayBuffer => audioContext.decodeAudioData(arrayBuffer))
.then(audioBuffer => {
    const source = audioContext.createBufferSource();
    source.buffer = audioBuffer;
    // Conectar a fonte ao destino (geralmente o destino do contexto)
    source.connect(audioContext.destination);
    // Iniciar a reprodução
    source.start();
})

const showPokemon = async(pokemon) =>{
    const dataPokemon = await fetchPokemon(pokemon);
    imgPokemon.src = dataPokemon.sprites.front_default;
    nomePoke.innerHTML = dataPokemon.name; 
    idPoke = dataPokemon.id;
    tipo1Poke = dataPokemon.types[0].type.name;  
    tipo2Poke = dataPokemon.types[1].type.name;
    habilidade = dataPokemon.abilities[0].ability.name; 
    peso = dataPokemon.weight;
    altura = dataPokemon.height;
}

form.addEventListener("submit", (event) =>{
    event.preventDefault();
    showPokemon(inputF.value.toLowerCase());
})


btnBack.addEventListener("click", (event) => {
    if(numeroPokedex > 1)
    {
        numeroPokedex = numeroPokedex - 1
    }
    showPokemon(numeroPokedex);
})

next.addEventListener("click", (event) =>{
    if(numeroPokedex < 1000)
    {
        numeroPokedex = numeroPokedex - 1
    }
    showPokemon(numeroPokedex); 
})
