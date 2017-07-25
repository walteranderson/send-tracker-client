import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import {
  Home,
  About,
  Layout
} from './components';


export default () => {
  return (
    <Router>
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
      </Layout>
    </Router>
  );
};
