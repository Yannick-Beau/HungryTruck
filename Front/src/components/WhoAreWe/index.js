// == Import npm
import React from 'react';

// == Import
import './whoarewe.scss';
import { GitHub, Linkedin, Mail } from 'react-feather';
import { Link } from 'react-router-dom';
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
          <a
            href="https://www.linkedin.com/in/yannick-beau/"
            target="_blank"
            exact
            rel="noreferrer"
          >
            <Linkedin />
          </a>
          <a
            href="https://github.com/Yannick-Beau"
            target="_blank"
            exact
            rel="noreferrer"
          >
            <GitHub />
          </a>
          <a
            href="mailto:beauyannick@gmail.com"
            exact
            rel="noreferrer"
          >
            <Mail />
          </a>
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
          <a
            href="https://www.linkedin.com/in/turpin-jonathan"
            target="_blank"
            exact
            rel="noreferrer"
          >
            <Linkedin />
          </a>
          <a
            href="https://github.com/TURPINJonathan"
            target="_blank"
            exact
            rel="noreferrer"
          >
            <GitHub />
          </a>
          <a
            href="mailto:turpin.j@hotmail.fr"
            exact
            rel="noreferrer"
          >
            <Mail />
          </a>
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
          <p className="name"><span>L. Le Clanche</span> Aodrën</p>
          <p className="job">Lead Dev Back | Git Master</p>
          <p className="searching">En recherche d'alternance</p>
        </div>
        <div className="details-logo">
          <a
            href="https://www.linkedin.com/in/aodren-lacotleclanche/"
            target="_blank"
            exact
            rel="noreferrer"
          >
            <Linkedin />
          </a>
          <a
            href="https://github.com/ExoCinki"
            target="_blank"
            exact
            rel="noreferrer"
          >
            <GitHub />
          </a>
          <a
            href="mailto:aolacot@gmail.com"
            exact
            rel="noreferrer"
          >
            <Mail />
          </a>
        </div>
      </div>
    </div>

  </section>
);

// == Export
export default WhoAreWe;
