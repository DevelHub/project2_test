import React, {Component} from 'react';
import Topbar from './topbar/Topbar';
import Sidebar from './sidebar/Sidebar';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {changeThemeToDark, changeThemeToLight} from '../../redux/actions/themeActions';
import {changeMobileSidebarVisibility, changeSidebarVisibility} from '../../redux/actions/sidebarActions';

class Layout extends Component {

  changeSidebarVisibility = () => {
    this.props.dispatch(changeSidebarVisibility());
  };

  changeMobileSidebarVisibility = () => {
    this.props.dispatch(changeMobileSidebarVisibility());
  };

  changeToDark = () => {
    this.props.dispatch(changeThemeToDark());
  };

  changeToLight = () => {
    this.props.dispatch(changeThemeToLight());
  };

  render() {
    return (
      <div>
        <Topbar
          changeMobileSidebarVisibility={this.changeMobileSidebarVisibility}
          changeSidebarVisibility={this.changeSidebarVisibility}
        />
        <Sidebar
          sidebar={this.props.sidebar}
          changeToDark={this.changeToDark}
          changeToLight={this.changeToLight}
          changeMobileSidebarVisibility={this.changeMobileSidebarVisibility}
        />
      </div>
    )
  }
}

export default withRouter(connect(state => {
  return {sidebar: state.sidebar};
})(Layout));