import React from 'react';
import Header from './Header';
import Footer from './Footer';

import '../styles/App.scss';

const App = () => (
  <div className="layout">
    <Header />
    <div>Content</div>
    <Footer />
  </div>
);

export default App;
