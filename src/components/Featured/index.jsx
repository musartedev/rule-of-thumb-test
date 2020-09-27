import React from 'react';
import { FaWikipediaW } from 'react-icons/fa';
import { RiThumbUpLine, RiThumbDownLine } from 'react-icons/ri';

import './Featured.scss';

const Featured = () => {
  return (
    <div
      className="featured"
      style={{
        backgroundImage: `url()`,
      }}
    >
      <figure className="featured__image">
        <img
          src="https://res.cloudinary.com/rutas/image/upload/v1589060227/pope_efrbpm.png"
          alt="Pope Francis"
        />
      </figure>
      <div className="featured__content">
        <div className="featured__box">
          <div className="featured__info">
            <div className="featured__title">
              <span>What is your opinion on</span>
              <h3>Pope Francis?</h3>
            </div>
            <div className="featured__description">
              <p>
                He’s talking tough on clergy sexual abuse, but is he just
                another papal pervert protector? (thumbs down) or a true
                pedophile punishing pontiff? (thumbs up).
              </p>
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
        </div>
      </div>
    </div>
  );
};

export default Featured;
