import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

const icon = process.env.PUBLIC_URL + '/img/burger.svg';

class TopbarSidebarButton extends PureComponent {
  static propTypes = {
    changeMobileSidebarVisibility: PropTypes.func,
    changeSidebarVisibility: PropTypes.func,
  };

  render() {
    let {changeMobileSidebarVisibility, changeSidebarVisibility} = this.props;

    return (
      <div>
        <button className='topbar_button topbar_button--desktop' onClick={changeSidebarVisibility}>
          <img src={icon} alt='' className='topbar_button-icon'/>
        </button>
        <button className='topbar_button topbar_button--mobile' onClick={changeMobileSidebarVisibility}>
          <img src={icon} alt='' className='topbar_button-icon'/>
        </button>
      </div>
    )
  }
}

export default TopbarSidebarButton;
