import * as React from 'react';
import { Col, Container, Row } from 'reactstrap';
import {TotalItems} from '../../components/charts/TotalItems';
import { TotalSubscribers } from '../../components/charts/TotalSubscribers';
// import { TotalItemsTable } from './components/TotalItemsTable';


export class AdminHomePage extends React.PureComponent {
    render() {
        const { t } = this.props;

        return (
            <Container className='dashboard'>
                <Row>
                    <Col md={12}>
                        <h3>Welcome to Admin Page</h3>
                    </Col>
                </Row>

                <Row>
                    <TotalSubscribers />
                    <TotalItems />

                </Row>

                <Row>
                    {/* <TotalItemsTable/> */}
                </Row>



            </Container>
        )
    }
}