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

function handleClick(){


}


export class ForeverCard extends Component {


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
          <button className='btn btn-primary' >Subscribe</button>
        </Card>
      </Col>
    )
  }
}