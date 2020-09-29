import React from 'react';
import Featured from '../components/Featured';
import ClosableInfo from '../components/ClosableInfo';
import Feed from '../components/Feed';
import Banner from '../components/common/Banner';

const Home = () => {
  return (
    <div>
      <Featured />
      <div className="main">
        <ClosableInfo />
        <Feed />
        <Banner />
      </div>
    </div>
  );
};

Home.propTypes = {};

export default Home;
