import React, {PureComponent, Component} from 'react';
import {Col, Container, Row} from 'reactstrap';
import {CartCard} from './components/CartCard';

export  class CartPage extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col md={12}>
            <h3 className='page-title'>Cart</h3>
          </Col>
        </Row>
        <Row>
          <CartCard/>
        </Row>
      </Container>
    )
  }
}