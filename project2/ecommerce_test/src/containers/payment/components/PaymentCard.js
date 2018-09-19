import React, {Component} from 'react';
import {Card, CardBody, Col} from 'reactstrap';
import PaymentForm from './PaymentForm';

export class PaymentCard extends Component {
  render() {
    return (
      <Col md={12} lg={12}>
        <Card>
          <CardBody>
            <div className='card_title'>
              <h5 className='bold-text'>Payment</h5>
            </div>
            <div className='payment'>
              <PaymentForm onSubmit/>
            </div>
          </CardBody>
        </Card>
      </Col>
    )
  }
}

