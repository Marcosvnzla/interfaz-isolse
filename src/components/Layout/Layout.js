import React, { Fragment, Component } from 'react';
import Toolbar from '../../UI/Toolbar/Toolbar';
import ToggleBtn from '../../UI/ToggleBtn/ToggleBtn';
import Menu from '../../UI/Menu/Menu';
import Backdrop from '../../UI/Backdrop/Backdrop';

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
        <Toolbar />
        <ToggleBtn clicked={this.toggleMenuClass} toggleClass={this.state.show} />
        <Menu clickedLink={this.toggleMenuClass} toggleClass={this.state.show} />
        {this.props.children}
      </Fragment>
    );
  }
}

export default Layout;