import React from 'react';
import { Link } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';

const HeaderNav = () => {
  return (
    <nav className="header__navigation">
      <ul className="navigationList">
        <li className="navigationList__item">
          <Link to="/past-trials">Past Trials</Link>
        </li>
        <li className="navigationList__item">
          <Link to="/how-it-works">How It Works</Link>
        </li>
        <li className="navigationList__item">
          <Link to="/login">Login / Sign Up</Link>
        </li>
        <li className="navigationList__item">
          <Link to="/search">
            <BsSearch size={23} />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default HeaderNav;
