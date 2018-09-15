import React, { PureComponent } from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import { BarChart, Bar, Cell, ResponsiveContainer } from 'recharts';
import TrendingDownIcon from 'mdi-react/TrendingDownIcon';

// newUser is test data
const data = [
    { name: 'UNI-CLO', newUser: 50 },
    {name:'OLD-NAVY', newUser: 60},
    {name:'H&M', newUser: 40},
    {name:'FOREVER21', newUser: 60},
    {name:'ZARA', newUser: 20},
    {name: 'BANANA-REPUBLIC',newUser:100}

    

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
            <Col md={12} xl={3} lg={6} xs={12}>
                <Card>
                    <CardBody className='dashboard__card-widget'>
                        <div className='card__title'>
                            {/* <h5 className='bold-text'>{t('dashboard_default.new_users')}</h5> */}
                            <h5 className='bold-text'>Total Subscribers</h5>
                        </div>
                        <div className='dashboard__total'>
                            {/* <TrendingDownIcon className='dashboard__trend-icon' /> */}
                            <p className='dashboard__total-stat'>
                                {(activeItem.newUser)}
                            </p>
                            <ResponsiveContainer height={150} className='dashboard__chart-container'>
                                <BarChart data={data}>
                                    <Bar dataKey='newUser' onClick={this.handleClick}>
                                        {
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

