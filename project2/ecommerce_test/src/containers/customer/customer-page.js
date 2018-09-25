import * as React from 'react';
import { Col, Container, Row } from 'reactstrap';
import {CompanyPage} from '../company/company-page';
import {CarouselPage} from '../../components/carousel/CarouselPage';
// import {CartCard} from '../cart/components/CartCard';
import { TotalItems } from '../../components/charts/TotalItems';
import { CartHistory } from '../cart/components/CartHistory';
import { PreviousPurchases } from '../profile/previousPurchases';

export class CustomerPage extends React.Component {
    render() {
        return (
            <Container className='dashboard'>
               
                <CarouselPage/>
                <Row>
                    <Col md={12}>
                        <h2 id="header-company">Welcome to Customer Page</h2>
                   
                
                    </Col>
                </Row>

                <Row>
                    <Col md={12}>
                    {/* <h4>Current Cart</h4>
                    <br></br>
                    <CartCard /> */}

                    <h4>Purchase History</h4>
                    <br></br>
                    {/* <CartHistory /> */}
                    <PreviousPurchases/>

                    <h4>Total items for each company</h4>
                    <TotalItems/>

                    </Col>
                    
                </Row>

                <Row>
                    {/* <TotalItemsTable/> */}
                </Row>



            </Container>
        )
    }
}