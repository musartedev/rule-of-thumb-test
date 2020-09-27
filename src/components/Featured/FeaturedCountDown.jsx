import React from 'react';
import PropTypes from 'prop-types';

const FeaturedCountDown = ({ closesAt }) => {
  if (!closesAt) return null;

  return (
    <div className="countDown">
      <div className="countDown__title">
        <span>Closing in</span>
      </div>
      <div className="countDown__description">
        <span>{closesAt}</span>
        {' '}
        days
      </div>
    </div>
  );
};

FeaturedCountDown.propTypes = {
  closesAt: PropTypes.string.isRequired,
};

export default FeaturedCountDown;
