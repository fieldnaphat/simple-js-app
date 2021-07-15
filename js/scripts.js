// IIFE Part
const pokemonRepository = (function () {

    const pokemonList = [{
        name: "Cubone",
        height: 0.4,
        types: ["Monster"],
    },
    {
        name: "Charizard",
        height: 1.7,
        types: ["Fire"],
    },
    {
        name: "Psyduck",
        height: 0.8,
        types: ["Water"],
    },
    {
        name: "Bellossom",
        height: 0.4,
        types: ["Grass"],
    },
    {
        name: "Squirtle",
        height: 0.4,
        types: ["Monster"],
    },
    ];


    function add(pokemon) {
        //Add Object.keys for check add value of new pokemon
        if (Object.keys(pokemon).includes('name')) {
            pokemonList.push(pokemon);

            console.log("Use Object.keys to check new pokemon", pokemon)
        }
    }

    function getAll() {
        return pokemonList;
    }

    return {
        add: add,
        getAll: getAll,
    };
    
})();


// Test part for add new pokemon

// pokemonRepository.add({
//     name: "Vulpix",
//     height: 0.6,
//     types: ["Drought"],
// });

// pokemonRepository.add({
//     name: "Igglybuff",
//     height: 0.3,
//     types: ["Fairy"],
// });

//Display all the pokemon info from array in console
// console.log(pokemonRepository.getAll());

//Display all the pokemon info from array
pokemonRepository.getAll().forEach(function (pokemonList) {
    const {
        name,
        height,
        types
    } = pokemonList;

    // Bonus Task
    //Object key
    // Object.keys(pokemonList).forEach(function (list) {
    //     console.log(pokemonList[list]);
    // });

    // console.table(pokemonList);

    if (pokemonList.height >= 1) {
        document.write(
            `${name} tall ${height} type ${types} - Wow, that's big!! <br><br>`
        );
    } else {
        document.write(`${name} tall ${height} type ${types} <br><br>`);
    }

});
