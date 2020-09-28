import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Featured from './Featured';
import ClosableInfo from './ClosableInfo';

import '../styles/App.scss';

const App = () => (
  <div className="layout">
    <Header />
    <div>
      <Featured />
      <div className="main">
        <ClosableInfo />
      </div>
    </div>
    <Footer />
  </div>
);

export default App;
