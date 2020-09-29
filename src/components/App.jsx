import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Featured from './Featured';
import ClosableInfo from './ClosableInfo';
import Feed from './Feed';
import Banner from './common/Banner';

import '../styles/App.scss';

const App = () => (
  <div className="layout">
    <Header />
    <div>
      <Featured />
      <div className="main">
        <ClosableInfo />
        <Feed />
        <Banner />
      </div>
    </div>
    <Footer />
  </div>
);

export default App;
