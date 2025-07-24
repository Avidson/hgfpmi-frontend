import { useEffect, useRef, useState } from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { clearCart } from '../../redux/cart/cartSlice';

export default function StripeCardPayment({ clientSecret }) {
  const stripe = useStripe();
  const elements = useElements();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!stripe || !elements) return;

    setLoading(true);
    const card = elements.getElement(CardElement);

    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card,
        billing_details: {
          name: 'Test User', // Replace with actual name
          email: 'test@example.com', // Replace with actual email
        },
      },
    });

    setLoading(false);

    if (result.error) {
      toast.error(result.error.message);
    } else if (result.paymentIntent?.status === 'succeeded') {
      toast.success('Payment successful');
      dispatch(clearCart());
    }
  };

  return (
    <div className="w-full max-w-md mx-auto mt-8 p-4 bg-white rounded shadow">
        <h2 className='mt-[16px] mb-[1.5rem] font-semibold'>Proceed to payment</h2>
      <CardElement options={{ style: { base: { fontSize: '16px' } } }} />
      <button
        onClick={handleSubmit}
        disabled={!stripe || loading}
        className="mt-[2rem] bg-black text-white px-4 py-2 rounded hover:bg-black"
      >
        {loading ? 'Processing...' : 'Pay Now'}
      </button>
    </div>
  );
}