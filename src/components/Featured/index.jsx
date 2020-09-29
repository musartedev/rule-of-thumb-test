import React from 'react';
import FeaturedBox from './FeaturedBox';
import FeaturedCountDown from './FeaturedCountDown';

import './Featured.scss';

// TODO: Get this from backend
const featured = {
  fullName: 'Pope Francis?',
  description:
    'He’s talking tough on clergy sexual abuse, but is he just another papal pervert protector? (thumbs down) or a true pedophile punishin pontiff? (thumbs up).',
  photoUrl:
    'https://res.cloudinary.com/rutas/image/upload/v1589060227/pope_efrbpm.png',
  closesAt: '22',
};

const Featured = () => {
  return (
    <div className="featured">
      <div className="featured__content">
        <FeaturedBox
          fullName={featured.fullName}
          description={featured.description}
        />
      </div>
      <div className="featured__background">
        <figure className="featured__image">
          <img src={featured.photoUrl} alt={featured.fullName} />
        </figure>
        <FeaturedCountDown closesAt={featured.closesAt} />
      </div>
    </div>
  );
};

export default Featured;
