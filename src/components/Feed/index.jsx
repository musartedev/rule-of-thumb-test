import React from 'react';
import Ruling from '../common/Ruling';

import './Feed.scss';

const Feed = ({ rulings }) => {
  return (
    <section className="feed">
      <h2>Previous Rulings</h2>
      <div className="feed__content">
        {rulings.map(ruling => (
          <Ruling key={ruling.id} ruling={ruling} />
        ))}
      </div>
    </section>
  );
};

export default Feed;
