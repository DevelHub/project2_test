import React, {Component} from 'react';
import {Card, CardBody, Col, ButtonToolbar} from 'reactstrap';
import StarIcon from 'mdi-react/StarIcon';
import StarOutlineIcon from 'mdi-react/StarOutlineIcon';
import {Link} from 'react-router-dom';
import { environment } from '../../../../environment';


// function getData(){
//     fetch(`http://ec2-54-200-103-68.us-west-2.compute.amazonaws.com:3001/cart/get/2`, {
//       // fetch('http://localhost:3001/cart/get/2',{
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
//     // console.log(data[0].quantity);
//     return data;
//   });//end fetch

// }
// getData();

function handleClick(){


}


export class BananaCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
        user:{
          companyId: 0,
          customerId: 0,
          timeFrame: ''


        }
      }
    

    this.handleSubscribe = this.handleSubscribe.bind(this);
  }


handleSubscribe(event){
  
let today = new Date();
let year = today.getFullYear();
let month = today.getMonth()+1;
let day = today.getDate();
  const {user} = this.state;
  console.log(`got in subscribe handler`);
  event.preventDefault();
  let currentUser = JSON.parse(localStorage.getItem('user'));

  user.companyId = 7;
  user.customerId = currentUser[0].customer.id;
  user.timeFrame = `${year}-0${month}-${day}`;

  console.log(user.companyId);
  console.log(user.customerId);
  console.log(user.timeFrame);
 

  fetch(environment.context + 'subscription/add', {
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user),
    method: "POST"
  });//end fetch

  console.log('added to bananaRepublic')
  alert(`subscribe BananaRepublic`);


}


  render() {
    return (
      <Col md={12} lg={12}>
        <Card>
          <CardBody>
            <div className='product-card'>
              <div className='product-card__info'>
                <h2 className='product-card__title'>BANANA-REPUBLIC</h2>
                <div className='product-card__rate'>
                  <StarIcon/>
                  <StarIcon/>
                  <StarIcon/>
                  <StarIcon/>
                  <StarOutlineIcon/>
                </div>
                
             <div className='company-banana'></div>
                <p>Banana Republic is an American clothing and accessories retailer owned by American multinational corporation, Gap Inc.
                  It was founded in 1978, by Mel and Patricia Ziegler with the name "Banana Republic Travel & Safari Clothing Company", with a safari theme; in 1983, Gap purchased the company, changed the name to simply "Banana Republic", and gave it a more upscale image. In late 2016, the brand announced Olivia Palermo as its first women's global style ambassador. </p>
                
              </div>
            </div>
          </CardBody>
          <button className='btn btn-primary' onClick={this.handleSubscribe} >Subscribe</button>
        </Card>
      </Col>
    )
  }
}