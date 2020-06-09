import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishKey = 'pk_test_51GrxlhFgkX927Lw8XsDKJgJ6io8c9Ur01AxOTSVOjN25LwdXdQrb7qSNhZtwVcvsqpnAiC3s5mdBoznE0aaZsy7J00K74ibIeD';
    const onToken = token => {
        // console.log(token);
        alert('Payment Successful');
    }
    return (
        <StripeCheckout
            label='Pay Now'
            name='CRWN CLOTING LTD.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishKey}
        />
    )
}

export default StripeCheckoutButton;