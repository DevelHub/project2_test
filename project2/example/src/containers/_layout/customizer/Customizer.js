import React, {PureComponent} from 'react';
import classNames from 'classnames';
import CloseIcon from 'mdi-react/CloseIcon';
import PropTypes from 'prop-types';
import ToggleTheme from './ToggleTheme';
import ToggleCollapsedMenu from './ToggleCollapsedMenu';
import ToggleSquared from './ToggleSquared';
import ToggleShadow from './ToggleShadow';
import ToggleTopMenu from './ToggleTopMenu';

const settings = process.env.PUBLIC_URL + '/img/settings.svg';


export default class Customizer extends PureComponent {
  static propTypes = {
    customizer: PropTypes.object.isRequired,
    sidebar: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
    changeSidebarVisibility: PropTypes.func,
    toggleTopNavigation: PropTypes.func,
    changeToDark: PropTypes.func,
    changeToLight: PropTypes.func,
    changeBorderRadius: PropTypes.func,
    toggleBoxShadow: PropTypes.func,
  };

  state = {
    open: false
  };
  
  handleOpen = () => {
    this.setState({open: !this.state.open})
  };
  
  render() {
    let customizerClass = classNames({
      'customizer__wrap': true,
      'customizer__wrap--open': this.state.open
    });

    let {
      changeSidebarVisibility,
      sidebar,
      customizer,
      theme,
      toggleTopNavigation,
      changeToDark,
      changeToLight,
      changeBorderRadius,
      toggleBoxShadow,
    } = this.props;
    
    return (
      <div className='customizer'>
        <button className='customizer__btn' onClick={this.handleOpen}>
          <img className='customizer__btn-icon' src={settings} alt='icon'/>
        </button>
        <div className={customizerClass}>
          <div className='customizer__title-wrap'>
            <h5>Theme Customizer</h5>
            <button className='customizer__close-btn' onClick={this.handleOpen}>
              <CloseIcon/>
            </button>
          </div>
          <p className='customizer__caption'>This customizer allows you to see the different variations of the EasyDev.
            Create your own visual style for every project you do!</p>
          <ToggleCollapsedMenu changeSidebarVisibility={changeSidebarVisibility} sidebar={sidebar}/>
          <ToggleTopMenu toggleTopNavigation={toggleTopNavigation} customizer={customizer}/>
          <ToggleTheme changeToDark={changeToDark} changeToLight={changeToLight} theme={theme}/>
          <ToggleSquared customizer={customizer} changeBorderRadius={changeBorderRadius}/>
          <ToggleShadow customizer={customizer} toggleBoxShadow={toggleBoxShadow}/>
        </div>
      </div>
    )
  }
}