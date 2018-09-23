import React, { Component } from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import { Doughnut } from 'react-chartjs-2';
import { logInActions } from '../../redux/actions/log_in/loginAction';


let ageGroupOne = 0;
let ageGroupTwo = 0;
let ageGroupThree = 0;
let ageGroupFour = 0;
let ageGroupFive = 0;




fetch(`http://ec2-54-200-103-68.us-west-2.compute.amazonaws.com:3001/customer/age`, {
  headers: {
    "Content-Type": "application/json"
  },
  method: "GET"
})
  .then(resp => resp.json())
  .then(resp => {
    
    for (let i = 0; i < resp.length; i++) {
      if (resp[i].age < 20) {
        ageGroupOne += 1;
      }
      else if (resp[i].age < 31) {
        ageGroupTwo += 1;
      }
      else if (resp[i].age < 46) {
        ageGroupThree += 1;
      }
      else if (resp[i].age < 61) {
        ageGroupFour += 1;
      }
      else {
        ageGroupFive += 1;
      }
    }//end for
  });//end fetch

    
    console.log("age 1 =" + ageGroupOne);
    console.log("age 2 =" + ageGroupTwo);
    console.log("age 3 =" + ageGroupThree);
    console.log("age 4 =" + ageGroupFour);
    console.log("age 5 =" + ageGroupFive);

    const getState = () => ({
      labels: [
        'Under 19',
        '20~30',
        '31~45',
        '46~60',
        'Over 60'
      ],
      datasets: [{
        data: [ageGroupOne, ageGroupTwo, ageGroupThree, ageGroupFour, ageGroupFive],
        backgroundColor: [
          '#FF6384', //red
          '#36A2EB', //blue
          '#FFCE56', //yellow
          '#24e216', //green
          '#3713d6' //purple
        ],
        hoverBackgroundColor: [
          '#FF6384', //red
          '#36A2EB', //blue
          '#FFCE56',//yellow
          '#24e216', //green
          '#3713d6' //purple
        ],
        borderColor: 'rgba(255,255,255,0.54)'
      }]
    });


export class DoughnutChart extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: getState()
    };
  }

  componentWillMount() {
    setInterval(() => {
      this.setState({ data: getState() });
    }, 4000);
  }

  render() {

    return (
      <Col md={12} lg={12} xl={6}>
        <Card>
          <CardBody>
            <div className='card__title'>
              <h5 className='bold-text'>Age Demographic Groups</h5>
            </div>
            <Doughnut data={this.state.data} />
          </CardBody>
        </Card>
      </Col>
    )
  }
}