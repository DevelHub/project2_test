import React, {Component} from 'react';
import {Col, Container, Row} from 'reactstrap';
import {OldCard} from './OldCard';


export class OldPage extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col md={12}>
            <h3 className='page-title'>OLD NAVY</h3>
            <h3 className='page-subhead subhead'>WELCOME TO OUR COMPANY PAGE</h3>
          </Col>
        </Row>
        <Row>
          
        </Row>
        <Row>
          <Col md={12}>
            <OldCard/>
            {/* <h3 className='page-title page-title--not-last'>Related Items</h3> */}
          </Col>
        </Row>
        <Row>
        
        </Row>
      </Container>
    )
  }
}