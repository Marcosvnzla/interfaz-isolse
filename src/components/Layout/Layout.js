import React, { Fragment } from 'react';

import Toolbar from '../../UI/Toolbar/Toolbar';

const Layout = (props) => (
  <Fragment>
    <Toolbar />
    {props.children}
  </Fragment>
);

export default Layout;