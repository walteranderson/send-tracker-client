import React from 'react';
import Toolbar from 'react-md/lib/Toolbars';
import Button from 'react-md/lib/Buttons/Button';

const Layout = (props) => {
  const nav = <Button key='nav' icon>menu</Button>;

  return (
    <div>
      <Toolbar
        fixed
        colored
        title='Send Tracker'
        nav={nav} />
      <div>
        {props.children}
      </div>

    </div>
  );
};

export default Layout;
