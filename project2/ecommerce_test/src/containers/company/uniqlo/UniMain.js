import React, {Component} from 'react';
import {Col, Container, Row} from 'reactstrap';
import {UniCard} from './UniCard';


export class UniPage extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col md={12}>
            <h3 className='page-title'>UNI-QLO</h3>
            <h3 className='page-subhead subhead'>WELCOME TO OUR COMPANY PAGE</h3>
          </Col>
        </Row>
        <Row>
          
        </Row>
        <Row>
          <Col md={12}>
            <UniCard/>
            {/* <h3 className='page-title page-title--not-last'>Related Items</h3> */}
          </Col>
        </Row>
        <Row>
        
        </Row>
      </Container>
    )
  }
}