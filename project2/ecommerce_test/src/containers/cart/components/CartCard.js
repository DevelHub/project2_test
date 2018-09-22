import React, {Component} from 'react';
import {Card, CardBody, Col} from 'reactstrap';
import cart_list from './test';
import Table from '../../../components/table/Table';
import DeleteForeverIcon from 'mdi-react/DeleteForeverIcon';
import CartPurchase from './CartPurchase';




// let data=[];
// let getCustomerId = localStorage.getItem('user');
// // getCustomerId.
// function getData(){
//     fetch(`http://ec2-54-200-103-68.us-west-2.compute.amazonaws.com:3001/cart/get/${customerId}`, {
//   headers: {
//     "Content-Type": "application/json"
//   },
//   method: "GET"
// })
//   .then(resp => resp.json())
//   .then(resp => {
//      for(let i=0; i<resp.length;i++){
//          data.push(resp[i]);
       
//      }
    
//     return data;
//   });//end fetch

// }
// getData();

export class CartCard extends Component {
  render() {
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
                <th/>
              </tr>
              </thead>
              <tbody>
              {cart_list.map((ct, i) =>
                <tr key={i}>
                  <td>{i+1}</td>
                  <td>
                    <span>{ct.title}</span>
                  </td>
                  <td>{ct.quantity}</td>
                  <td>${ct.price.toFixed(2)}</td>
                  <td>${ct.total.toFixed(2)}</td>
                  <td>
                    <button className='cart_table-btn'>
                      <DeleteForeverIcon/> Remove
                    </button>
                  </td>
                </tr>
              )}
              </tbody>
            </Table>
         
            <CartPurchase onSubmit/>
          </CardBody>
        </Card>
      </Col>
    )
  }
}

