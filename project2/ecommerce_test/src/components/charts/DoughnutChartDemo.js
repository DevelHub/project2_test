import React, { Component } from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import { Doughnut } from 'react-chartjs-2';
import { logInActions } from '../../redux/actions/log_in/loginAction';





function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }


  const getState = () => ({
    labels: [
        'Under 19',
        '20~30',
        '31~45',
        '46~60',
        'Over 60'
    ],
    datasets: [{
      data: [getRandomInt(1,100), getRandomInt(1,100), getRandomInt(1,100),getRandomInt(1,100),getRandomInt(1,100)],
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

export class DoughnutChartDemo extends Component {

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
              <h5 className='bold-text'>Age Demographic Groups DEMO</h5>
            </div>
            <Doughnut data={this.state.data} />
          </CardBody>
        </Card>
      </Col>
    )
  }
}