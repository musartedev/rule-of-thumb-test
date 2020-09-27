import React from 'react';
import HeaderBrand from './HeaderBrand';
import HeaderNav from './HeaderNav';

import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="header__content">
        <HeaderBrand />
        <HeaderNav />
      </div>
    </header>
  );
};

export default Header;
