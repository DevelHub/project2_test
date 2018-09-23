import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Layout from '../containers/_layout';
import MainWrapper from './MainWrapper';

import LogIn from '../containers/log_in';
import {HomePage} from '../containers/home/home-page';
import ItemsPage from '../containers/items/itemsPage';
import {CompanyPage} from '../containers/company/company-page';
import {CustomerPage} from '../containers/customer/customer-page';
import {ProfilePage} from '../containers/profile/profile-page';
import { AdminHomePage } from '../containers/admin/admin-home-page';
import {CartPage} from '../containers/cart/cart-page';
import {PaymentPage} from '../containers/payment/payment-page';
import {RegisterPage} from '../containers/register/register-page';
import {Wishlist} from '../containers/wishlist/wishlist';
import {RegisterItem} from '../containers/registerItem/registerItem';
import ItemViewController from '../containers/items/itemViewController';
import {UniPage} from '../containers/company/uniqlo/UniMain';
import {OldPage} from '../containers/company/oldnavy/OldMain';
import {ZaraPage} from '../containers/company/zara/ZaraMain';
import {BananaPage} from '../containers/company/banana/BananaMain';
import { ForeverPage } from '../containers/company/forever21/ForeverMain';
import { HmPage } from '../containers/company/hm/HmMain';
import { RecommendPage } from '../containers/recommend/recommend-page';





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
    <Route path="/pages/clothes/product" component={ItemViewController}/>
    <Route path="/pages/clothes" component={ItemsPage}/>
    <Route path="/pages/company" component={CompanyPage}/>
    <Route path="/pages/customer" component={CustomerPage}/>
    <Route path="/pages/profile" component={ProfilePage}/>
    <Route path="/pages/cart" component={CartPage}/>
    <Route path="/pages/payment" component={PaymentPage}/>  
    <Route path="/pages/register" component={RegisterPage}/>
    <Route path="/pages/wishlist" component={Wishlist}/>
    <Route path="/pages/register-item" component={RegisterItem}/>
    <Route path="/pages/uniqlo" component={UniPage}/>
    <Route path="/pages/old_navy" component={OldPage}/>
    <Route path="/pages/forever21" component={ForeverPage}/>
    <Route path="/pages/zara" component={ZaraPage}/>
    <Route path="/pages/hm" component={HmPage}/>
    <Route path="/pages/banana_republic" component={BananaPage}/>
    <Route path="/pages/recommend" component={RecommendPage}/>
    <Route component={HomePage}/>
  </Switch>
);



export default Router;
