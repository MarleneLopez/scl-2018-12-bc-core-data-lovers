require('../src/data.js');

describe('filterData', () => {

  it('debería ser una función', () => {
    assert.equal(typeof filterData).toBe('function');
  });

  it('deberia retornar pokemones  "Electricos" al seleccionar "Electric"', () => {
    asser.equal(filterData("Electric")).toBe("Electric");
  });















/*
describe('example', () => {
  it('is a function', () => {
    expect(typeof example).toBe('function');
  });

  it('returns `example`', () => {
    expect(example()).toBe('example');
  });
});

it('deberia retornar pokemones por nombre', => {
  expect(nombre()).toBe('nombrePokemon')
});


it('deberia retornar pokemones en orden descendente del 1 al 150 cuando se pida orden del 1 al 150', => {
  expect(numerico()).toBe('1 al 151')

});

it('deberia retornar pokemones en orden ascendente del 150 al 1 cuando se pida orden del 150 al 1', () => {
  expect(numerico()).toBe('151 al 1')
});

it('deberia retornar pokemones en orden de la A a la Z cuando se pida orden de la A la Z', () => {
  expect(alfabetico()).toBe('A a la Z')
});

it('deberia retornar pokemones en orden de la Z a la A cuando se pida orden de la Z la A', () => {
  expect(alfabetico()).toBe('Z a la A')
});

it('deberia retornar pokemones  por tipo cuando se pida un tipo en especifico', () => {
  expect(tipo()).toBe(tipo)
});
*/