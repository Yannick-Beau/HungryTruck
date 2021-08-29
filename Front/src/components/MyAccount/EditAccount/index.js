// == Import npm
import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

// == Import
import './editAccount.scss';

// == Composant
const EditAccount = ({
  email,
  adresse,
  avatar,
  city,
  cp,
  pseudo,
  siret,
  isPro,
  logged,
  foods,
  findFood,
  findUser,
  handleSubmit,
  changeField,
  changeToggle,
}) => {
  useEffect(() => {
    console.log('useEffect');
    findFood();
    findUser();
  }, []);
  if (!logged) {
    return <Redirect to="/" />;
  }
  let title = 'Modifier votre compte Utilisateur';
  let buttonCreateName = 'Modifier mon compte Utilisateur';
  if (isPro) {
    title = 'Modifier votre compte Pro';
    buttonCreateName = 'Modifier mon compte Pro';
  }
  return (
    <main className="newaccount">
      <h1 className="newaccount-title">{title}</h1>
      <form
        className="newaccount-form"
        onSubmit={(evt) => {
          evt.preventDefault();
          handleSubmit();
        }}
      >
        <div className="form-left">
          <img className="avatar" src={avatar} alt="Avatar" />
          <label className="form-label--avatar" htmlFor="avatar">Lien de votre image de profil*
            <input
              type="text"
              className="avatar-input"
              name="avatar"
              placeholder="https://kelapplication.com/image.png"
              value={avatar}
              onChange={(evt) => {
                changeField(evt.target.value, 'pictureUser');
              }}
            />
          </label>
        </div>
        <div className="form-right">
          <h2>Vos informations personnelles</h2>
          <p className="fields-legend"><span>* Champ obligatoire</span></p>
          <div className="all-fields">
            <div className="fields">
              <div className="fields-left">
                <div className="field">
                  <label className="field-label" htmlFor="email">Votre Email
                    <div>
                      <input
                        className="field-input"
                        type="text"
                        name="email"
                        id="field-input--email"
                        placeholder="john.doeuf@gmail.com"
                        value={email}
                        onChange={(evt) => {
                          changeField(evt.target.value, 'email');
                        }}
                      />
                      <span>*</span>
                    </div>
                  </label>
                </div>
                <div className="field">
                  <label className="field-label" htmlFor="pseudo">Votre Pseudo
                    <div>
                      <input
                        className="field-input"
                        type="text"
                        name="pseudo"
                        id="field-input--pseudo"
                        placeholder="Poule"
                        value={pseudo}
                        onChange={(evt) => {
                          changeField(evt.target.value, 'nickname');
                        }}
                      />
                      <span>*</span>
                    </div>
                  </label>
                </div>
              </div>
              <div className="fields-right">
                <div className="field">
                  <label className="field-label" htmlFor="adresse">Votre adresse
                    <div>
                      <input
                        className="field-input"
                        type="text"
                        name="adresse"
                        id="field-input--adresse"
                        placeholder="3 rue de paris"
                        value={adresse}
                        onChange={(evt) => {
                          changeField(evt.target.value, 'address');
                        }}
                      />
                      <span>*</span>
                    </div>
                  </label>
                </div>
                <div className="field">
                  <label className="field-label" htmlFor="postal-code">Votre code postal
                    <div>
                      <input
                        className="field-input"
                        type="text"
                        name="postal-code"
                        placeholder="69000"
                        value={cp}
                        onChange={(evt) => {
                          changeField(evt.target.value, 'cp');
                        }}
                      />
                      <span>*</span>
                    </div>
                  </label>
                </div>
                <div className="field">
                  <label className="field-label" htmlFor="city">Votre ville
                    <div>
                      <input
                        className="field-input"
                        type="text"
                        name="city"
                        placeholder="Lyon"
                        value={city}
                        onChange={(evt) => {
                          changeField(evt.target.value, 'city');
                        }}
                      />
                      <span>*</span>
                    </div>
                  </label>
                </div>
                { isPro
                && (
                <div className="field">
                  <label className="field-label" htmlFor="siret">Votre n° de SIRET
                    <div>
                      <input
                        className="field-input"
                        type="text"
                        name="siret"
                        placeholder="12345678900012"
                        value={siret}
                        onChange={(evt) => {
                          changeField(evt.target.value, 'siret');
                        }}
                      />
                      <span>*</span>
                    </div>
                  </label>
                </div>
                )}
              </div>
              <div className="fields-food">
                <h2>Vos nourritures favorites</h2>
                <fieldset className="field-check">
                  {foods.map((item) => (
                    <label key={item.name} className="field-label" htmlFor={item.name}>{item.name}
                      <label className="switch">
                        <input
                          type="checkbox"
                          name={item.name}
                          checked={item.isCheck}
                          onChange={() => {
                            changeToggle(!item.isCheck, `${item.name}`);
                          }}
                        />
                        <span className="slider rounded" />
                      </label>
                    </label>
                  ))}
                </fieldset>
              </div>
            </div>
          </div>
          <button className="submit-form" type="submit" value="Submit">{buttonCreateName}</button>
        </div>
      </form>
    </main>
  );
};

EditAccount.propTypes = {
  email: PropTypes.string.isRequired,
  cp: PropTypes.number.isRequired,
  city: PropTypes.string.isRequired,
  siret: PropTypes.number.isRequired,
  adresse: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  pseudo: PropTypes.string.isRequired,
  isPro: PropTypes.bool.isRequired,
  logged: PropTypes.bool.isRequired,
  findUser: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  findFood: PropTypes.func.isRequired,
  changeField: PropTypes.func.isRequired,
  changeToggle: PropTypes.func.isRequired,
  foods: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      isCheck: PropTypes.bool.isRequired,
    }).isRequired,
  ).isRequired,
};

// == Export
export default EditAccount;
