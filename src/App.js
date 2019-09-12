import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import './assets/css/bootstrap.min.css'
import Navbar from './layout/Navbar';
import Index from './layout/Index';
import Create from './layout/Create';

function App() {
  return (
    <BrowserRouter>
      < Navbar />
      <Route exact path="/" component={Index} />
      <Route exact path="/create" component={Create} />
    </BrowserRouter>
  );
}

export default connect()(App);