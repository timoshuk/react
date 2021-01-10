import React from "react";
import StripeCheckout from "react-stripe-checkout";
import myKey from "../../config";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishhableKey = myKey.stripeKey;

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successfull");
  };

  return (
    <StripeCheckout
      label="Pey Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pey Now"
      token={onToken}
      stripeKey={publishhableKey}
    />
  );
};

export default StripeCheckoutButton;
