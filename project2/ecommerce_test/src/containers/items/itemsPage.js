import * as React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, CardDeck, Col,  Row } from 'reactstrap';
import store from '../../app/store';
import {connect} from 'react-redux';
import {App} from '../../app/App';
import {ItemRow, ItemListing, ItemTitle, ItemSubtitle, ItemImage, ItemDescription} from '../../components/item-listing/index';

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
        const data = this.props.productList;

        let rows = [];
        for(let i = 0; i < data.length; i++)
        {
            let listings = [];
            for(let r = 0; r < 3; r++)
            {
                if(i < data.length)
                {
                    let children = [];
                    children.push(<ItemTitle>{data[i].name}</ItemTitle>);
                    children.push(<ItemSubtitle>{data[i].company}</ItemSubtitle>);
                    children.push(<ItemImage src={data[i].image}/>);
                    children.push(<ItemDescription>{data[i].description}</ItemDescription>);
                    listings.push(<ItemListing  history={this.props.history}> {children} </ItemListing>)
                    i++;
                }
            }
            i--;
            rows.push(<ItemRow>{listings}</ItemRow>);
        }
        
        return(
            <div>
                {rows}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log("state passed into mapstatetoprops");
    console.log(state);
    return {productList: state.product.productList};
}
  
export default connect(mapStateToProps, null) (ItemsPage);