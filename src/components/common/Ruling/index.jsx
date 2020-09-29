import React from 'react';
import PropTypes from 'prop-types';
import Thumb from '../Thumb';
import MainButton from '../MainButton';

import './Ruling.scss';
import RulingSummary from '../RulingSummary';

const Ruling = ({
  ruling: {
    fullName,
    description,
    photoUrl,
    workingSince,
    workingAt,
    thumbsDown,
    thumbsUp,
  },
}) => {
  return (
    <div
      className="ruling"
      style={{ backgroundImage: `url(${photoUrl})` }}
      itemScope
      itemType="https://schema.org/Person"
    >
      <div className="ruling__content">
        <h3 itemProp="name">{fullName}</h3>
        <div className="ruling__workingInfo">
          <div className="ruling__majorityIndicator">
            <Thumb size={18} type={thumbsUp >= thumbsDown ? 'up' : 'down'} />
          </div>
          <span className="workingInfo__time">{workingSince}</span>
          <span className="workingInfo__place">{`in ${workingAt}`}</span>
        </div>
        <p>{description}</p>
        <div className="ruling__actions">
          <div className="action__option">
            <Thumb type="up" size={22} onClick={() => {}} />
          </div>
          <div className="action__option">
            <Thumb type="down" size={22} onClick={() => {}} />
          </div>
          <div className="action__submit">
            <MainButton title="Vote Now" invert onClick={() => {}} />
          </div>
        </div>
      </div>
      <div className="ruling__summary">
        <RulingSummary thumbsUp={thumbsUp} thumbsDown={thumbsDown} />
      </div>
    </div>
  );
};

Ruling.propTypes = {
  ruling: PropTypes.shape({
    fullName: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    photoUrl: PropTypes.string.isRequired,
    workingSince: PropTypes.string.isRequired,
    workingAt: PropTypes.string.isRequired,
    thumbsDown: PropTypes.number.isRequired,
    thumbsUp: PropTypes.number.isRequired,
  }).isRequired,
};

export default Ruling;
