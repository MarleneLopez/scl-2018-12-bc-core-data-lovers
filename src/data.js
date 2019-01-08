//const data = POKEMON.pokemon;

const filterData = (data, condition) => {
  const filteredData = data.filter(element => {
      return element.type.includes(condition) === true
  })
  return filteredData;
}

window.filterData = filterData;




