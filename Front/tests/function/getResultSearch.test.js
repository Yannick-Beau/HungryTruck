// on importe ce qu'on veut tester
import { should } from 'chai';
import getResultSearch from '../../src/function/search';

// on importe les données de test
import foodTruck from '../data/foodTruck';

// on importe l'une des syntaxes de chai

// spécificité de should : il faut l'appeler une première fois pour pouvoir l'utiliser
should();
describe('getResultSearch', () => {
  it('is a function', () => {
    // on veut vérifier que slugifyTitle est bien une fonction
    getResultSearch.should.be.a('function');
  });
  it('filter test result (length)', () => {
    getResultSearch('Le Gras', foodTruck).should.have.lengthOf(1);
  });
  it('filter test result (name)', () => {
    const expectedResult = [];
    const filter = foodTruck.find((element) => element.name === 'Le Gras');
    expectedResult.push(filter);
    getResultSearch('Le Gras', foodTruck)[0].name.should.equal(expectedResult[0].name);
  });
  it('filter test result (food type)', () => {
    const expectedResult = [];
    const filter = foodTruck.find((element) => element.sell_type_food[0].name === 'frite');
    expectedResult.push(filter);
    getResultSearch('frite', foodTruck)[0].sell_type_food[0].name.should.equal(expectedResult[0].sell_type_food[0].name);
  });
});
