
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

import { 
  CheckoutPageContaienr, 
  CheckoutHeaderContainer, 
  HeaderBlock,
  TotalContainer,
  TestWarningContainer } from './checkout.styles';

const CheckoutPage = ({cartItems, total}) => (
  <CheckoutPageContaienr>
    <CheckoutHeaderContainer>
      <HeaderBlock>
        <span>Product</span>
      </HeaderBlock>
      <HeaderBlock>
        <span>Description</span>
      </HeaderBlock>
      <HeaderBlock>
        <span>Quantity</span>
      </HeaderBlock>
      <HeaderBlock>
        <span>Price</span>
      </HeaderBlock>
      <HeaderBlock>
        <span>Remove</span>
      </HeaderBlock>
    </CheckoutHeaderContainer>
    {
      cartItems.map(cartItem =>
          <CheckoutItem key={cartItem.id} cartItem={cartItem}></CheckoutItem>
        )
    }

    <TotalContainer>TOTAL: ${total}</TotalContainer>
    <TestWarningContainer>
      ****Please use the following test creadit card for payments*
      <br />
      4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
    </TestWarningContainer>
    <StripeCheckoutButton price={total} />
   
  </CheckoutPageContaienr>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage);