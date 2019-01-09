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
        <div class="box">
        <h3>${element.num}</h3>
            <div class="img">
                <img src="${element.img}">
            </div>
            <h2>${element.name}</h2>
            <p>${element.type}</p>
        </div>
        </div>
        </div> `


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
        <div class="box">
        <h3>${element.num}</h3>
            <div class="img">
                <img src="${element.img}">
            </div>
            <h2>${element.name}</h2>
            <p>${element.type}</p>
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
        document.getElementById("root").innerHTML += //ver[i].name + "<br>";

            //'<div class ="col s10"      >' + '<h5>' + ver[i].num + '</h5>' + '<h3>' + ver[i].name + '</h3>' + '<img src="' + ver[i].img + '">' + '<p>' + ver[i].type + '</p>' + '</div>';   // mostrando el rsultado en array para diferentes keys del objeto.;


            /*result = containerRoot.innerHTML += */`
            <div>
            <div class="card">
            <div class="box">
            <h3>${ver[i].num}</h3>
                <div class="img">
                    <img src="${ver[i].img}">
                </div>
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









