import React, { Component } from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import Table from '../../../components/table/Table';
import DeleteForeverIcon from 'mdi-react/DeleteForeverIcon';
import { environment } from '../../../../environment';


let customerId=0;
let data = [];
let cart;
let totalPrice = 0;
let isGuest = false;
let userId;
let user = JSON.parse(localStorage.getItem('user'));


// if(!user){
//   console.log('passed');
// }
// else{
//   console.log('its not guest');
//     customerId = JSON.parse(localStorage.getItem('user'));
//     userId = customerId[0].customer.id;
//     console.log (`customer id = ${userId}`);
// }

if (!localStorage.getItem('user')) {
  isGuest = true;
  console.log('it is guest');
}
else {
  console.log('pased');
    customerId = JSON.parse(localStorage.getItem('user'));
    userId = customerId[0].customer.id;
    console.log (`customer id = ${userId}`);
  }


function getData() {
    // console.log(`customer id : ${customerId[0].customer.id}`);
    fetch(environment.context + `purchase/${userId}`, {
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
        return data;
      });//end fetch
  
  }
  getData();

  
function calcSubTotal(price, quantity) {
  let totalAmount = 0;
  totalAmount =  (price * quantity);

  return totalAmount;

}



export class CartHistory extends Component {

    constructor(props) {
      super(props);
      this.state = {
        data: data,
      };
  
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
                    <th>Purchase Date</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    {/* <th>Total</th> */}
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
                      <td>{(cartItem.purchaseDate)}</td>
                      <td>{cartItem.quantity}</td>
                      <td>${calcSubTotal(cartItem.item.price, cartItem.quantity).toFixed(2)}</td>
                      {/* <td>${calcSubTotal(cartItem.item.price, cartItem.quantity).toFixed(2)}</td> */}
                    </tr>
                  )}
                </tbody>
              </Table>
            </CardBody>
          </Card>
        </Col>
      )
    }
  }
  
  