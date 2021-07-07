let pokemonList = [
    {
        name: "Gengar",
        height: 1.5,
        types: ['Ghost']
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

for (let i of pokemonList) {
    // console.log(i.name,i.height,i.types);

    if (i.height >= 1) {
        //Check for which Pokomon is taller than 1 meter dis play it with text ("Wow, that's big!!")
        document.write(i.name + ' (height ' + i.height + ' M) ' + ' Type ' + i.types + " - Wow, that's big!! " + "<br><br>");
    } else {
        //  Display small pokemon here
        document.write(i.name + ' (height ' + i.height + ' M) ' + ' Type ' + i.types + "<br><br>");
    }
}




