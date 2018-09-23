import React, {Component} from 'react';
//React Hot Loader is a plugin that allows React components to be live reloaded without the loss of state. 
import {hot} from 'react-hot-loader';
import 'bootstrap/dist/css/bootstrap.css'
import '../scss/app.scss';
import Router from './Router';
import store from './store';
import { setCurrentProduct, setProductList, setAllProducts, setTypesList } from '../redux/actions/productActions';

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
    this.fetchAllGroupedByType();
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

  fetchAllGroupedByType()
  {
    fetch("http://ec2-54-200-103-68.us-west-2.compute.amazonaws.com:3001/item-type", {
      headers: {
        "Content-Type":"application/json"
      },
      method: "GET"
    })
    .then(resp => {
      if(resp.status == 200)
      {
        return resp.json();
      }
      throw Error("Could not retrieve item groups");
    })
    .then(rawItems => {
      let formattedItems = {};
      let typesList = [];
      for(let t = 0; t < rawItems.length; t++)
      {
        const type = rawItems[t].type;
        typesList.push(type);
        formattedItems[type] = [];
        for(let i = 0; i < rawItems[t].item.length; i++)
        {
          let item = {};
          const ci = rawItems[t].item[i];
          item["name"] = ci.name;
          item["company"] = ci.company.companyName;
          item["description"] = ci.description;
          item["gender"] = ci.gender;
          item["price"] = ci.price;
          item["status"] = ci.status;
          formattedItems[type].push(item);
        }
      }
      store.dispatch(setAllProducts(formattedItems));
      store.dispatch(setTypesList(typesList));
    })    
  }
}



export default hot(module)(App)
