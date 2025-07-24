import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { checkout } from "../../Helpers/apis";
import { clearCart } from "../../redux/cart/cartSlice";
import { loadStripe } from '@stripe/stripe-js'
import StripeCardPayment from "../Helpers/StripeCardPayment";

const stripePromise = loadStripe('pk_live_51P2cbNHw86RH5XOFq3nK5XceBIBgDBKh8nw1P1jg77ogQs17QjbTnMDUYXPZHOFGSzHtQ30VEjFLW7c8GwUEAz3J00f9FWYeMa') // Replace with your Stripe publishable key

function Checkout({ setSelectedCard }) {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({ items: cart.products });
  const [loading, setLoading] = useState(false);
  const [clientSecret, setClientSecret] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  }
    const handleCheckout = async () => {
        if (loading) {
        return;
        }
        if (!formData?.first_name) {
            toast.error('Enter First Name');
            return;
        }
        if (!formData?.last_name) {
            toast.error('Enter Last Name');
            return;
        }
        if (!formData?.email) {
            toast.error('Enter Email Address');
            return;
        }
        if (!formData?.postal_code) {
            toast.error('Enter Postal Code');
            return;
        }
        if (!formData?.city) {
            toast.error('Enter City');
            return;
        }
        
        try {
            setLoading(true);
            console.log('REDA', formData)
            const res = await checkout(formData)

            console.log(res)
            if(res.status === 201 && res.data) {
                toast.success('Checkout Successful');
                //dispatch(clearCart());
                //setSelectedCard(null);
                const clientSecretData = res.data.clientSecret
                //add component here instead
                setClientSecret(res.data.clientSecret);
                //const stripe = await stripePromise
                //await stripe.redirectToCheckout({ sessionId: clientSecret })
            } else {
                toast.error(res?.detail || 'Unable to checkout');
            }
        } catch (error) {
            
        } finally {
            setLoading(false);
        }
    };

    const handleBack = () => {
        setSelectedCard("shoppingCart");
    }
  return (
    <>
        {
            clientSecret ? (
                <div className="relative w-full flex flex-col items-center max-h-[85vh] overflow-y-auto ">
                    <StripeCardPayment clientSecret={clientSecret} formData={formData} />
                </div>
            ) : (
                <div className="relative w-full flex flex-col items-center max-h-[85vh] overflow-y-auto ">
                    <div className="relative w-full flex items-center justify-center">
                        <div className="fixed flex flex-col items-center justify-center gap-1 bg-white">
                            <h3 className="focusText border-b-0 w-full text-[24px] phone:text-[20px] text-center">
                            Checkout
                            </h3>

                            <p className="text-text-color-2 font-semibold text-[19px]">
                                Cart subtotal ({cart.products?.length} Items): $
                                {Number(cart.total).toFixed(2).toLocaleString()}
                            </p>
                        </div>
                    </div>

                    <div className="mt-16 w-full flex flex-col gap-4">
                        <div className="inputGroup gap-0">
                            <label className="label font-semibold" >First Name:</label>
                            <input type="text" id="first_name" onChange={handleChange} placeholder="First name" className="input" />
                        </div>
                        <div className="inputGroup gap-0">
                            <label className="label font-semibold" >Last Name:</label>
                            <input type="text" id="last_name" onChange={handleChange} placeholder="Last name" className="input" />
                        </div>
                        <div className="inputGroup gap-0">
                            <label className="label font-semibold" >Email:</label>
                            <input type="text" id="email" onChange={handleChange} placeholder="Email address" className="input" />
                        </div>
                        <div className="inputGroup gap-0">
                            <label className="label font-semibold" >Phone Number:</label>
                            <input type="text" id="phone_number" onChange={handleChange} placeholder="Phone number" className="input" />
                        </div>
                        <div className="inputGroup gap-0">
                            <label className="label font-semibold" >Postal Code:</label>
                            <input type="text" id="postal_code" onChange={handleChange} placeholder="Postal code" className="input" />
                        </div>
                        <div className="inputGroup gap-0">
                            <label className="label font-semibold" >City:</label>
                            <input type="text" id="city" onChange={handleChange} placeholder="city" className="input" />
                        </div>
                        <div className="inputGroup gap-0">
                            <label className="label font-semibold">Address:</label>
                            <input type="text" id="address" onChange={handleChange} placeholder="Address" className="input" />
                        </div>

                        <hr className="w-full border-2 mt-8 mb-2" />

                        <div className="flex items-center gap-4 w-full">
                            {
                                !loading && (
                                    <div
                                        onClick={handleBack}
                                        className="w-full text-center link border-2 border-main-color text-main-color hover:bg-main-color hover:text-white duration-500 rounded-[4px] p-3"
                                    >
                                        Back
                                    </div>
                                )
                            }
                            <div onClick={handleCheckout} className="w-full text-center border-2 b border-main-color text-color-1 bg-main-color hover:bg-transparent hover:text-main-color duration-500 rounded-[4px] p-3 cursor-pointer">
                                { loading ? 'Please wait...' : 'Checkout'}
                            </div>
                        </div>

                    </div>
                
                </div>

            )
        }
    </>
  )
}

export default Checkout