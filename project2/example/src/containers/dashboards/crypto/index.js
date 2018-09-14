import React, {PureComponent} from 'react';
import {Col, Container, Row} from 'reactstrap';
import BTC from './components/BTC';
import ETH from './components/ETH';
import BCH from './components/BCH';
import XRP from './components/XRP';
import TradeHistory from './components/TradeHistory';
import BtcEth from './components/BtcEth';
import CryptotrendsToday from './components/CryptotrendsToday';
import TopTen from './components/TopTen';
import PlaceOrder from './components/PlaceOrder';
import {translate} from 'react-i18next';
import {connect} from 'react-redux';
import {deleteCryptoTableData} from '../../../redux/actions/cryptoTableActions';

class CryptoDashboard extends PureComponent {

  onDeleteCryptoTableData = (index, e) => {
    e.preventDefault();
    let arrayCopy = [...this.props.cryptoTable.items];
    arrayCopy.splice(index, 1);
    this.props.dispatch(deleteCryptoTableData(arrayCopy));
  };

  render() {
    const {t} = this.props;

    return (
      <Container className='dashboard'>
        <Row>
          <Col md={12}>
            <h3 className='page-title'>{t('dashboard_crypto.page_title')}</h3>
          </Col>
        </Row>
        <Row>
          <BTC/>
          <ETH/>
          <BCH/>
          <XRP/>
        </Row>
        <Row>
          <TradeHistory/>
          <BtcEth/>
          <CryptotrendsToday/>
          <PlaceOrder/>
          <TopTen cryptoTable={this.props.cryptoTable} onDeleteCryptoTableData={this.onDeleteCryptoTableData}/>
        </Row>
      </Container>
    )
  }
}

export default connect(state => {
  return {cryptoTable: state.cryptoTable};
})(translate('common')(CryptoDashboard));
