import React, {Component} from 'react';
import {Card, CardBody, Col, ButtonToolbar} from 'reactstrap';
import StarIcon from 'mdi-react/StarIcon';
import StarOutlineIcon from 'mdi-react/StarOutlineIcon';
import {Link} from 'react-router-dom';


export class OldCard extends Component {

  
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

  user.companyId = 2;
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

  console.log('added to oldnavy')
  alert(`subscribe OLD NAVY`);


}

  render() {
    return (
      <Col md={12} lg={12}>
        <Card>
          <CardBody>
            <div className='product-card'>
              <div className='product-card__info'>
                <h2 className='product-card__title'>OLD-NAVY</h2>
                <div className='product-card__rate'>
                  <StarIcon/>
                  <StarIcon/>
                  <StarIcon/>
                  <StarIcon/>
                  <StarOutlineIcon/>
                </div>
                
                {/* <img src ='../img/uni.png' alt='uni_logo' height = '43' width='43'></img>
             */}
             <div className='company-old'></div>
                <p>Old Navy is an American clothing and accessories retailing company owned by American multinational corporation Gap Inc.[2] It has corporate operations in the Mission Bay neighborhood of San Francisco. The largest of the Old Navy stores are its flagship stores, located in New York City, Seattle, Chicago, San Francisco, and Mexico City.</p>
                
              </div>
            </div>
          </CardBody>
          <button className='btn btn-primary' onClick={this.handleSubscribe} >Subscribe</button>
        </Card>
      </Col>
    )
  }
}