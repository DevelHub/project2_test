import React, {Component} from 'react';
import {Card, CardBody, Col, ButtonToolbar} from 'reactstrap';
import StarIcon from 'mdi-react/StarIcon';
import StarOutlineIcon from 'mdi-react/StarOutlineIcon';
import {Link} from 'react-router-dom';


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


export class HmCard extends Component {
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

  user.companyId = 4;
  user.customerId = currentUser[0].customer.id;
  user.timeFrame = `${year}-0${month}-${day}`;

  console.log(user.companyId);
  console.log(user.customerId);
  console.log(user.timeFrame);
 

  fetch(`http://ec2-54-200-103-68.us-west-2.compute.amazonaws.com:3001/subscription/add`, {
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user),
    method: "POST"
  });//end fetch

  console.log('added to h&m')
  alert(`subscribe H&M`);


}


  render() {
    return (
      <Col md={12} lg={12}>
        <Card>
          <CardBody>
            <div className='product-card'>
              <div className='product-card__info'>
                <h2 className='product-card__title'>H&M</h2>
                <div className='product-card__rate'>
                  <StarIcon/>
                  <StarIcon/>
                  <StarIcon/>
                  <StarIcon/>
                  <StarOutlineIcon/>
                </div>
                
                {/* <img src ='../img/uni.png' alt='uni_logo' height = '43' width='43'></img>
             */}
             <div className='company-hm'></div>
                <p>Hennes & Mauritz AB (Swedish pronunciation: [²hɛnːɛs ɔ ˈma.ʊrɪts]; H&M [²hoː.ɛm]) is a Swedish multinational clothing-retail company known for its fast-fashion clothing for men, women, teenagers and children. H&M and its associated companies operate in 62 countries with over 4,500 stores and as of 2015 employed around 132,000 people.[4] It is the second-largest global clothing retailer, just behind Spain-based Inditex (parent company of Zara). The company has a significant on-line presence, with on-line shopping available in 33 countries </p>
                
              </div>
            </div>
          </CardBody>
          <button className='btn btn-primary' onClick={this.handleSubscribe} >Subscribe</button>
        </Card>
      </Col>
    )
  }
}