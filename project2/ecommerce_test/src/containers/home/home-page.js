import * as React from 'react';
import { Col, Container, Row } from 'reactstrap';
import {TotalItems} from './compoents/TotalItems';
import {TotalUsers} from './components/TotalUsers';
import {TotalCompany} from './components/TotalCompany';
import {TotalItemsTable} from './components/TotalItemsTable';

export class HomePage extends React.PureComponent {
    render() {
        const { t } = this.props;

        return (
            <Container className='dashboard'>
                <Row>
                    <Col md={12}>
                        <h3>Welcome to JM-Terrely</h3>
                    </Col>
                </Row>

                <Row>

                    <TotalItems/>
                    <TotalUsers/>
                    <TotalCompany/>
                </Row>

                <Row>
                    <TotalItemsTable/>
                </Row>
                


            </Container>
                )
    }
}