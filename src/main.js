const data = POKEMON.pokemon;

const containerRoot = document.getElementById("root");
const selectType = document.getElementById("type");

//Mostrar toda la data en CARDS
const showData = (data) => {
    //Va ir guardado los datos entregados
    let result = "";
    //console.log(data);

    data.forEach(element => {
        //element -->DATA[i]
        //console.log(element.name);
        result = containerRoot.innerHTML += `
        <div>
        <div class="card">

        <div class="card-header">
            <div class="img">
                <img src="${element.img}">
            </div>

            <div class="card-body"
            <h3>${element.num}</h3>
            <h2>${element.name}</h2>
            <p>${element.type}</p>
            </div>
        </div>
        </div>
        </div> `

        /*
            `<div>
        <div class="card-deck">
        <div class="card">
                    <div class="img"><img src="${element.img}"></div>

          <div class="card-body">
          <h3>${element.num}</h3>
            <h2>${element.name}</h2>
          </div>

          <div class="card-footer">
          <p>${element.type}</p>

          </div>
        </div>
        </div>
      </div>`*/

    });
    return result;
}

//Filtrado, muestra en CARDS
selectType.addEventListener("change", () => {
    let condition = selectType.options[selectType.selectedIndex].text;
    let filtered = filterData(data, condition);
    //console.log(filtered);
    containerRoot.innerHTML = "";
    filtered.forEach(element => {
        containerRoot.innerHTML +=
            `
        <div>
        <div class="card">
        <div class="card-header">
            <div class="img">
                <img src="${element.img}">
            </div>
            <div class="card-body">
            <h3>${element.num}</h3>
            <h2>${element.name}</h2>
            <p>${element.type}</p>
            </div>
        </div>
        </div>
        </div> `
    })
})




document.getElementById('sort').addEventListener('change', (evento) => {
    evento.preventDefault();

    //Creo una nueva constante "s   eleccionOrden" donde tomo el valor seleccionado en Select
    const sorted = document.getElementById('sort').value
    //variable que  guarda todos los return de "ordenarPokemons" de la data.js
    let ver = sortData(data, sorted)

    //Se borra lo impreso cada vez que vuelvo a seleccionar otro ordenador, debe ser antes del que se imprime en la pantalla
    document.getElementById("root").innerHTML = " ";

    //se recorre la variable "ver" con todos los datos de "ordenado"
    for (let i = 0; i < ver.length; i++) {

        //Se imprime en el id=vacío, la variable ver siendo recorrida. Muestro solo el nombre    
        document.getElementById("root").innerHTML +=
            `<div>
            <div class="card">
            <div class="box">
                <div class="img">
                    <img src="${ver[i].img}">
                </div>
                <h3>${ver[i].num}</h3>
                <h2>${ver[i].name}</h2>
                <p>${ver[i].type}</p>
            </div>
            </div>
            </div> `

    }

    // console.log(ver)
})
//Que se cargue solo esto en un principio
window.onload = showData(data);










const pokemonTypes = ["grass", "poison", "fire", "flying", "water", "bug", "normal","electric", "ground", "fighting", "psychic", "rock", "ice", "ghost","dragon"];
let arreglo = [];
const pokemonCountPerType = (pokemonData, pokemonType) => {
  console.log(pokemonType);
  console.log(pokemonData);
  // Recorremons el array donde tenemos todos los tipos de pokemons
  pokemonType.forEach( (type) => {
    // console.log(type);
    let contador = 0;

    // Recorremos el array de pokemons
    pokemonData.forEach( (pokemon) => {
      //console.log(pokemon.type);
      // Recorremos cada uno de sus tipos
      pokemon.type.forEach( (uniqueType) => {
        //console.log('cada type', uniqueType);
        // Si el tipo de pokemon que estamos buscando corresponde a uno de los tipos del pokemon
        // que estamos revisando incrementamos el contador
        if (type == uniqueType.toLowerCase()) {
          contador = contador + 1
        }
      })
    });
    console.log('Tipo: ', type, '  Cantidad: ', contador);
    arreglo.push(contador)
  });

  console.log('Arreglo de valores', arreglo);

};

pokemonCountPerType(data, pokemonTypes);

let ctx = document.getElementById('myChart').getContext('2d');
let chart = new Chart(ctx, {
    // tipo de grafico
    type: 'bar',
    data: {
        labels: ["grass", "poison", "fire", "flying", "water", "bug", "normal","electric", "ground", "fighting", "psychic", "rock", "ice", "ghost","dragon"],
       
        datasets: [{
            label: "tipos de Pokemon",
            backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
                'rgba(153, 102, 255, 0.5)',
                'rgba(255, 159, 64, 0.5)',
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
                'rgba(153, 102, 255, 0.5)',
                'rgba(255, 159, 64, 0.5)',
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
            ],
            borderColor: 'black(255, 99, 132)',
            hoverBackgroundColor: 'blue(234,123,45)',
            data: arreglo,
        }]
    },

    // Configuration options go here
    options: {}
});