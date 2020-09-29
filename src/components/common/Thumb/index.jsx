import React from 'react';
import PropTypes from 'prop-types';
import ThumbFigure from '../ThumbFigure';

import './Thumb.scss';

const CLASS_NAME = 'thumbSquare';

const Thumb = ({ type, size, onClick }) => {
  const classes = `${CLASS_NAME} ${CLASS_NAME}--${type}`;

  if (onClick)
    return (
      <button
        type="button"
        className={classes}
        onClick={onClick}
        aria-label={`Thumb ${type}`}
      >
        <ThumbFigure type={type} size={size} />
      </button>
    );

  return (
    <div className={classes}>
      <ThumbFigure type={type} size={size} aria-label={`Thumb ${type}`} />
    </div>
  );
};

Thumb.propTypes = {
  type: PropTypes.oneOf(['up', 'down']),
  size: PropTypes.number,
  onClick: PropTypes.func,
};

Thumb.defaultProps = {
  type: 'up',
  size: 16,
  onClick: null,
};

export default Thumb;
