let pokemonList = [
    {
        name: "Cubone",
        height: 0.4,
        types: ['Monster']
    },
    {
        name: "Charizard",
        height: 1.7,
        types: ['Fire']
    },
    {
        name: "Psyduck",
        height: 0.8,
        types: ['Water']
    },
    {
        name: "Bellossom",
        height: 0.4,
        types: ['Grass']
},
    {
        name: "Squirtle",
        height: 0.4,
        types: ['Monster']
    }
];

for (let pokemon of pokemonList) {
    // console.log(i.name,i.height,i.types);

    if (pokemon.height >= 1) {
        //Check for which Pokomon is taller than 1 meter dis play it with text ("Wow, that's big!!")
        document.write(pokemon.name + ' (height ' + pokemon.height + ' M) ' + ' Type ' + pokemon.types + " - Wow, that's big!! " + "<br><br>");
    } else {
        //  Display small pokemon here
        document.write(pokemon.name + ' (height ' + pokemon.height + ' M) ' + ' Type ' + pokemon.types + "<br><br>");
    }
}




