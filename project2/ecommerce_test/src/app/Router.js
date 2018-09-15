import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Layout from '../containers/_layout';
import MainWrapper from './MainWrapper';

import LogIn from '../containers/log_in';
import {HomePage} from '../containers/home/home-page';
import {ItemsPage} from '../containers/items/items-page';
import {CompanyPage} from '../containers/company/company-page';
import {CustomerPage} from '../containers/customer/customer-page';
import {ProfilePage} from '../containers/profile/profile-page';
import { AdminHomePage } from '../containers/admin/admin-home-page';

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
    <Route path="/pages/home" component = {HomePage}/>
    <Route path="/pages/admin" component={AdminHomePage}/>
    <Route path="/pages/clothes" component={ItemsPage}/>
    <Route path="/pages/company" component={CompanyPage}/>
    <Route path="/pages/customer" component={CustomerPage}/>
    <Route path="/pages/profile" component={ProfilePage}/>
    <Route component={AdminHomePage}/>
  </Switch>
);

export default Router;
