import React, {PureComponent} from 'react';
import {ButtonToolbar} from 'reactstrap';
import {Field, reduxForm} from 'redux-form';
// import renderRadioButtonField from '../../../../components/form/RadioButton';
import {Link} from 'react-router-dom';

class CartPurchase extends PureComponent {
  
  render() {
    const {handleSubmit} = this.props;
    
    return (
      <form className='form cart_deliveries' onSubmit={handleSubmit}>
        <div className='form_form-group'>

          
        </div>
        <h4 className='cart_total'>Total Price: $348.00</h4>
      
          <Link className='btn btn-primary' to='/pages/payment'>Purchase</Link>
          {/*<Button color='primary' type='submit'>Purchase</Button>*/}
        
      </form>
    )
  }
}

export default reduxForm({
  form: 'cart_purchase_form', // a unique identifier for this form
})(CartPurchase);

