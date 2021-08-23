// == Import npm
import React from 'react';

// == Import
import './faq.scss';

// == Composant
const Faq = () => (
  <section className="faqSection">
    <h2 className="faq-title">FAQ</h2>
    <div className="faq-main">
      <article className="faq">
        <p className="faq-question">La Question FAQ</p>
        <p className="faq-answer">La réponse à la question</p>
      </article>
      <article className="faq">
        <p className="faq-question">La Question FAQ</p>
        <p className="faq-answer">La réponse à la question</p>
      </article>
      <article className="faq">
        <p className="faq-question">La Question FAQ</p>
        <p className="faq-answer">La réponse à la question</p>
      </article>
    </div>
  </section>
);

// == Export
export default Faq;
