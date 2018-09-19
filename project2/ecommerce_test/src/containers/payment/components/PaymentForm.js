import React, {PureComponent} from 'react';
import {Button, ButtonToolbar} from 'reactstrap';
import {Field, reduxForm} from 'redux-form';




class PaymentForm extends PureComponent {
  
  render() {
    const {handleSubmit} = this.props;
    
    return (
        <div>
        <h4 className='payment_total'>Total Price: $348.00</h4>
        <ButtonToolbar className='form_button-toolbar'>
          <Button color='primary' type='submit'>Make Payment</Button>
        </ButtonToolbar>
        </div>
    
    )
  }
}

export default reduxForm({
  form: 'payment_form', // a unique identifier for this form
})(PaymentForm);
