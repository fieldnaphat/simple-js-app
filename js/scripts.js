// IIFE Part
const pokemonRepository = (function () {

    const pokemonList = [];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

    //Reture a pokemo list
    function getAll() {
        return pokemonList;
    }

    //Add new pokemon object to the list
    function add(pokemon) {
        //Add Object.keys for check add value of new pokemon
        if (

        typeof pokemon === "object" && 
        "name" in pokemon &&
        "detailsUrl" in pokemon
        ) {
            pokemonList.push(pokemon);
            console.log("Add new pokemon successful!");

        } else {
            console.log("Pokemon is not correct!!");
        }
    }


    //Function for make new button for display pokemon on page 
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


    //Load pokemon data from API
    function loadList() {
        return fetch(apiUrl).then(function (response) {
            return response.json();
        }).then(function (json) {
            json.results.forEach(function(item) {
                let pokemon = {
                    name: item.name,
                    detailsUrl: item.url
                };
                add(pokemon);
            });
        }).catch(function (e) {
            console.error("Loading pokemon list error!!",e);
        });
    }

    //Load more detail of pokemon from API
    function loadDetails(item) {
        let url = item.detailsUrl;
        return fetch(url).then(function (response) {
            return response.json();
        }).then(function (details) {
            // Now we add the details to the item
            item.imageUrl = details.sprites.front_default;
            item.name = details.name;
            item.height = details.height;
            item.types = details.types;

        }).catch(function (e) {
            console.log("Error for load more detail!!!", e);
        });
    }

    //Display pokemon info who was click on screen
    // Pokémon details from the API 
    function showDetails(pokemon) {
        
        loadDetails(pokemon).then(function () {
            console.log("loadDetails", pokemon);

            // const {
            //     name,
            //     imageUrl,
            //     height,
            //     types,
            // } = pokemon;
            
            // console.log(name + "  " + imageUrl + " Tall " +  height + " Type " + types);
        });
        

    }

    //Reture all function here
    return {
        add: add,
        getAll: getAll,
        addListItem: addListItem,
        loadList: loadList,
        loadDetails: loadDetails,
        showDetails: showDetails,
    };
    
})();


//Display all the pokemon info from API to home page

pokemonRepository.loadList().then(function() {
    // Now the data is loaded!
    pokemonRepository.getAll().forEach(function(pokemon) {
        pokemonRepository.addListItem(pokemon);
    });
});

