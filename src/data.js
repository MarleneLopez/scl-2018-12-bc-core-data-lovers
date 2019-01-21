const filterData = (data, condition) => {

  const filteredData = data.filter(element => {
    return element.type.includes(condition) === true
  })
  return filteredData;
}

window.filterData = filterData;




const sortData = (data, sortBy) => {

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
window.sortData = sortData;





