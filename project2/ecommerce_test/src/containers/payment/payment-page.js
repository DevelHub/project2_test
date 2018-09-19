import React, { Component} from 'react';
import {Col, Container, Row} from 'reactstrap';
import {PaymentCard} from './components/PaymentCard';


export class PaymentPage extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col md={12}>
            <h3 className='page-title'>Payment Page</h3>
          </Col>
        </Row>
        <Row>
          <PaymentCard/>
        </Row>
      </Container>
    )
  }
}