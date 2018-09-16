import React, { PureComponent } from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import { BarChart, XAxis, YAxis, Bar, Cell, ResponsiveContainer, CartesianGrid, Tooltip, Legend } from 'recharts';


// newUser is test data
const data = [
    { name: 'UNI-CLO', newUser: 50 },
    { name: 'OLD-NAVY', newUser: 60 },
    { name: 'H&M', newUser: 40 },
    { name: 'FOREVER21', newUser: 60 },
    { name: 'ZARA', newUser: 20 },
    { name: 'BANANA-REPUBLIC', newUser: 100 }
]


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
        const { t } = this.props;

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
                                {/* {(activeItem.newUser)} */}
                                {(activeItem.name)}
                                {("   Subscribers = ")}
                                {(activeItem.newUser)}
                            </p>
                            <ResponsiveContainer height={150} className='dashboard_chart-container'>
                                <BarChart data={data}>
                                    <XAxis dataKey='name' />
                                    <YAxis />
                                    <CartesianGrid strokeDasharray="3 3" />

                                    <Bar dataKey='newUser' onClick={this.handleClick}>
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

