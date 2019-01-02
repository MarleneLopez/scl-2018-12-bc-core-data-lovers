// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

//console.log(POKEMON.pokemon)
const data = POKEMON.pokemon;
const nombrePokemones = (data) => {
  for (let i = 0; i < data.lengt; i++) {
    nombres.push(data[i].name)
  }
  return nombres;
}

// Metodo que devuelve un arreglo con todos los tipos de pokemon

const cargarTiposPokemons = (dataPokemon) => {
  const tiposPokemon = [];
  dataPokemon.forEach(pokemon => {
    pokemon.type.forEach(tipo => {
      const indice = tiposPokemon.indexOf(tipo); // Devuelve -1 si no lo encuentra
      if (indice === -1) {
        tiposPokemon.push(tipo)
      }
    });
  });
  return tiposPokemon;
};



//Metodo que busca un pokemon por nombre y retorna un arreglo con los resultados
const buscarPorNombre = function (nombre, dataPokemon) {
  const resultado = dataPokemon.filter(pokemon => pokemon.name.toUpperCase() === nombre.toUpperCase());
  return resultado;
}

//console.log('data', data);
// Metodo para ordrnar los pokemons alfabeticamente "a-z" o "z-a"
// Por hacer: Orden numerico
const odernarPokemons = (dataPokemon, tipoOrdenamiento) => {
  if (tipoOrdenamiento == 'a-z') {
    return dataPokemon.sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      return 0;
    });
  }

  if (tipoOrdenamiento == 'z-a') {
    return dataPokemon.sort((a, b) => {
      if (a.name < b.name) {
        return 1;
      }
      if (a.name > b.name) {
        return -1;
      }
      return 0;
    });
  }
  if (tipoOrdenamiento == '001-151') {
    return dataPokemon.sort((a, b) => {
      if (a.numero < b.numero) {
        return 1;
      }
      if (a.numero > b.numero) {
        return -1;
      }
      return 0;

    });
  }

  if (tipoOrdenamiento == '151-001') {
    return dataPokemon.sort((a, b) => {
      if (a.numero > b.numero) {
        return 1;
      }
      if (a.numero < b.numero) {
        return -1;
      }
      return 0;
    });
  }

}
/*
const imprimirArregloPokemons = (pokemones) => {
  pokemones.forEach( (pokemon, index) => {
    if(index < 20) {
      const nombre = document.createElement('div');
      const imagen = document.createElement('img');
      imagen.setAttribute('src', pokemon.img);
      nombre.innerHTML = pokemon.name;
      const divPokemones = document.getElementById('pokemones');
      divPokemones.appendChild(nombre);
      divPokemones.appendChild(imagen)
    }
  })
  
};
*/

const imprimirArregloPokemons = () => {
  for (let i = 0; i < 20; i++) {
    const nombre = document.createElement('div');
    const imagen = document.createElement('img');
    imagen.setAttribute('src', data[i].img);
    nombre.innerHTML = data[i].name;
    const divPokemones = document.getElementById('pokemones');
    divPokemones.appendChild(nombre);
    divPokemones.appendChild(imagen)
  }
}
/*
const imprimirArregloPokemons2 = () => {
  for (let i = 20; i < 40; i++) {
    const nombre = document.createElement('div');
    const imagen = document.createElement('img');
    imagen.setAttribute('src', data[i].img);
    nombre.innerHTML = data[i].name;
    const divPokemones = document.getElementById('pokemones');
    divPokemones.appendChild(nombre);
    divPokemones.appendChild(imagen)
    
  }
}
*/
const pokemonesFiltrados = buscarPorNombre('pikachu', data);
imprimirArregloPokemons(pokemonesFiltrados);


// Metodo para borrar la lista de pokemones
const borrarListaPokemones = () => {
  const divPokemones = document.getElementById('pokemones').innerHTML = '';
}


// --------------------------
//Eventos Interfaz de usuario
// --------------------------


// Listiener borrar lista *PRUEBA*
document.getElementById('borrar').addEventListener('click', () => {
  borrarListaPokemones();
});

const mostrarSiguienteListaPokemones = () => {
  document.getElementById('siguiente').addEventListener('click', () => {
    mostrarSiguienteListaPokemones();
  });
}
// Metodo que borra lista, busca pokemon uy lo imprime
const secuenciaBusqueda = () => {
  borrarListaPokemones();
  const nombreABuscar = document.getElementById('input-busqueda').value;
  const resultado = buscarPorNombre(nombreABuscar, data);
  imprimirArregloPokemons(resultado)
}


// Listener Busqueda
document.getElementById('boton-busqueda').addEventListener('click', secuenciaBusqueda());
document.getElementById('input-busqueda').addEventListener('keypress', (evento) => {
  if (evento.key == 'Enter') {
    secuenciaBusqueda();
    document.getElementById('input-busqueda').value = '';
  }
})

/*
const secuenciaBusqueda = () => {
  borrarListaPokemones();
  const nombreABuscar = document.getElementById('input-busqueda').value;
  const resultado = buscarPorNombre(nombreABuscar, data);
  imprimirArregloPokemons(resultado)}
//P



//Metodo que busque los pokemon por nombre con for
let encontrado = null;
for( let i = 0; i < data.length; i++) {
  //console.log('indice', i)
  //console.log(data[i]);
  if(nombreABuscar == data[i].name) {
    encontrado = data[i];
  }
}
console.log(encontrado);
//console.log(resultado)
*/
