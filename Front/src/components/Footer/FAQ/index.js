// == Import npm
import React, { useEffect } from 'react';
import Loader from 'react-loader-spinner';
import PropTypes from 'prop-types';

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
        <article key={item.id} className="faq">
          <p className="faq-question">{item.question}</p>
          <p className="faq-answer">{item.reponse}</p>
        </article>
      )))}
      </div>
    </section>
  );
};

Faq.propTypes = {
  faq: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      question: PropTypes.string.isRequired,
      reponse: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  findFaq: PropTypes.func.isRequired,
  loadFaq: PropTypes.bool.isRequired,
  loadingFaq: PropTypes.func.isRequired,
};

// == Export
export default Faq;
