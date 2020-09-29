import React from 'react';
import PropTypes from 'prop-types';
import { HiThumbUp, HiThumbDown } from 'react-icons/hi';

const ThumbFigure = ({ type, size }) =>
  type === 'up' ? <HiThumbUp size={size} /> : <HiThumbDown size={size} />;

ThumbFigure.propTypes = {
  type: PropTypes.oneOf(['up', 'down']),
};

ThumbFigure.defaultProps = {
  type: 'up',
};

export default ThumbFigure;
