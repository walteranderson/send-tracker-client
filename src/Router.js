import React from 'react';
import {
  BrowserRouter,
  Route
} from 'react-router-dom';

import Layout from './components/Layout';
import { SessionPage } from './containers';
import HomePage from './components/HomePage';


export default () => {
  return (
    <BrowserRouter>
      <Layout>
        <Route exact path='/' component={HomePage} />
        <Route path='/dashboard' component={SessionPage} />
      </Layout>
    </BrowserRouter>
  );
};
