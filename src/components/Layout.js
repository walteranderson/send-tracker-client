import React from 'react';
import { Link } from 'react-router-dom';

const Layout = (props) => {
  return (
    <div>
      <Link to='/'>Home</Link>&nbsp;
      <Link to='/about'>About</Link>

      <div>
        {props.children}
      </div>

      <hr />

      <p>footer example</p>
    </div>
  );
};

export default Layout;
