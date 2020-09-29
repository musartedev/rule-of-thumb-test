import React from 'react';
import { HiThumbUp, HiThumbDown } from 'react-icons/hi';
import PropTypes from 'prop-types';

import './Thumb.scss';

const CLASS_NAME = 'thumbSquare';

const Thumb = ({ type, size, onClick }) => {
  const ThumbFigure = type === 'up' ? HiThumbUp : HiThumbDown;
  const classes = `${CLASS_NAME} ${CLASS_NAME}--${type}`;

  if (onClick)
    return (
      <button type="button" className={classes} onClick={onClick}>
        <ThumbFigure size={size} />
      </button>
    );

  return (
    <div className={classes}>
      <ThumbFigure size={size} />
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
