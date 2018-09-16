import * as React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, CardDeck, Col,  Row } from 'reactstrap';
import './items-style.css';
import store from '../../app/store';
import {connect} from 'react-redux';
import {App} from '../../app/App';
import {ItemListing, ItemTitle, ItemSubtitle, ItemImage, ItemDescription} from '../../components/item-listing/index';

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
            <ItemListing>
                <ItemTitle>A Really Cool Hat</ItemTitle>
                <ItemSubtitle>The Mad Hatter</ItemSubtitle>
                <ItemDescription>A really well made hat. Its good. Buy it. Really, you should</ItemDescription>
            </ItemListing>
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