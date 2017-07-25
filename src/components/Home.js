import React, { Component } from 'react';

import { Example } from '../containers';

class Home extends Component {
  render() {
    return (
      <div>
        <p>Home component</p>
        <Example />
      </div>
    );
  }
}

export default Home;
