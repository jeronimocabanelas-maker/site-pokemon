const campoBusca = document.getElementById('campoBusca');
const btnBuscar  = document.getElementById('btnBuscar');
const resultado  = document.getElementById('resultado');
const msgErro    = document.getElementById('msgErro');


async function buscarPokemon() {
    const nome = campoBusca.value.toLowerCase().trim();

   
    if (nome === '') {
        alert('Digite o nome de um Pokémon!');
        return;
    }

    try {
        
        const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${nome}`);

        
        if (!resposta.ok) throw new Error('Não encontrado');

        
        const dados = await resposta.json();

        
        document.getElementById('pokeNome').textContent  = dados.name;
        document.getElementById('pokeId').textContent    = dados.id;
        document.getElementById('pokeAltura').textContent = dados.height;
        document.getElementById('pokePeso').textContent  = dados.weight;
        document.getElementById('pokeTipo').textContent  = dados.types[0].type.name;
        document.getElementById('pokeImg').src           = dados.sprites.front_default;

      
        resultado.classList.remove('escondido');
        msgErro.classList.add('escondido');

    } catch (erro) {
        
        resultado.classList.add('escondido');
        msgErro.classList.remove('escondido');
    }
}


btnBuscar.addEventListener('click', buscarPokemon);


campoBusca.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') buscarPokemon();
});