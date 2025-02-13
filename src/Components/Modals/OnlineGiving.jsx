import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Button from '../Helpers/Button'
import { donationCourse } from '../../data/donationCourse'
import { loadStripe } from "@stripe/stripe-js";
import toast from 'react-hot-toast';

const stripePromise = loadStripe(`pk_test_51MccUgHurLamFWf3FKDVsNtR9PSBU5TaoD1ADv63jS3U8JuD0imwCABxyOEyvDgtw6k00HZMTrICZx8KR3PVlGLL008m4Ju8s3`)

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
            const response = await fetch("https://your-backend.com/create-checkout-session", {
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
    </div>
  )
}

export default OnlineGiving