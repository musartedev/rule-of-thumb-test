import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Thumb from '../Thumb';
import MainButton from '../MainButton';
import RulingSummary from '../RulingSummary';

import './Ruling.scss';

const Ruling = ({
  ruling: {
    id,
    fullName,
    description,
    photoUrl,
    workingSince,
    workingAt,
    thumbsDown,
    thumbsUp,
  },
  onSubmit,
}) => {
  const [selected, setSelected] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleOnClickThumbUp = () => setSelected('up');

  const handleOnClickThumbDown = () => setSelected('down');

  const handleSubmit = () => {
    const updatedThumb =
      selected === 'up'
        ? { thumbsUp: thumbsUp + 1 }
        : { thumbsDown: thumbsDown + 1 };

    onSubmit(id, updatedThumb);
    setSubmitted(true);
    setSelected(null);
  };

  const renderActionContent = () => {
    if (!submitted) {
      return (
        <>
          <div className="action__option">
            <Thumb type="up" size={22} onClick={handleOnClickThumbUp} />
          </div>
          <div className="action__option">
            <Thumb type="down" size={22} onClick={handleOnClickThumbDown} />
          </div>
          <div className="action__submit">
            <MainButton
              disabled={selected === null}
              title="Vote Now"
              invert
              onClick={handleSubmit}
            />
          </div>
        </>
      );
    }

    return (
      <div className="action__submit">
        <MainButton
          title="Vote Again"
          invert
          onClick={() => setSubmitted(false)}
        />
      </div>
    );
  };

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
        <p>{!submitted ? description : 'Thanks for voting!'}</p>
        <div className="ruling__actions">{renderActionContent()}</div>
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
  onSubmit: PropTypes.func.isRequired,
};

export default Ruling;
