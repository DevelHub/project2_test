import * as React from 'react';
import { Col, Container, Row } from 'reactstrap';
import {TotalItems} from '../admin/components/TotalItems';
import { TotalSubscribers } from '../admin/components/TotalSubscribers';

export class CompanyPage extends React.PureComponent
{
    render() {
        const { t } = this.props;

        return (
            <Container className='dashboard'>
                <Row>
                    <Col md={12}>
                        <h3>Welcome to company Page</h3>
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