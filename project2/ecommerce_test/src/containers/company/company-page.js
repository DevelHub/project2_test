import React, { Component } from 'react';
import { Col, Container, Row } from 'reactstrap';
import {TotalItems} from '../../components/charts/TotalItems';
import { TotalSubscribers } from '../../components/charts/TotalSubscribers';
import {Carousel,CarouselItem,CarouselControl, CarouselIndicators,CarouselCaption} from 'reactstrap';
import './company.css';
import {DoughnutChart} from '../../components/charts/DoughnutChart';
import { DoughnutChartDemo } from '../../components/charts/DoughnutChartDemo';
  




const items = [
    {
      id: 1,
      src: '../company/img/shop2.jpg',
      altText: 'Do you want to expend your brand?',
      caption: 'Join us now to bright future'
    },
    {
      id: 2,
      src: '../company/img/shop2.jpg',
      altText: 'We provide you customer statistics',
      caption: 'use our information to expend your brand!'
    },
    {
      id: 3,
      altText: 'Register stylish clothes now!',
      caption: 'JM-Terrely is trending now!'
    }
  ];
  
  export class CompanyPage extends Component {
    constructor(props) {
      super(props);
      this.state = { activeIndex: 0 };
      this.next = this.next.bind(this);
      this.previous = this.previous.bind(this);
      this.goToIndex = this.goToIndex.bind(this);
      this.onExiting = this.onExiting.bind(this);
      this.onExited = this.onExited.bind(this);
    }

   
  
    onExiting() {
      this.animating = true;
    }
  
    onExited() {
      this.animating = false;
    }
  
    next() {
      if (this.animating) return;
      const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
      this.setState({ activeIndex: nextIndex });
    }
  
    previous() {
      if (this.animating) return;
      const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
      this.setState({ activeIndex: nextIndex });
    }
  
    goToIndex(newIndex) {
      if (this.animating) return;
      this.setState({ activeIndex: newIndex });
    }
  
    render() {
      const { activeIndex } = this.state;
  
      const slides = items.map((item) => {
        return (
          <CarouselItem
            className={`custom-tag${item.id}`}
            tag="div"
            key={item.id}
            onExiting={this.onExiting}
            onExited={this.onExited}
          >
          </CarouselItem>
        );
      });
  
      return (
        <div>

          <Carousel
            activeIndex={activeIndex}
            next={this.next}
            previous={this.previous}
          >
            <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
            {slides}
            <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
            <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
          </Carousel>


          <Container className='dashboard'>
                <Row>
                    <Col md={12}>
                        <h2 id="header-company">Welcome to Company Page</h2>
                        <h3 className="header-stat">statistics: Subscribers, Items, and Reviews</h3>
                    </Col>
                </Row>

                <Row>
                    <TotalSubscribers />
                    <TotalItems />
                    <DoughnutChart/>
                    <DoughnutChartDemo />

                </Row>

                <Row>
                    {/* <TotalItemsTable/> */}
                </Row>



            </Container>


        </div> //whole return wrapper
      );
    }
  }
  
  