import React, { PureComponent } from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import { BarChart, XAxis, YAxis, Bar, Cell, ResponsiveContainer, CartesianGrid, Tooltip, Legend } from 'recharts';


let data=[];
function getData(){
    fetch(`http://ec2-54-200-103-68.us-west-2.compute.amazonaws.com:3001/subscription`, {
  headers: {
    "Content-Type": "application/json"
  },
  method: "GET"
})
  .then(resp => resp.json())
  .then(resp => {
     for(let i=0; i<resp.length;i++){
         data.push(resp[i]);
       
     }
    
    return data;
  });//end fetch

}
getData()


export class TotalSubscribers extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            data: data,
            activeIndex: 0
        };

        this.handleClick = this.handleClick.bind(this);
    }


    handleClick(data, index) {
        this.setState({
            activeIndex: index
        });
    }

    render() {
        const { activeIndex, data } = this.state;
        const activeItem = data[activeIndex];
        

        return (

            <Col md={12} xl={7} lg={6} xs={20}>
                <Card>
                    <CardBody className='dashboard_card-widget'>
                        <div className='card_title'>
                            {/* <h5 className='bold-text'>{t('dashboard_default.new_users')}</h5> */}
                            <h5 className='bold-text'>Subscribers For Each Companny</h5>
                        </div>
                        <div className='dashboard_total'>
                            <p className='dashboard_total-stat'>
                               
                                {/* {`name : ${activeItem.name}`} */}
                                {/* {("   Subscribers = ")} */}
                                {/* {activeItem.total} */}
                            </p>
                            <ResponsiveContainer height={150} className='dashboard_chart-container'>
                                <BarChart data={data}>
                                    <XAxis dataKey='name' />
                                    <YAxis />
                                    <CartesianGrid strokeDasharray="3 3" />

                                    <Bar dataKey='total' onClick={this.handleClick}>
                                        {
                                            // change color when the mouse cursor clicks the bar
                                            data.map((entry, index) => (
                                                <Cell cursor='pointer' fill={index === activeIndex ? '#4ce1b6' : '#c88ffa'}

                                                    key={`cell-${index}`} />
                                            ))
                                        }
                                    </Bar>

                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </CardBody>
                </Card>
            </Col>
        )
    }
}

