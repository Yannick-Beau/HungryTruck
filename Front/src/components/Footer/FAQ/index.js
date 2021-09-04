// == Import npm
import React, { useEffect } from 'react';
import Loader from 'react-loader-spinner';

// == Import
import './faq.scss';

// == Composant
const Faq = ({
  faq,
  findFaq,
  loadFaq,
  loadingFaq,
}) => {
  useEffect(() => {
    loadingFaq();
    findFaq();
  }, []);
  console.log('faq : ', faq);
  return (
    <section className="faqSection">
      <h2 className="faq-title">FAQ</h2>
      <div className="faq-main">
        {loadFaq
      && (
        <Loader
          type="Puff"
          color="#e69512"
          height={100}
          width={100}
          className="loader"
        />
      )}
        {!loadFaq
      && (faq.map((item) => (
        <article className="faq">
          <p className="faq-question">{item.question}</p>
          <p className="faq-answer">{item.reponse}</p>
        </article>
      )))}
      </div>
    </section>
  );
};

// == Export
export default Faq;
