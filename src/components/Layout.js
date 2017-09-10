import React, { Component } from 'react';
import Toolbar from 'react-md/lib/Toolbars';
import Button from 'react-md/lib/Buttons/Button';
import Drawer from 'react-md/lib/Drawers';

class Layout extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      drawerVisibility: false
    };
  }
  
  onVisibilityChange = (drawerVisibility) => {
    this.setState({
      drawerVisibility
    });
  }

  render() {
    const nav = <Button onClick={() => this.onVisibilityChange(true)} key='nav' icon>menu</Button>;
    const { drawerVisibility } = this.state;
    const { children } = this.props;

    return (
      <div>
        <Toolbar
          fixed
          title='Send Tracker'
          style={{ boxShadow: 'none' }}
          nav={nav} />
        <Drawer
          id='navigation-menu'
          position='left'
          visible={drawerVisibility}
          type={Drawer.DrawerTypes.TEMPORARY} 
          onVisibilityChange={this.onVisibilityChange}
        />

        <div>
          {children}
        </div>

      </div>
    );
  }
};

export default Layout;
