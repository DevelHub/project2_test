import React, { Component } from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import Table from '../../../components/table/Table';
import DeleteForeverIcon from 'mdi-react/DeleteForeverIcon';
import { environment } from '../../../../environment'
// import createHistory from 'history/createBrowserHistory';

import SweetAlert from 'sweetalert2-react';



export class CartCard extends Component {

  constructor(props) {
    let customerId=0;
// let data = [];
let cart;
let totalPrice = 0;
let getCustomerId = JSON.parse(localStorage.getItem('user'));
let isGuest = false;
let today = new Date();
// let currentDate = (today.getYear()  + (today.getMonth() + 1) + today.getDate()).toString();
let year = today.getFullYear();
let month = today.getMonth()+1;
let day = today.getDate();
let userId = 0;
console.log(year);
    super(props);

    if (!localStorage.getItem('user')) {
      isGuest = true;
    }
    else if(isGuest===false) {
        customerId = JSON.parse(localStorage.getItem('user'));
        userId = customerId[0].customer.id;
      }
    this.state = {
      data: [],
      cart: {
        itemId: 0,
        customerId: userId,
        purchaseDate: '',
        quantity:0

      },
      totalPrice: 0,
      isGuest,
      year,
      month,
      day,
      rendered: false
    };

    this.handlePurchase = this.handlePurchase.bind(this);
  }


  componentDidMount() {
    console.log(`customer id = ${this.state.cart.customerId}`);
    setTimeout(() => {
      
    fetch(environment.context + `cart/get/${this.state.cart.customerId}`, {
      // fetch('http://localhost:3001/cart/get/2',{
      headers: {
        "Content-Type": "application/json"
      },
      method: "GET"
    })
      .then(resp => resp.json())
      .then(resp => {
        console.log(resp);
        let price = 0;
        for(let i = 0; i < resp.length; i++) {
          price += (resp[0].item.price * resp[0].quantity);
        }
        this.setState({
          ...this.state,
          data: resp,
          totalPrice: price
        })
            return resp;
      });//end fetch
    }, 2000);
  }

  handlePurchase(event) {

    console.log('you got in handle purchase');
    const { cart } = this.state;
  
    for (let i = 0; i < this.state.data.length; i++) {
      console.log(this.state.data[0].itemId);
      console.log(this.state.data[0].customerId);

      cart.itemId=this.state.data[i].itemId;
      cart.customerId=this.state.data[i].customerId;
      cart.purchaseDate = `${this.state.year}-0${this.state.month}-${this.state.day}`;
      cart.quantity = this.state.data[i].quantity;
      // cart.purchaseDate = '2018-09-25';
      
      fetch(environment.context + 'purchase', {
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(cart),
        method: "POST"
      });//end fetch
      
    console.log(`purchase finished ${i}`)
    
    }

    console.log(`this is customer id ${this.state.cart.customerId}`);
    //deleting current cart
    fetch(environment.context + `cart/customer/${this.state.cart.customerId}`, {
      headers: {
        "Content-Type": "application/json"
      },
      method: "DELETE"
    })
    this.setState({
      ...this.state,
      data: [],
      totalPrice: 0
    })

    console.log("cart is deleted")
    alert('Success Purchase');


  }


  
  render() {
  
  
    const { data, totalPrice } = this.state;
    console.log(`in render${data}`);
    return (
      <div>
        
      <Col md={12} lg={12}>
        <Card className='cart'>
          <CardBody>
            <div className='card_title'>
              <h5 className='bold-text'>Cart</h5>
            </div>
            <Table className='table--bordered cart_table' responsive>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Total</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {data.map((cartItem, i) =>
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td>
                      <span>{cartItem.item.name}</span>
                    </td>
                    <td>{cartItem.quantity}</td>
                    <td>${cartItem.item.price.toFixed(2)}</td>
                    <td>${cartItem.item.price * cartItem.quantity.toFixed(2)}</td>
                    <td>
                      <button className='cart_table-btn'>
                        <DeleteForeverIcon /> Remove
                    </button>
                    </td>
                  </tr>
                )}
              </tbody>
            </Table>
            <h4>Total Price: ${totalPrice}</h4>


            <button className='btn btn-primary' onClick={this.handlePurchase}>Purchase</button>

            {/* <button className='btn btn-primary' onClick={() => this.setState({ show: true })}>Purchase</button>
            <SweetAlert
              show={this.state.show}
              title="Purchase Done?"
              text={`Total price: ${totalPrice.toFixed(2)} `}
              onConfirm={this.handlePurchase} /> */}

          </CardBody>
        </Card>
      </Col>
      </div>
    )
  }
}

