const pokemonRepository = function () {
    const e = [];
    let t = "https://pokeapi.co/api/v2/pokemon/?limit=150";

    function n(t) {
        "object" == typeof t && "name" in t && "detailsUrl" in t ? (e.push(t), console.log("Add new pokemon successful!")) : console.log("Pokemon is not correct!!")
    }

    function o(e) {
        let t = e.detailsUrl;
        return fetch(t).then(function (e) {
            return e.json()
        }).then(function (t) {
            console.log(JSON.stringify(t, void 0, 4)), e.imageUrl = t.sprites.front_default, e.name = t.name, e.height = t.height;
            let n = [];
            for (let e = 0; e < t.types.length; e++) n.push(t.types[e].type.name);
            e.types = n
        }).catch(function (e) {
            console.log("Error for load more detail!!!", e)
        })
    }

    function i(e) {
        o(e).then(function () {
            r(e)
        })
    }

    function r(e) {
        document.querySelector(".pokemonName").innerText = e.name.toUpperCase(), document.querySelector(".pokemonHeight").innerText = "Height: " + e.height + " M", document.querySelector(".pokemonType").innerHTML = "Type: " + e.types;
        let t = document.querySelector(".pokemonProfileImg");
        t.src = e.imageUrl, t.alt = e.name
    }
    return {
        add: n,
        getAll: function () {
            return e
        },
        addListItem: function (e) {
            let t = document.querySelector(".pokemon-list"),
                n = document.createElement("li");
            n.classList.add("group-list-item", "list-group-item-action");
            let o = document.createElement("button");
            o.innerText = e.name, o.classList.add("pokemonListBtn", "btn", "btn-info"), n.appendChild(o), t.appendChild(n), o.addEventListener("click", function () {
                i(e)
            })
        },
        loadList: function () {
            return fetch(t).then(function (e) {
                return e.json()
            }).then(function (e) {
                e.results.forEach(function (e) {
                    n({
                        name: e.name,
                        detailsUrl: e.url
                    })
                })
            }).catch(function (e) {
                console.error("Loading pokemon list error!!", e)
            })
        },
        loadDetails: o,
        showDetails: i,
        showModal: r
    }
}();
pokemonRepository.loadList().then(function () {
    pokemonRepository.getAll().forEach(function (e) {
        pokemonRepository.addListItem(e)
    })
});