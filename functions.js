function run() {
    // Creating Our XMLHttpRequest object 
    var xhr = new XMLHttpRequest();

    // Making our connection  
    var url = 'https://pokeapi.co/api/v2/pokemon?offset=100&limit=100';
    xhr.open("GET", url, true);

    // function execute after request is successful 
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let container = document.querySelector("#pokemonCards");
            let pokemons = JSON.parse(this.responseText);
            console.log(pokemons);
            
            pokemons.results.forEach(pokemon =>{
                let card = document.createElement('div');
                card.className="card";
                card.style = "--bs-gap: .25rem 1rem;";

                let title = document.createElement('h5');
                title.className = "card-title"
                title.innerText = pokemon.name.toUpperCase();
                console.log(pokemon.name);

                let link = document.createElement('a')
                link.classList = "btn btn-outline-danger";
                link.href = "https://wikipedia.org/wiki/"+pokemon.name;
                link.innerText = "More info"
                
                card.appendChild(title);
                card.appendChild(link);
                container.appendChild(card);
            });
            
        }
    }
    // Sending our request 
    xhr.send();
}
run();