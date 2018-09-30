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

// function handleClick(){


// }


export class ZaraCard extends Component {
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

  user.companyId = 6;
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

 


}


  render() {
    return (
      <Col md={12} lg={12}>
        <Card>
          <CardBody>
            <div className='product-card'>
              <div className='product-card__info'>
                <h2 className='product-card__title'>ZARA</h2>
                <div className='product-card__rate'>
                  <StarIcon/>
                  <StarIcon/>
                  <StarIcon/>
                  <StarIcon/>
                  <StarOutlineIcon/>
                </div>
                
                {/* <img src ='../img/uni.png' alt='uni_logo' height = '43' width='43'></img>
             */}
             <div className='company-zara'></div>
                <p>Zara SA (Spanish: [ˈθaɾa]) is a Spanish fast fashion[3] (clothing and accessories) retailer based in Arteixo (A Coruña) in Galicia.
                   The company was founded in 1975 by Amancio Ortega and Rosalía Mera. It is the main brand of the Inditex group,[4] the world's largest apparel retailer. The fashion group also owns brands such as Massimo Dutti, Pull&Bear, Bershka, Stradivarius, Oysho, Zara Home, and Uterqüe. Zara as of 2017 manages up to 20 clothing collections a year. </p>
                
              </div>
            </div>
          </CardBody>
          <button className='btn btn-primary' onClick={this.handleSubscribe}>Subscribe</button>
        </Card>
      </Col>
    )
  }
}