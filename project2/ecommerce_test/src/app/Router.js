import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Layout from '../containers/_layout';
import MainWrapper from './MainWrapper';

import LogIn from '../containers/log_in';
import {HomePage} from '../containers/home/home-page';
import {ItemsPage} from '../containers/items/items-page';

const Router = () => (
  <MainWrapper>
    <main>
      <Switch>
        <Route exact path='/log_in' component={LogIn}/>
        <Route component={wrappedRoutes}/>
      </Switch>
    </main>
  </MainWrapper>
);

const wrappedRoutes = () => (
  <div>
    <Layout/>
    <div className='container_wrap'>
      <Switch>
        <Route path='/pages' component={Pages}/>
        <Route component={Pages}/>
      </Switch>
    </div>
  </div>
);

const Pages = () => (
  <Switch>
    <Route path="/pages/home" component={HomePage}/>
    <Route path="/pages/clothes" component={ItemsPage}/>
    <Route component={HomePage}/>
  </Switch>
);

export default Router;
