import React, {Component} from 'react';
import {Col, Container, Row} from 'reactstrap';
import {HmCard} from './HmCard';


export class HmPage extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col md={12}>
            <h3 className='page-title'>H&M</h3>
            <h3 className='page-subhead subhead'>WELCOME TO OUR COMPANY PAGE</h3>
          </Col>
        </Row>
        <Row>
          
        </Row>
        <Row>
          <Col md={12}>
            <HmCard/>
            {/* <h3 className='page-title page-title--not-last'>Related Items</h3> */}
          </Col>
        </Row>
        <Row>
        
        </Row>
      </Container>
    )
  }
}