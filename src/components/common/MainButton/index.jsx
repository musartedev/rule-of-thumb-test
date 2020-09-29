import React from 'react';
import PropTypes from 'prop-types';

import './MainButton.scss';

const CLASS_NAME = 'mainButton';

const MainButton = ({ title, size, invert, onClick }) => {
  const getClasses = () => {
    return `${CLASS_NAME} ${CLASS_NAME}--${size} ${invert &&
      `${CLASS_NAME}--invert`}`;
  };

  const classes = getClasses();

  return (
    <button type="button" className={classes} onClick={onClick}>
      {title}
    </button>
  );
};

MainButton.propTypes = {
  title: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['normal', 'big', 'huge']),
  invert: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

MainButton.defaultProps = {
  size: 'normal',
  invert: false,
};

export default MainButton;
