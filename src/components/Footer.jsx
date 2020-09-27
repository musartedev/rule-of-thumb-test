import React from 'react';
import { AiFillFacebook, AiOutlineTwitter } from 'react-icons/ai';

import '../styles/components/Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <nav className="footer__nav--first">
        <ul className="navigationList">
          <li className="navigationList__item">
            <a href="/">Terms and Conditions</a>
          </li>
          <li className="navigationList__item">
            <a href="/">Privacy and Policy</a>
          </li>
          <li className="navigationList__item">
            <a href="/">Contact Us</a>
          </li>
        </ul>
      </nav>
      <nav className="footer__nav--second">
        <ul className="navigationList">
          <li className="navigationList__item">Follow Us</li>
          <li className="navigationList__item">
            <a href="/">
              <AiFillFacebook size={22} />
            </a>
          </li>
          <li className="navigationList__item">
            <a href="/">
              <AiOutlineTwitter size={22} />
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
