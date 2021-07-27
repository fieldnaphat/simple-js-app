// IIFE Part
const pokemonRepository = (function () {
    let modalContainer = document.querySelector("#modal-container");
    const pokemonList = [];
    let apiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=150";

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

        button.addEventListener("click", function (event) {
            showDetails(pokemon);
            showModal(pokemon);
        });
    }

    //Load pokemon data from API
    function loadList() {
        return fetch(apiUrl)
            .then(function (response) {
                return response.json();
            })
            .then(function (json) {
                json.results.forEach(function (item) {
                    let pokemon = {
                        name: item.name,
                        detailsUrl: item.url,
                    };
                    add(pokemon);
                });
            })
            .catch(function (e) {
                console.error("Loading pokemon list error!!", e);
            });
    }

    //Load more detail of pokemon from API
    function loadDetails(item) {
        let url = item.detailsUrl;
        return fetch(url)
            .then(function (response) {
                return response.json();
            })
            .then(function (details) {
                // console.log(JSON.stringify(details, undefined, 4));
                // Now we add the details to the item
                item.imageUrl = details.sprites.front_default;
                item.name = details.name;
                item.height = details.height;
                //Get a Pokemon type data from API
                let typeArray = [];
                for (let i = 0; i < details.types.length; i++) {
                    typeArray.push(details.types[i].type.name);
                }
                item.types = typeArray;

            })
            .catch(function (e) {
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

    function showModal(item, pokemon) {

        loadDetails(item).then(function () {
            console.log("showModal loadDetails", item);

            modalContainer.innerHTML = "";
            let modal = document.createElement("div");
            modal.classList.add("modal");

            //Create close button in modal
            let closeButtonElement = document.createElement("button");
            closeButtonElement.classList.add("modal-close");
            closeButtonElement.innerText = "X";
            closeButtonElement.addEventListener("click", hideModal);

            let titleElement = document.createElement("h1");
            titleElement.innerText = item.name;

            let contentElement = document.createElement("p");
            contentElement.innerText = "cat";

            // Create pokemon info in Modal
            let pokemonName = document.createElement('h1');
            pokemonName.classList.add('pokemonName');
            pokemonName.innerText = item.name.toUpperCase();

            let pokemonHeight = document.createElement('p');
            pokemonHeight.classList.add('pokemonHeight');
            pokemonHeight.innerText = "Height: " + item.height + " M";

            let pokemonType = document.createElement('p');
            pokemonType.classList.add('pokemonType');
            let PokemonTypeText = item.types;
            pokemonType.innerHTML = "Type: " + item.types;

            let pokemonProfileImg = document.createElement('img');
            pokemonProfileImg.classList.add('pokemonProfileImg');
            pokemonProfileImg.src = item.imageUrl;
            pokemonProfileImg.innerHTML = pokemonProfileImg;


            modal.appendChild(closeButtonElement);
            modal.appendChild(pokemonName);
            modal.appendChild(pokemonHeight);
            modal.appendChild(pokemonType);
            modal.appendChild(pokemonProfileImg);
            modalContainer.appendChild(modal);
        });


        modalContainer.classList.add("is-visible");
    }

    function hideModal() {
        console.log("hideModal", hideModal)
        let modalContainer = document.querySelector("#modal-container");
        modalContainer.classList.remove("is-visible");

        // if (dialogPromiseReject) {
        //     dialogPromiseReject();
        //     dialogPromiseReject = null;
        // }
    }

    // Modal window

    window.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && modalContainer.classList.contains("is-visible")) {
            hideModal();
        }
    });

    modalContainer.addEventListener("click", (e) => {
        // Since this is also triggered when clicking INSIDE the modal
        // We only want to close if the user clicks directly on the overlay

        let target = e.target;
        if (target === modalContainer) {
            hideModal();
        }
    });

    //   document.querySelector(".button-class").addEventListener("click", () => {
    //     showModal("Modal title", "This is the modal content!");
    //   });


    //Reture all function here
    return {
        add: add,
        getAll: getAll,
        addListItem: addListItem,
        loadList: loadList,
        loadDetails: loadDetails,
        showDetails: showDetails,
        showModal: showModal,
        hideModal: hideModal,

    };
})();


//Display all the pokemon info from API to home page

pokemonRepository.loadList().then(function () {
    // Now the data is loaded!
    pokemonRepository.getAll().forEach(function (pokemon) {
        pokemonRepository.addListItem(pokemon);
    });
});