import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Button from '../Helpers/Button'
import { donationCourse } from '../../data/donationCourse'
import { loadStripe } from "@stripe/stripe-js";
import toast from 'react-hot-toast';
import PayPalButton from './PayPalButton';


const stripePromise = loadStripe(`pk_live_51P2cbNHw86RH5XOFq3nK5XceBIBgDBKh8nw1P1jg77ogQs17QjbTnMDUYXPZHOFGSzHtQ30VEjFLW7c8GwUEAz3J00f9FWYeMass`)

function OnlineGiving({setSelectedCard}) {
    const { currentUser } = useSelector(state => state.user)
    const user = currentUser?.data
    const [ loading, setLoading ] = useState(false)
    const [ formData, setFormData ] = useState({})
    const [ error, setError ] = useState()

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value })
    }

    const handleGivivng = async () => {
        if (!formData.amount) {
            setError('Enter amount');
            setTimeout(() => setError(), 2000);
            return;
        }
    
        try {
            setLoading(true);
            const stripe = await stripePromise;
    
            // Send the amount to your backend to create a Checkout Session
            const response = await fetch("http://127.0.0.1:8000/donate/create-payment-intent/", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ amount: formData.amount })
            });
    
            const session = await response.json();
    
            if (session.error) {
                throw new Error(session.error);
            }
    
            // Redirect to Stripe Checkout using the session ID
            const { error } = await stripe.redirectToCheckout({
                sessionId: session.id,
            });
    
            if (error) {
                toast.error("Unable to process giving request.");
                console.error("Stripe Checkout error:", error);
            }
        } catch (error) {
            toast.error(error.message || "Something went wrong.");
        } finally {
            setLoading(false);
        }
    };
    
  return (
    <div className=''>
                <div>
                    <div className="inputGroup">
                        <label className="label focusText border-b-0">Giving Amount:</label>
                        <input type="number" id='amount' className="input p-3" placeholder='Enter Givivng amount' onChange={handleChange} />
                    </div>
                    
                    <p className='errorText text-center mt-6'>{error}</p>

                    <Button disabled={loading} onClick={handleGivivng} text={ loading ? 'Please Wait...' : 'Proceed with Giving'} style={'p-1 mt-8'} />
                </div>
                <PayPalButton/>
                <div className='inputGroup'>
                <PayPalButton/>
                <Button disabled={loading} onClick={handleGivivng} text={ loading ? 'Please Wait...' : 'Proceed with Giving'} style={'p-1 mt-8'} />
                
                </div>
    </div>
  

  )
}

export default OnlineGiving