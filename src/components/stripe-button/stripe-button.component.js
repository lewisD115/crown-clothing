import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51IUVjyAUjZSvmkQrAnY231gY2KTzLFQkNcs7m58Mw7oZGaBXSz1MdH8VFEWgsT2bzhV3nLvCtGVwUe4Lg9D1OEom00adZLBpva';

  const onToken = token => {
    console.log(token);
    alert('Payment Successful');
  }

  return(
    <StripeCheckout
      label='Pay Now'
      name='CROWN Clothing Ltd.' 
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}

export default StripeCheckoutButton;