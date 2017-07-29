import React from 'react';
import {
  BrowserRouter,
  Route
} from 'react-router-dom';

import { Home, Layout } from './components';


export default () => {
  return (
    <BrowserRouter>
      <Layout>
        <Route exact path='/' component={Home} />
      </Layout>
    </BrowserRouter>
  );
};
