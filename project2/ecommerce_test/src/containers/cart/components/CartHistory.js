import React, { Component } from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import Table from '../../../components/table/Table';
import DeleteForeverIcon from 'mdi-react/DeleteForeverIcon';


let customerId;
let data = [];
let cart;
let totalPrice = 0;
let getCustomerId = localStorage.getItem('user');
let isGuest = false;

if (!localStorage.getItem('user')) {
  isGuest = true;
}
else {
  isGuest = false;
  // customerId = getCustomerId.customer.customerId;
}

function getData() {
    fetch(`http://ec2-54-200-103-68.us-west-2.compute.amazonaws.com:3001/purchase/2`, {
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
                      <td>${cartItem.item.price.toFixed(2)}</td>
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
  
  