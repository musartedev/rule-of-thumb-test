import React, { useEffect, useState } from 'react';
import { getPreviousRulings } from '../api';
import Featured from '../components/Featured';
import ClosableInfo from '../components/ClosableInfo';
import Feed from '../components/Feed';
import Banner from '../components/common/Banner';

const Home = () => {
  const [rulings, setRulings] = useState([]);

  useEffect(() => {
    const fetchRulings = async () => {
      const rulingsResponse = await getPreviousRulings();
      setRulings(rulingsResponse);
    };

    fetchRulings();
  }, []);

  return (
    <div>
      <Featured />
      <div className="main">
        <ClosableInfo />
        <Feed rulings={rulings} />
        <Banner />
      </div>
    </div>
  );
};

Home.propTypes = {};

export default Home;
