import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { RulingContextProvider } from '../context/Ruling';
import Router from '../router';
import Header from './Header';
import Footer from './Footer';

import '../styles/App.scss';

const App = () => (
  <RulingContextProvider>
    <BrowserRouter>
      <div className="layout">
        <Header />
        <Router />
        <Footer />
      </div>
    </BrowserRouter>
  </RulingContextProvider>
);

export default App;
