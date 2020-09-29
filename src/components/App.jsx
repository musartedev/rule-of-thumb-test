import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from '../router';
import Header from './Header';
import Footer from './Footer';

import '../styles/App.scss';

const App = () => (
  <BrowserRouter>
    <div className="layout">
      <Header />
      <Router />
      <Footer />
    </div>
  </BrowserRouter>
);

export default App;
