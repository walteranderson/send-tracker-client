import React from 'react';
import {
  BrowserRouter,
  Route
} from 'react-router-dom';

import {
  Home,
  About,
  Layout
} from './components';


export default () => {
  return (
    <BrowserRouter>
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
      </Layout>
    </BrowserRouter>
  );
};
