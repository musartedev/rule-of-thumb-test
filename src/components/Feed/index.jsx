import React from 'react';
import Ruling from '../common/Ruling';

import './Feed.scss';

const rulings = [
  {
    id: 1,
    fullName: 'Kanye West',
    description:
      'Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.',
    photoUrl: 'https://i.ibb.co/hYRJM0W/Layer-13.jpg',
    workingSince: '1 month ago',
    workingAt: 'Entertaiment',
    thumbsUp: 55,
    thumbsDown: 22,
  },
  {
    id: 2,
    fullName: 'Cristina Fernández de Kirchner',
    description:
      'Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.',
    photoUrl: 'https://i.ibb.co/hYRJM0W/Layer-13.jpg',
    workingSince: '1 month ago',
    workingAt: 'Entertaiment',
    thumbsUp: 23,
    thumbsDown: 22,
  },
  {
    id: 3,
    fullName: 'Kanye West',
    description:
      'Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.',
    photoUrl: 'https://i.ibb.co/hYRJM0W/Layer-13.jpg',
    workingSince: '1 month ago',
    workingAt: 'Entertaiment',
    thumbsUp: 23,
    thumbsDown: 22,
  },
  {
    id: 4,
    fullName: 'Kanye West',
    description:
      'Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.',
    photoUrl: 'https://i.ibb.co/hYRJM0W/Layer-13.jpg',
    workingSince: '1 month ago',
    workingAt: 'Entertaiment',
    thumbsUp: 23,
    thumbsDown: 22,
  },
];

const Feed = () => {
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
