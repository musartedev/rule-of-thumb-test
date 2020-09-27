import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Featured from './Featured';

import '../styles/App.scss';

const App = () => (
  <div className="layout">
    <Header />
    <Featured />
    <Footer />
  </div>
);

export default App;
