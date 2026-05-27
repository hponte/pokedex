async function buscarPokemon(){

    const pokemon =
        document.getElementById('pokemonInput').value

    const resposta =
        await fetch(
            `https://pokeapi.co/api/v2/pokemon/${pokemon}`
        )

    const dados =
        await resposta.json()

    document.getElementById('nome').innerText =
        dados.name

    document.getElementById('imagem').src =
        dados.sprites.front_default
}