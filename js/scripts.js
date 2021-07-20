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

    //Reture a pokemo list
    function getAll() {
        return pokemonList;
    }

    //Add new pokemon object to the list
    function add(pokemon) {
        //Add Object.keys for check add value of new pokemon
        if (

        typeof pokemon === "object" && 
        "name" in pokemon 
        ) {
            pokemonList.push(pokemon);
            console.log("Add new pokemon successful!");

        } else {
            console.log("Pokemon is not correct!!");
        }
    }

    function addListItem(pokemon) {

        let pokemonList = document.querySelector(".pokemon-list");
        let listpokemon = document.createElement("li");
        let button = document.createElement("button");

        button.innerText = pokemon.name;
        button.classList.add("button-class");
        listpokemon.appendChild(button);
        pokemonList.appendChild(listpokemon);

        button.addEventListener('click', function(event) {
            showDetails(pokemon);
        });
        
    }

    //Display pokemon info who was click on screen
    function showDetails(pokemon) {
        const {
            name,
            height,
            types
        } = pokemon;

        console.log(name + " Tall " +  height + " Type " + types);

    }



    return {
        add: add,
        getAll: getAll,
        addListItem: addListItem,
        showDetails: showDetails,
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
    
// console.log("test 2", pokemonRepository.getAll());


//Display all the pokemon info from array in console
// console.log(pokemonRepository.getAll());

//Display all the pokemon info from array
pokemonRepository.getAll().forEach(function (pokemon) {
    const {
        name,
        height,
        types
    } = pokemon;

    pokemonRepository.addListItem(pokemon);


    // if (pokemon.height >= 1) {
    //     document.write(
    //         `${name} tall ${height} type ${types} - Wow, that's big!! <br><br>`
    //     );
    // } else {
    //     document.write(`${name} tall ${height} type ${types} <br><br>`);
    // }

});



