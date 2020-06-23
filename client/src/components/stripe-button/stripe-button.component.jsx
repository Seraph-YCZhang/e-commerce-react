import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishKey = 'pk_test_51GrxlhFgkX927Lw8XsDKJgJ6io8c9Ur01AxOTSVOjN25LwdXdQrb7qSNhZtwVcvsqpnAiC3s5mdBoznE0aaZsy7J00K74ibIeD';
    const onToken = token => {
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token
            }
        }).then(response => {
            alert('Payment Success');
        }).catch(error => {
            console.log('Payment error: ', JSON.parse(error));
            alert(
                'There was an issue with your payment. Please sure you use the corrected credit card!'
            );
        })
    };
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