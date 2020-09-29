import React from 'react';
import PropTypes from 'prop-types';
import ThumbFigure from '../ThumbFigure';

import './RulingSummary.scss';

const RulingSummary = ({ thumbsUp, thumbsDown }) => {
  const totalVotes = thumbsUp + thumbsDown;
  const thumbsUpPercentage = Math.round((thumbsUp * 100) / totalVotes);
  const thumbsDownPercentage = 100 - thumbsUpPercentage;

  return (
    <div className="rulingSummary">
      <div
        className="rulingSummary__option rulingSummary__option--up"
        style={{ width: `${thumbsUpPercentage}%` }}
      >
        <ThumbFigure type="up" size={35} />
        <span>{`${thumbsUpPercentage}%`}</span>
      </div>
      <div
        className="rulingSummary__option rulingSummary__option--down"
        style={{ width: `${thumbsDownPercentage}%` }}
      >
        <span>{`${thumbsDownPercentage}%`}</span>
        <ThumbFigure type="up" size={35} />
      </div>
    </div>
  );
};

RulingSummary.propTypes = {
  thumbsUp: PropTypes.number.isRequired,
  thumbsDown: PropTypes.number.isRequired,
};

export default RulingSummary;
