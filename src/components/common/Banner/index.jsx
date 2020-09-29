import React from 'react';
import MainButton from '../MainButton';

import bannerBackground from '../../../assets/img/banner.png';

import './Banner.scss';

const Banner = () => {
  return (
    <div
      className="banner"
      style={{
        background: `url("${bannerBackground}")`,
        backgroundSize: 'cover',
      }}
    >
      <div className="banner__content">
        <h4 className="banner__description">
          Is there anyone else you would want us to add?
        </h4>
        <MainButton title="Submit a Name" onClick={() => {}} />
      </div>
    </div>
  );
};

export default Banner;
