//Filter
const filterData = (data, condition) => {
  const filteredData = data.filter(element => {
    return element.type.includes(condition) === true
  })
  return filteredData;
}

window.filterData = filterData;


//Sort



// Metodo para ordrnar los pokemons alfabeticamente "a-z" o "z-a"
// Por hacer: Orden numerico
//Sort


const sortData = (data, sortBy) => {
  // console.log(data, sortOrder); 

  if (sortBy == 'a-z') {

    return data.sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      return 0;
    });
  }

  if (sortBy == 'z-a') {
    return data.sort((a, b) => {
      if (a.name < b.name) {
        return 1;
      }
      if (a.name > b.name) {
        return -1;
      }
      return 0;
    });
  }
  if (sortBy == '001-151') {
    return data.sort((a, b) => {
      if (a.num > b.num) {
        return 1;
      }
      if (a.num < b.num) {
        return -1;
      }
      return 0;

    });
  }

  if (sortBy == '151-001') {
    return data.sort((a, b) => {
      if (a.num < b.num) {
        return 1;
      }
      if (a.num > b.num) {
        return -1;
      }
      return 0;
    });
  }

}





