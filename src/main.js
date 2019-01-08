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
//Que se cargue solo esto en un principio
window.onload = showData(data);









