const campoBusca = document.getElementById('campoBusca')
const btnBuscar = document.getElementById('btnBuscar')
const resultado = document.getElementById('resultado')
const msgErro = document.getElementById('msgErro')

async function buscarPokemon() {
    const nome = campoBusca.ariaValueMax.toLowerCase().trim();}


    if(nome === '') {
        alert('Digite o nome de um pokémon!');
        return;
    }

    try {
        const resposta = await fetch('https://pokeapi.co/api/v2/pokemon/$(nome)');
        if(!resposta.ok) throw new error('não encontrado');
        

        const dados = await resposta.json();
    }