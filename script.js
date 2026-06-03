async function buscarPokemon() {

    let pokemon =
        document.getElementById('pokemonInput').value.toLowerCase()

    const shiny =
        pokemon.startsWith("shiny ")

    if (shiny) {
        pokemon = pokemon.replace("shiny ", "")
    }

    const resposta =
        await fetch(
            `https://pokeapi.co/api/v2/pokemon/${pokemon}`
        )    

    const dados =
        await resposta.json()

// NOME DO POKEMON


    if (shiny) {
        document.getElementById('nome').innerText =
        "Nome: Shiny " + dados.name 
    } else {
        document.getElementById('nome').innerText =
            "Nome: " + dados.name
    }
        
    document.getElementById('tipo').innerText =
        "Tipo: " + dados.types[0].type.name

// FOTO DO POKEMON

    if (shiny) {

        document.getElementById('imagem').src =
            dados.sprites.front_shiny

    } else {

        document.getElementById('imagem').src =
            dados.sprites.front_default

    }

}