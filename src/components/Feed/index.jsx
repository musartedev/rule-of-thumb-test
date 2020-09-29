import React from 'react';
import PropTypes from 'prop-types';
import Ruling from '../common/Ruling';

import './Feed.scss';

const Feed = ({ rulings, onSubmitRuling }) => {
  return (
    <section className="feed">
      <h2>Previous Rulings</h2>
      <div className="feed__content">
        {rulings &&
          rulings.map(ruling => (
            <Ruling key={ruling.id} ruling={ruling} onSubmit={onSubmitRuling} />
          ))}
      </div>
    </section>
  );
};
Feed.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  rulings: PropTypes.array.isRequired,
  onSubmitRuling: PropTypes.func.isRequired,
};
export default Feed;
