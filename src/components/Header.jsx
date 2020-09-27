import React from 'react';
import { BsSearch } from 'react-icons/bs';

import '../styles/components/Header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="header__content">
        <div className="header__brand">Rule of Thumb.</div>
        <nav className="header__navigation">
          <ul className="navigationList">
            <li className="navigationList__item">
              <a href="/">Past Trials</a>
            </li>
            <li className="navigationList__item">
              <a href="/">How It Works</a>
            </li>
            <li className="navigationList__item">
              <a href="/">Login / Sign Up</a>
            </li>
            <li className="navigationList__item">
              <a href="/">
                <BsSearch size={23} />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
