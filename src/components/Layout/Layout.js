import React, { Fragment, Component } from 'react';
import styles from './Layout.module.css';
import Toolbar from '../../UI/Toolbar/Toolbar';
import ToggleBtn from '../../UI/ToggleBtn/ToggleBtn';
import Menu from '../../UI/Menu/Menu';
import Backdrop from '../../UI/Backdrop/Backdrop';
import SideDrawer from '../../UI/SideDrawer/SideDrawer';

class Layout extends Component {
  state = {
    show: false
  }

  toggleMenuClass = () => {
    const currentState = this.state.show;
    this.setState({show: !currentState});
  }

  render() {
    return (
      <Fragment>
        <Backdrop clicked={this.toggleMenuClass} toggleClass={this.state.show} />
        <Menu clickedLink={this.toggleMenuClass} toggleClass={this.state.show} />
        <div className={styles.BodyContainer}>
          <div>
            <Toolbar />
            {this.props.children}
          </div>
          <SideDrawer />
        </div>
        <ToggleBtn clicked={this.toggleMenuClass} toggleClass={this.state.show} />
      </Fragment>
    );
  }
}

export default Layout;