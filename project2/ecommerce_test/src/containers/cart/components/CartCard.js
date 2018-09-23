import React, { Component } from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import Table from '../../../components/table/Table';
import DeleteForeverIcon from 'mdi-react/DeleteForeverIcon';
// import createHistory from 'history/createBrowserHistory';

import SweetAlert from 'sweetalert2-react';

// const history = createHistory();

let customerId;
let data = [];
let cart;
let totalPrice = 0;
let getCustomerId = JSON.parse(localStorage.getItem('user'));
let isGuest = false;
let today = new Date();
// let currentDate = (today.getYear()  + (today.getMonth() + 1) + today.getDate()).toString();
let year = today.getFullYear();
let month = today.getMonth()+1;
let day = today.getDate();
console.log(year);

if (!localStorage.getItem('user')) {
  isGuest = true;
}
else {
  isGuest = false;
  customerId = getCustomerId[0].customer.id;
}

function getData() {
  fetch(`http://ec2-54-200-103-68.us-west-2.compute.amazonaws.com:3001/cart/get/${customerId}`, {
    // fetch('http://localhost:3001/cart/get/2',{
    headers: {
      "Content-Type": "application/json"
    },
    method: "GET"
  })
    .then(resp => resp.json())
    .then(resp => {
      for (let i = 0; i < resp.length; i++) {
        data.push(resp[i]);
      }
      // console.log(data[0].quantity);
      return data;
    });//end fetch

}
getData();


function calcSubTotal(price, quantity) {
  let totalAmount = 0;
  totalAmount += (price * quantity);
  console.log(totalAmount);
  calcTotal(totalAmount);

  return totalAmount;

}
function calcTotal(subTotal) {
  // console.log(totalPrice);
  totalPrice += subTotal;

}



export class CartCard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: data,
      cart: {
        itemId: 0,
        customerId: 0,
        purchaseDate: ''

      }
    };

    this.handlePurchase = this.handlePurchase.bind(this);
  }


  
  handlePurchase(event) {

    console.log('you got in handle purchase');
    const { cart } = this.state;
  
    for (let i = 0; i < data.length; i++) {
      console.log(data[0].itemId);
      console.log(data[0].customerId);

      cart.itemId=data[i].itemId;
      cart.customerId=data[i].customerId;
      cart.purchaseDate = `${year}-0${month}-${day}`;
      // cart.purchaseDate = '2018-09-25';
      
      fetch(`http://ec2-54-200-103-68.us-west-2.compute.amazonaws.com:3001/purchase`, {
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(cart),
        method: "POST"
      });//end fetch
  
    console.log(`purchase finished ${i}`)
    }
    //deleting current cart
    fetch(`http://ec2-54-200-103-68.us-west-2.compute.amazonaws.com:3001/cart/customer/${customerId}`, {
      headers: {
        "Content-Type": "application/json"
      },
      method: "DELETE"
    })

    console.log("cart is deleted")


  }



  render() {

    const { data } = this.state;
    return (
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
                    <td>${calcSubTotal(cartItem.item.price, cartItem.quantity).toFixed(2)}</td>
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
    )
  }
}

