import React from 'react';
import { Link } from 'react-router-dom';

const Layout = (props) => {
  return (
    <div>
      <Link to='/'>Home</Link>&nbsp;
      <Link to='/about'>About</Link>

      {props.children}

      <hr />

      <p>footer example</p>
    </div>
  );
};

export default Layout;
