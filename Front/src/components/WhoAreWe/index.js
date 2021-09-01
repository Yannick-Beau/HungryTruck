// == Import npm
import React from 'react';

// == Import
import './whoarewe.scss';
import { GitHub, Linkedin, Mail } from 'react-feather';
import Yannick from '../../assets/img/yannick.png';
import John from '../../assets/img/john.png';
import Aodren from '../../assets/img/aodren.png';

// == Composant
const WhoAreWe = () => (
  <section className="team">
    <div className="cards">
      <img
        className="cards-picture"
        src={Yannick}
        alt="Yannick Beau"
      />
      <div className="cards-details">
        <div className="details-text">
          <p className="name"><span>Beau</span> Yannick</p>
          <p className="job">Lead Dev Front | Scrum Master</p>
          <p className="searching">En recherche d'alternance</p>
        </div>
        <div className="details-logo">
          <Linkedin />
          <GitHub />
          <Mail />
        </div>
      </div>
    </div>
    <div className="cards">
      <img
        className="cards-picture"
        src={John}
        alt="Turpin Jonathan"
      />
      <div className="cards-details">
        <div className="details-text">
          <p className="name"><span>Turpin</span> Jonathan</p>
          <p className="job">Dev Front | Product Owner</p>
          <p className="searching">En recherche d'alternance</p>
        </div>
        <div className="details-logo">
          <Linkedin />
          <GitHub />
          <Mail mailTo="turpin.j@hotmail.fr" />
        </div>
      </div>
    </div>
    <div className="cards">
      <img
        className="cards-picture"
        src={Aodren}
        alt="Aodren LACOT LE CLANCHE"
      />
      <div className="cards-details">
        <div className="details-text">
          <p className="name"><span>Lacot LC</span> Aodrën</p>
          <p className="job">Lead Dev Back | Git Master</p>
          <p className="searching">En recherche d'alternance</p>
        </div>
        <div className="details-logo">
          <Linkedin />
          <GitHub />
          <Mail />
        </div>
      </div>
    </div>

  </section>
);

// == Export
export default WhoAreWe;
