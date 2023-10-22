const Url = "https://pokeapi.co/api/v2/pokemon/";
const nomePokemon = document.getElementById("pesquisa");
const botao = document.getElementById("btn");
const pokemon = document.getElementById("pokemon");



//fetch(Url)
//.then((res) => res.json())
//.then((data) => console.log(data.results[1].nam)) 
//.catch((err) => console.error('erro', err))



const  fetchPokemon = async (param) =>{
    //o await fica sempre antes da promise acontece e só da para usar em funcoes async
    const res = await fetch(`${Url}${param}`);
    return res.json();
}


botao.addEventListener('click', async () =>{
    const poke = await fetchPokemon(nomePokemon.value);
    console.log(poke.types[0].type.name)
    
    pokemon.innerHTML = ` <p class="nome"> ${poke.name}</p> <img class="sprite" src="${poke.sprites.other.dream_world.front_default} " alt="foto do pokemon"> <p class="tipo"> Tipo: </p>`

    if(poke.types.length > 0){
       
        for(let i =0; i <= poke.types.length; i++){

            pokemon.innerHTML += `<p class="tipo"> ${poke.types[i].type.name}</p>` 
        }
    }
    
})