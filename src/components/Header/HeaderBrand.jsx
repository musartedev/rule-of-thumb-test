import React from 'react';
import { Link } from 'react-router-dom';

const HeaderBrand = () => {
  return (
    <Link to="/">
      <h1 className="header__brand">Rule of Thumb.</h1>
    </Link>
  );
};

export default HeaderBrand;
