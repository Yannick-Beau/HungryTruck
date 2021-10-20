import { expect } from 'chai';

import ContactReducer from '../../src/reducers/ContactReducer';

import { contactUs } from '../../src/actions/contact';

describe('ContactReducer', () => {
  it('is a function', () => {
    expect(ContactReducer).to.be.a('function');
  });
  // on voudrait être alertés si on a changé temporairement une valeur dans le state
  // et qu'on a oublié de l'enlever
  it('test initial state', () => {
    // on "prend une photo" du state initial qu'on devrait avoir
    const expectedInitialState = {
      mail: '',
      message: '',
    };
    // - comment récupérer le state initial à partir du reducer

    // comparaison en profondeur ("deep") : on compare chaque propriété des deux objets
    // une comparaison to.equal regarde si les raccourcis font référence au même objet
    expect(ContactReducer()).to.deep.equal(expectedInitialState);
  });
  it('check treatment of action CONTACT_US (message)', () => {
    // on prépare un state d'avant
    const stateBefore = {
      mail: 'john@hungrytruck.com',
      message: '',
    };

    // on prépare une action : soit on crée directement l'objet, soit on fait
    // appel à l'action creator (permettra de vérifier que le nom des infos de
    // payload est cohérent entre action creator et reducer)
    const action = contactUs('Bonjour, voici mon message', 'message');

    // on prépare le state d'après qu'on devrait avoir
    const expectedStateAfter = {
      mail: 'john@hungrytruck.com',
      message: 'Bonjour, voici mon message',
    };

    // on appelle le reducer avec state d'avant et action => on récupère
    // le state d'après
    const stateAfter = ContactReducer(stateBefore, action);

    // on compare le state d'après réel avec le state d'après attendu (celui que
    // j'ai calculé)
    expect(stateAfter).to.deep.equal(expectedStateAfter);
  });
  it('check treatment of action CONTACT_US (mail)', () => {
    // on prépare un state d'avant
    const stateBefore = {
      mail: '',
      message: 'Bonjour, voici mon message',
    };

    // on prépare une action : soit on crée directement l'objet, soit on fait
    // appel à l'action creator (permettra de vérifier que le nom des infos de
    // payload est cohérent entre action creator et reducer)
    const action = contactUs('john@hungrytruck.com', 'mail');

    // on prépare le state d'après qu'on devrait avoir
    const expectedStateAfter = {
      mail: 'john@hungrytruck.com',
      message: 'Bonjour, voici mon message',
    };

    // on appelle le reducer avec state d'avant et action => on récupère
    // le state d'après
    const stateAfter = ContactReducer(stateBefore, action);

    // on compare le state d'après réel avec le state d'après attendu (celui que
    // j'ai calculé)
    expect(stateAfter).to.deep.equal(expectedStateAfter);
  });
});
