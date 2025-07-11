import { useEffect } from "react";

const PayPalButton = () => {
  useEffect(() => {
    if (window.paypal) {
      window.paypal.Buttons({
        createOrder: function (data, actions) {
          return actions.order.create({
            purchase_units: [{
              amount: {
                value: '20.00' // price
              }
            }]
          });
        },
        onApprove: function (data, actions) {
          return actions.order.capture().then(function (details) {
            alert('Transaction completed by ' + details.payer.name.given_name);
            // Optionally call your backend to save the payment
          });
        }
      }).render('#paypal-button-container');
    }
  }, []);

  return <div id="paypal-button-container">
    <h3 className="mt-8 text-center">Or Pay With Paypal</h3>
  </div>;
};

export default PayPalButton;
