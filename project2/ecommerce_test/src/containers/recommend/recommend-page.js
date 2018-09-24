import React, {PureComponent, Component} from 'react';
import {Col, Container, Row} from 'reactstrap';
import {RecommendCard} from './RecommendCard';


export  class RecommendPage extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col md={12}>
            <h2 className='page-title'>RECOMMENDED ITEMS</h2>
          </Col>
        </Row>
            <RecommendCard history={this.props.history}/>
        <Row>
        </Row>
      </Container>
    )
  }
}