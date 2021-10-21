// On importe l'une des syntaxes de chai.
import { should } from 'chai';
// On importe la fonction qu'on veut tester.
import getResultSearch from '../../src/function/search';

// On importe les données de test.
import foodTruck from '../data/foodTruck';

// Spécificité de should : il faut l'appeler une première fois pour pouvoir l'utiliser.
should();
// On commence par créer une fonction (avec en argument le nom de la fonction à tester)
// dans laquelle on écrira les différents tests de la fonction.
describe('getResultSearch', () => {
  // it permet de créer un test, on donne un nom au test en argument.
  // Tous d'abord on vérifie si c'est bien une fonction.
  it('is a function', () => {
    getResultSearch.should.be.a('function');
  });
  // On veut test le nombre d'objet que renvois la fonction après le filtrage.
  // En argument de getResultSearch on rentre la chaine de caractère qui
  // correspondrais à une recherche et les datas (avec la même structure que la réponse JSON)
  // créée pour le test. On utilise should.have.lengthOf(1) pour signifier qu'un seul objet
  // est attendu.
  it('filter test result (length)', () => {
    getResultSearch('Le Gras', foodTruck).should.have.lengthOf(1);
  });
  // Maintenant on veut vérifier que dans l'objet retourné, que le nom du food truck
  // correspond bien à la chaine de caractère rentrée en argument.
  // On commence par prendre la data qui est attendue depuis les datas créer pour le test.
  // [0].name.should.equal(expectedResult[0].name) Nous permet de comparer le nom du food truck
  // filtrer avec celui attendu.
  it('filter test result (name)', () => {
    const expectedResult = [];
    const filter = foodTruck.find((element) => element.name === 'Le Gras');
    expectedResult.push(filter);
    getResultSearch('Le Gras', foodTruck)[0].name.should.equal(expectedResult[0].name);
  });
  // On répète le même test que précédement, mais cette fois on recherche un type de nourriture,
  // on compare donc le type de nourriture stocké dans l'objet.
  it('filter test result (food type)', () => {
    const expectedResult = [];
    const filter = foodTruck.find((element) => element.sell_type_food[0].name === 'frite');
    expectedResult.push(filter);
    getResultSearch('frite', foodTruck)[0].sell_type_food[0].name.should.equal(expectedResult[0].sell_type_food[0].name);
  });
});
