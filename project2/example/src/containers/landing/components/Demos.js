import React, {PureComponent} from 'react';
import {Col, Row, Container} from 'reactstrap';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

const crypto = process.env.PUBLIC_URL + '/img/landing/demos/crypto_light.png';
const e_commerce = process.env.PUBLIC_URL + '/img/landing/demos/ecommerce_light.png';
const analytics = process.env.PUBLIC_URL + '/img/landing/demos/default_light.png';
const fitness = process.env.PUBLIC_URL + '/img/landing/demos/fitness_light.png';

const crypto_dark = process.env.PUBLIC_URL + '/img/landing/demos/crypto_dark.png';
const e_commerce_dark = process.env.PUBLIC_URL + '/img/landing/demos/ecommerce_dark.png';
const analytics_dark = process.env.PUBLIC_URL + '/img/landing/demos/default_dark.png';
const fitness_dark = process.env.PUBLIC_URL + '/img/landing/demos/fitness_dark.png';

const background = process.env.PUBLIC_URL + '/img/landing/right_bg.png';

class Demos extends PureComponent {
  static propTypes = {
    theme: PropTypes.object.isRequired,
    changeToDark: PropTypes.func,
    changeToLight: PropTypes.func,
  };

  render() {
    let {theme, changeToLight, changeToDark} = this.props;

    return (
      <section className='landing__section'>
        <img className='landing__section-background' src={background} alt=''/>
        <Container>
          <Row>
            <Col md={12}>
              <h3 className='landing__section-title'>EasyDEV Demos</h3>
            </Col>
          </Row>
          <Row>
            <Col md={6} sm={12} xs={12}>
              <Link className='landing__demo' to='/dashboard_crypto'>
                <div className='landing__demo-img-wrap'>
                  <img src={theme.className === 'theme-dark' ? crypto_dark : crypto} alt=''/>
                </div>
                <p className='landing__demo-title'>Crypto Dashboard</p>
              </Link>
            </Col>
            <Col md={6} sm={12} xs={12}>
              <Link className='landing__demo' to='/dashboard_e_commerce'>
                <div className='landing__demo-img-wrap'>
                  <img src={theme.className === 'theme-dark' ? e_commerce_dark : e_commerce} alt=''/>
                </div>
                <p className='landing__demo-title'>E-commerce Dashboard</p>
              </Link>
            </Col>
            <Col md={6} sm={12} xs={12}>
              <Link className='landing__demo' to='/dashboard_default'>
                <div className='landing__demo-img-wrap'>
                  <img src={theme.className === 'theme-dark' ? analytics_dark : analytics} alt=''/>
                </div>
                <p className='landing__demo-title'>Analytics Dashboard</p>
              </Link>
            </Col>
            <Col md={6} sm={12} xs={12}>
              <Link className='landing__demo' to='/dashboard_fitness'>
                <div className='landing__demo-img-wrap'>
                  <img src={theme.className === 'theme-dark' ? fitness_dark : fitness} alt=''/>
                </div>
                <p className='landing__demo-title'>Fitness Dashboard</p>
              </Link>
            </Col>
            <Col md={12}>
              <div className='landing__demo-toggle-wrap'>
                <span>Light Layout</span>
                <div className='toggle-btn landing__demo-toggle'>
                  <input className='toggle-btn__input' type='checkbox' name='demos'
                         checked={theme.className === 'theme-dark'}/>
                  <label className='toggle-btn__input-label' htmlFor='demos'
                         onClick={theme.className === 'theme-dark' ? changeToLight : changeToDark}>Toggle</label>
                </div>
                <span>Dark Layout</span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    )
  }
}

export default Demos;