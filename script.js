/*async function buscarPokemon(){

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
    
    document.getElementById('imagemShiny').src =
        dados.sprites.front_shiny
    
}   

*/


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

    document.getElementById('nome').innerText =
        dados.name

    if (shiny) {

        document.getElementById('imagem').src =
            dados.sprites.front_shiny

    } else {

        document.getElementById('imagem').src =
            dados.sprites.front_default

    }

}