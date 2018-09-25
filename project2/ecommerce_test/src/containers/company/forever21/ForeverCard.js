import React, {Component} from 'react';
import {Card, CardBody, Col, ButtonToolbar} from 'reactstrap';
import StarIcon from 'mdi-react/StarIcon';
import StarOutlineIcon from 'mdi-react/StarOutlineIcon';
import {Link} from 'react-router-dom';

export class ForeverCard extends Component {
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

  user.companyId = 5;
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

  console.log('added to forever21')
  alert(`subscribe Forever21`);


}



  render() {
    return (
      <Col md={12} lg={12}>
        <Card>
          <CardBody>
            <div className='product-card'>
              <div className='product-card__info'>
                <h2 className='product-card__title'>FOREVER21</h2>
                <div className='product-card__rate'>
                  <StarIcon/>
                  <StarIcon/>
                  <StarIcon/>
                  <StarIcon/>
                  <StarOutlineIcon/>
                </div>
                
                {/* <img src ='../img/uni.png' alt='uni_logo' height = '43' width='43'></img>
             */}
             <div className='company-forever'></div>
                <p>Forever 21, stylized as FOREVER 21, is an American fast fashion retailer headquartered in Los Angeles, California. Forever 21 began as the store called Fashion 21 with 900 square feet (84 m2) in Highland Park, Los Angeles, California in 1984, and has grown into the clothing lines Forever 21, XXI Forever, Love 21, and Heritage throughout over 600 stores in the Americas, Asia, the Middle East, and the UK.
                  Forever 21 is known for its trendy offerings and low pricing.More than 60% of its apparel is made in China and the average store size is 38,000 square feet (3,500 m2).[3] The company sells accessories, beauty products, home goods, and clothing for women, men, and girls. The company has been involved in various controversies, ranging from labor practice issues to copyright infringement accusations to religion. The clothing is sold to all ages, ranging from toddler to adult.</p>
                
              </div>
            </div>
          </CardBody>
          <button className='btn btn-primary' onClick={this.handleSubscribe} >Subscribe</button>
        </Card>
      </Col>
    )
  }
}