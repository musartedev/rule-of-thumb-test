import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

import './ClosableInfo.scss';

const index = () => {
  const [show, setShow] = useState(true);

  const handleCloseInfo = () => setShow(false);

  if (!show) {
    return null;
  }

  return (
    <div className="closableInfo">
      <div className="closableInfo__title">
        <p>Speak out. Be heard.</p>
        <p>Be counted</p>
      </div>
      <div className="closableInfo__description">
        <p>
          Rule of Thumb is a crowd sourced court of public opinion where anyone
          and everyone can speak out and speak freely. It’s easy: You share your
          opinion, we analyze and put the data in a public report.
        </p>
      </div>
      <button
        type="button"
        className="closableInfo__button"
        onClick={handleCloseInfo}
        aria-label="Close Info"
      >
        <FaTimes size={20} />
      </button>
    </div>
  );
};

export default index;
