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


export class UniCard extends Component {


  render() {
    return (
      <Col md={12} lg={12}>
        <Card>
          <CardBody>
            <div className='product-card'>
              <div className='product-card__info'>
                <h2 className='product-card__title'>UNI-CLO</h2>
                <div className='product-card__rate'>
                  <StarIcon/>
                  <StarIcon/>
                  <StarIcon/>
                  <StarIcon/>
                  <StarOutlineIcon/>
                </div>
                
                {/* <img src ='../img/uni.png' alt='uni_logo' height = '43' width='43'></img>
             */}
             <div className='company-uni'></div>
                <p>Uniqlo Co. Ltd. is a Japanese casual wear designer, manufacturer and retailer. The company has been a wholly owned subsidiary of Fast Retailing Co., Ltd. 
                    The company operates in Japan and several other countries </p>
                
              </div>
            </div>
          </CardBody>
          <button className='btn btn-primary' >Subscribe</button>
        </Card>
      </Col>
    )
  }
}