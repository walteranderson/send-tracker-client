import React from 'react';
import {
  BrowserRouter,
  Route
} from 'react-router-dom';

import Layout from './components/Layout';
import { SessionPage } from './containers';


export default () => {
  return (
    <BrowserRouter>
      <Layout>
        <Route exact path='/' component={SessionPage} />
      </Layout>
    </BrowserRouter>
  );
};
