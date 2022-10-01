import StripeCheckout from 'react-stripe-checkout';
import logo from '../../assets/cart-svgrepo-com.svg'

const StripeBtn = ({ price }) => {
  const priceForStripe = price * 100
  const publishableKey = 'pk_test_51Lnl8QFXRFK23tntLRqywNWnZBhrsPy4oOQzFhGnui7pGe1aPP3OTUZm6FhefnXloI0LqpVojlpCLLhk4UZ8YB8100vMbymF3l'

  const onToken = token => {
    console.log(token)
    alert('Payment Successful')
  }

  return (
    <StripeCheckout
      label='Pay Now'
      name='React Ecommerce'
      billingAddress
      shippingAddress
      image={logo}
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
      allowRememberMe
      currency='USD'
    />
  )
}

export default StripeBtn;
