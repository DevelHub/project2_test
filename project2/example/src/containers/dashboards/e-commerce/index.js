import React, {PureComponent} from 'react';
import {Col, Container, Row} from 'reactstrap';
import {translate} from 'react-i18next';
import {connect} from 'react-redux';
import TotalProducts from './components/TotalProducts';
import TotalProfit from './components/TotalProfit';
import OrdersToday from './components/OrdersToday';
import Subscriptions from './components/Subscriptions';
import TopSellingProducts from './components/TopSellingProducts';
import BasicCard from './components/BasicCard';
import SalesStatistic from './components/SalesStatistic';
import RecentOrders from './components/RecentOrders';
import ProductSales from './components/ProductSales';
import NewOrders from './components/NewOrders';
import SalesStatistisBar from './components/SalesStatistisBar';
import MyTodos from './components/MyTodos';
import Emails from './components/Emails';
import SalesReport from './components/SalesReport';
import ShortReminders from './components/ShortReminders';
import {deleteNewOrderTableData} from '../../../redux/actions/newOrderTableActions';

class ECommerceDashboard extends PureComponent {

  onDeleteRow = (index, e) => {
    e.preventDefault();
    let arrayCopy = [...this.props.newOrder.items];
    arrayCopy.splice(index, 1);
    this.props.dispatch(deleteNewOrderTableData(arrayCopy));
  };

  render() {
    const {t, newOrder} = this.props;

    return (
      <Container className='dashboard'>
        <Row>
          <Col md={12}>
            <h3 className='page-title'>{t('dashboard_commerce.page_title')}</h3>
          </Col>
        </Row>
        <Row>
          <TotalProducts/>
          <TotalProfit/>
          <OrdersToday/>
          <Subscriptions/>
        </Row>
        <Row>
          <ProductSales/>
          <NewOrders newOrder={newOrder} onDeleteRow={this.onDeleteRow}/>
          <MyTodos/>
          <SalesStatistisBar/>
          <SalesReport/>
          <Emails/>
          <ShortReminders/>
          <TopSellingProducts/>
          <BasicCard/>
          <SalesStatistic/>
          <RecentOrders/>
        </Row>
      </Container>
    )
  }
}


export default connect(state => {
  return {newOrder: state.newOrder};
})(translate('common')(ECommerceDashboard));
