import React from 'react';
import { BsSearch } from 'react-icons/bs';

const HeaderNav = () => {
  return (
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
  );
};

export default HeaderNav;
