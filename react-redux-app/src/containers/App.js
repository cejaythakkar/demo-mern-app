import React from 'react';
import { BrowserRouter as Router, NavLink, Route } from 'react-router-dom'
import './App.scss';
import Header from '../components/common/header';
import Body from '../components/common/body';
import Footer from '../components/common/footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Body />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
