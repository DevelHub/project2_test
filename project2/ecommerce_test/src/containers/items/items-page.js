import * as React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, CardDeck, Col,  Row } from 'reactstrap';
import './items-style.css';
import store from '../../app/store';
import {connect} from 'react-redux';
import {App} from '../../app/App';

// interface Item
// {
//     name: string,
    
// }
// interface ItemsData
// {

// }
export class ItemsPage extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        let cards = [];
        const items = this.props;
        console.log("store state from items page:");
        console.log(store.getState());
        console.log("items:");
        console.log(items);
        return(
            <div className="testDiv">
                <Row>
                    <Col sm="4">
                        <Card>
                            <CardBody>
                            <CardTitle>Trendy T-Shirt</CardTitle>
                            <CardSubtitle>TheClothesCompany</CardSubtitle>
                            <CardImg src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap"/>
                            <CardText>This is an excellent description of this amazing t-shirt made by the one and only TheClothesCompany</CardText>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm="4">
                        <Card>
                            <CardBody>
                            <CardTitle>Trendy T-Shirt</CardTitle>
                            <CardSubtitle>TheClothesCompany</CardSubtitle>
                            <CardImg src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap"/>
                            <CardText>This is an excellent description of this amazing t-shirt made by the one and only TheClothesCompany</CardText>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm="4">
                        <Card>
                            <CardBody>
                            <CardTitle>Trendy T-Shirt</CardTitle>
                            <CardSubtitle>TheClothesCompany</CardSubtitle>
                            <CardImg src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap"/>
                            <CardText>This is an excellent description of this amazing t-shirt made by the one and only TheClothesCompany</CardText>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col sm="4">
                        <Card>
                            <CardBody>
                            <CardTitle>Trendy T-Shirt</CardTitle>
                            <CardSubtitle>TheClothesCompany</CardSubtitle>
                            <CardImg src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap"/>
                            <CardText>This is an excellent description of this amazing t-shirt made by the one and only TheClothesCompany</CardText>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm="4">
                        <Card>
                            <CardBody>
                            <CardTitle>Trendy T-Shirt</CardTitle>
                            <CardSubtitle>TheClothesCompany</CardSubtitle>
                            <CardImg src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap"/>
                            <CardText>This is an excellent description of this amazing t-shirt made by the one and only TheClothesCompany</CardText>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm="4">
                        <Card>
                            <CardBody>
                            <CardTitle>Trendy T-Shirt</CardTitle>
                            <CardSubtitle>TheClothesCompany</CardSubtitle>
                            <CardImg src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap"/>
                            <CardText>This is an excellent description of this amazing t-shirt made by the one and only TheClothesCompany</CardText>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col sm="4">
                        <Card>
                            <CardBody>
                            <CardTitle>Trendy T-Shirt</CardTitle>
                            <CardSubtitle>TheClothesCompany</CardSubtitle>
                            <CardImg src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap"/>
                            <CardText>This is an excellent description of this amazing t-shirt made by the one and only TheClothesCompany</CardText>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm="4">
                        <Card>
                            <CardBody>
                            <CardTitle>Trendy T-Shirt</CardTitle>
                            <CardSubtitle>TheClothesCompany</CardSubtitle>
                            <CardImg src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap"/>
                            <CardText>This is an excellent description of this amazing t-shirt made by the one and only TheClothesCompany</CardText>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm="4">
                        <Card>
                            <CardBody>
                            <CardTitle>Trendy T-Shirt</CardTitle>
                            <CardSubtitle>TheClothesCompany</CardSubtitle>
                            <CardImg src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap"/>
                            <CardText>This is an excellent description of this amazing t-shirt made by the one and only TheClothesCompany</CardText>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col sm="4">
                        <Card>
                            <CardBody>
                            <CardTitle>Trendy T-Shirt</CardTitle>
                            <CardSubtitle>TheClothesCompany</CardSubtitle>
                            <CardImg src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap"/>
                            <CardText>This is an excellent description of this amazing t-shirt made by the one and only TheClothesCompany</CardText>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm="4">
                        <Card>
                            <CardBody>
                            <CardTitle>Trendy T-Shirt</CardTitle>
                            <CardSubtitle>TheClothesCompany</CardSubtitle>
                            <CardImg src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap"/>
                            <CardText>This is an excellent description of this amazing t-shirt made by the one and only TheClothesCompany</CardText>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm="4">
                        <Card>
                            <CardBody>
                            <CardTitle>Trendy T-Shirt</CardTitle>
                            <CardSubtitle>TheClothesCompany</CardSubtitle>
                            <CardImg src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap"/>
                            <CardText>This is an excellent description of this amazing t-shirt made by the one and only TheClothesCompany</CardText>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log("state from mapstatetoprops");
    console.log(state);
    alert("map state to props was called");
    return {items: state};
}
  
export default connect(mapStateToProps, null) (ItemsPage);