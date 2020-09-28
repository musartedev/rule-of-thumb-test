import React from 'react';
import { FaWikipediaW } from 'react-icons/fa';
import { RiThumbUpLine, RiThumbDownLine } from 'react-icons/ri';

const FeaturedBox = ({ fullName, description }) => {
  return (
    <section className="featured__box">
      <div className="featured__info">
        <div className="featured__title">
          <span>What is your opinion on</span>
          <h3>{fullName}</h3>
        </div>
        <div className="featured__description">
          <p>{description}</p>
        </div>
        <div className="featured__infoLink">
          <FaWikipediaW color="white" size={10} />
          <a href="/">More information</a>
        </div>
        <div className="featured__callToAction">What is your veredict?</div>
      </div>
      <div className="featured__actions">
        <div className="action__option action__option--up">
          <RiThumbUpLine size={20} />
        </div>
        <div className="action__option action__option--down">
          <RiThumbDownLine size={20} />
        </div>
      </div>
    </section>
  );
};

export default FeaturedBox;
