import React, { Component } from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import Table from '../../components/table/Table'
import DeleteForeverIcon from 'mdi-react/DeleteForeverIcon';
import { ItemCard, ItemRow, ItemListing, ItemTitle, ItemSubtitle, ItemImage, ItemDescription } from '../../components/item-listing/index';
import store from '../../app/store';
import * as Actions from '../../redux/actions/productActions';


let customerId = 0;
let data = [];
let cart;
let totalPrice = 0;
let isGuest = false;
let userId;
let user = JSON.parse(localStorage.getItem('user'));



if (!localStorage.getItem('user')) {
    isGuest = true;
    console.log('it is guest');
}
else {
    console.log('pased');
    customerId = JSON.parse(localStorage.getItem('user'));
    userId = customerId[0].customer.id;
    console.log(`customer id = ${userId}`);
}



export class RecommendCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
        };

         this.listingClicked = this.listingClicked.bind(this);

    }

    listingClicked(item)
    {
        store.dispatch(Actions.setCurrentProduct(item));
        this.props.history.push("/pages/clothes/product");
    }



    componentDidMount() {
        setTimeout(() => {
            fetch(`http://ec2-54-200-103-68.us-west-2.compute.amazonaws.com:3001/purchase/recomendation/${userId}`, {
                // fetch('http://localhost:3001/cart/get/2',{
                headers: {
                    "Content-Type": "application/json"
                },
                method: "GET"
            })
                .then(resp => resp.json())
                .then(resp => {
                    console.log(resp[0][0]);
                    this.setState({
                        data: resp
                    })
                });//end fetch
        }, 150);
    }


    render() {
        
        const data = this.state.data;
        let rows =[];

        if(data.length != 0)
        {
            console.log(data);
            console.log(data[0][0]);

            for (let i = 0; i < data.length; i++) {
                console.log('gothere');

                let listings = [];
                for (let r = 0; r < 3; r++) {
                    if (i < data[0].length) {
                        let item = {
                            itemId: data[0][i].id,
                            name: data[0][i].name,
                            company: data[0][i].company,
                            description: data[0][i].description,
                            price: data[0][i].price,
                            gender: data[0][i].gender,
                            type: data[0][i].type,
                            status: data[0][i].status
                        }
                        let children = [];
                        children.push(<ItemTitle>{item.name}</ItemTitle>);
                        children.push(<ItemSubtitle>{item.company.companyName}</ItemSubtitle>);
                        children.push(<ItemImage type={item.type} gender={item.gender}/>);
                        children.push(<ItemDescription>{item.description}</ItemDescription>);
                        listings.push(<ItemListing clicked={this.listingClicked} currentProduct={item}> {children} </ItemListing>)
                        i++;
                    }
                }

                i--;
                rows.push(<ItemRow>{listings}</ItemRow>);
            }
        }
        


        return (
            <div>{rows}</div>
        )
    }
}

