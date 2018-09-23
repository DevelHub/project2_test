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


export class BananaCard extends Component {


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
          <button className='btn btn-primary' >Subscribe</button>
        </Card>
      </Col>
    )
  }
}