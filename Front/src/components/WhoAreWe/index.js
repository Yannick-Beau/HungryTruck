// == Import npm
import React from 'react';

// == Import
import './whoarewe.scss';
import Yannick from '../../assets/img/yannick.jpg';
import John from '../../assets/img/john.jpg';
import Aodren from '../../assets/img/aodren.jpg';

// == Composant
const WhoAreWe = () => (
  <section className="team">
    <div className="team-front">
      <article className="team-card">
        {/* <div className="team-card--complete"> */}
        <img src={John} alt="john" className="team-card--john" />
        <div className="team-card--details_john">
          <p>TURPIN Jonathan</p>
          <p>Product Owner</p>
          <p>Développeur Front</p>
        </div>
        {/* </div> */}
      </article>
      <article className="team-card">
        {/* <div className="team-card--complete"> */}
        <img src={Yannick} alt="yannick" className="team-card-yannick" />
        <div className="team-card--details_yannick">
          <p>BEAU Yannick</p>
          <p>Lead Dev Front / Scrum Master</p>
          <p>Développeur Front</p>
        </div>
        {/* </div> */}
      </article>
    </div>
    <div className="team-back">
      <article className="team-card">
        {/* <div className="team-card--complete"> */}
        <img src={Aodren} alt="aodren" className="team-card--aodren" />
        <div className="team-card--details_aodren">
          <p>LLC Aodrën</p>
          <p>Lead Dev Back / Git Master</p>
          <p>Développeur Back</p>
        </div>
        {/* </div> */}
      </article>
    </div>
  </section>
);

// == Export
export default WhoAreWe;
