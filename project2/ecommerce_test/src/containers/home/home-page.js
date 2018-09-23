// import React, { PureComponent } from 'react';
import React, { Component } from 'react';
import { Col, Container, Row } from 'reactstrap';
import './home.css';
// import { Col, Container, Row } from 'reactstrap';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

const items = [
  {
    id: 1,
    altText: 'Join us now',
    caption: 'We have variety of brands and unique styles'
  },
  {
    id: 2,
    altText: 'Buy clothes Today!',
    caption: 'We have many brands'
  },
  {
    id: 3,
    altText: 'Try out JM-Terrely!',
    caption: 'Join us now to get 10% discounts'
  }
];




export class HomePage extends Component {
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

  componentDidMount(){
   
    // let user = JSON.parse(localStorage.getItem('user'));
  //  alert(user[0].username);
  }




  render() {
    const { activeIndex } = this.state;
    // const {user, users} = this.props;

    const slides = items.map((item) => {
      return (
        <CarouselItem
          className={`custom-tag${item.id}`}
          tag="div"
          key={item.id}
          onExiting={this.onExiting}
          onExited={this.onExited}
        >
          <CarouselCaption className="text-danger"  captionText={item.caption} captionHeader={item.altText} />
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
                        <h2 id="header-company">Welcome to Homepage</h2> 
                        <h3 className="header-stat">JM-Terrely has many brands with unique styles</h3>
                    </Col>
                </Row>

                <Row>
                    {/* <TotalSubscribers />
                    <TotalItems /> */}

                </Row>

                <Row>
                    {/* <TotalItemsTable/> */}
                </Row>



            </Container>

      </div> //whole return wrapper
    );
  }
}

