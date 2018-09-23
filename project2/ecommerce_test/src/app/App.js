import React, {Component} from 'react';
//React Hot Loader is a plugin that allows React components to be live reloaded without the loss of state. 
import {hot} from 'react-hot-loader';
import 'bootstrap/dist/css/bootstrap.css'
import '../scss/app.scss';
import Router from './Router';
import * as Data from './item-data';

let isGuest = false;

if(!localStorage.getItem('user')){
  isGuest = true;
}
else{
  isGuest = false;
 
}
let userStore = JSON.parse(localStorage.getItem('user'));

class App extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      loaded: false
    }
    Data.fetchItems();
  }
  
  componentDidMount() {
    window.addEventListener('load', () => {
      this.setState({loading: false});
      setTimeout(() => this.setState({loaded: true}), 500);
    });

    // const stateString = localStorage.getItem("state"); 
    // console.log("state string from localstorage");
    // console.log(stateString);
    // const state = JSON.parse(stateString);
    // if(state)
    // {
    //   store.setState(state);
    // }
  }
  
  render() {
    const loaded = this.state.loaded;
    return (
      <div>
        {!loaded && <div className={`load${this.state.loading ? '' : ' loaded'}`}>
          <div className='load_icon-wrap'>
            <svg className='load_icon'>
              <path fill='#4ce1b6' d='M12,4V2A10,10 0 0,0 2,12H4A8,8 0 0,1 12,4Z'/>
            </svg>
          </div>
        </div>}
        <div>
          <Router/>
        </div>
      </div>
    )
  }
}

export default hot(module)(App)
