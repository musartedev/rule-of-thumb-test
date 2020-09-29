import React, { useEffect, useContext } from 'react';
import { getPreviousRulings, updateThumbs } from '../api';
import Featured from '../components/Featured';
import ClosableInfo from '../components/ClosableInfo';
import Feed from '../components/Feed';
import Banner from '../components/common/Banner';
import { RulingContext } from '../context/Ruling';

const Home = () => {
  const [rulings, setRulings] = useContext(RulingContext);

  const fetchRulings = async () => {
    const rulingsResponse = await getPreviousRulings();
    setRulings(rulingsResponse);
  };

  useEffect(() => {
    fetchRulings();
  }, []);

  const handleSubmitRuling = async (id, updatedThumbs) => {
    try {
      await updateThumbs(id, updatedThumbs);

      // It shouldn't refresh all rulings. I did this for timing ;)
      return fetchRulings();
    } catch (err) {
      console.log('handleSubmitRuling -> err', err);
      return err;
    }
  };

  return (
    <div>
      <Featured />
      <div className="main">
        <ClosableInfo />
        <Feed rulings={rulings} onSubmitRuling={handleSubmitRuling} />
        <Banner />
      </div>
    </div>
  );
};

Home.propTypes = {};

export default Home;
