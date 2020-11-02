import React, { Fragment } from 'react';
import Toolbar from '../../UI/Toolbar/Toolbar';
import ToggleBtn from '../../UI/ToggleBtn/ToggleBtn';

const Layout = (props) => (
  <Fragment>
    <Toolbar />
    {props.children}
    <ToggleBtn />
  </Fragment>
);

export default Layout;