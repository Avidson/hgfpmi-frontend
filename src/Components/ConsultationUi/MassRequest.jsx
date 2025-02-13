import { useEffect, useState } from "react";
import Button from "../Helpers/Button";
import PhoneInput from 'react-phone-input-2';
import { massRequest } from "../../Helpers/apis";
import toast from "react-hot-toast";


function MassRequest({ setSelectedCard }) {
    const [formData, setFormData] = useState({ });
    const [error, setError] = useState({});
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handlePhoneChange = (value) => {
        setFormData({ ...formData, mobileNumber: value });
    };
    // Get today's date in YYYY-MM-DD format
    const today = new Date().toISOString().split('T')[0];

    useEffect(() => {console.log('object mass request', formData)}, [formData])

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (loading) {
            return;
        }
        if (!formData?.name) {
            setError({ name: 'Please Enter your name' });
            setTimeout(() => setError({ name: '' }), 3000);
            return;
        }
        if (!formData?.date) {
            setError({ date: 'Please Enter Mass Date' });
            setTimeout(() => setError({ date: '' }), 3000);
            return;
        }
        if (!formData?.mobileNumber) {
            setError({ mobileNumber: 'Please Enter your mobile number' });
            setTimeout(() => setError({ mobileNumber: '' }), 3000);
            return;
        }
        if (!formData?.reasonForMassRequest) {
            setError({ reasonForMassRequest: 'Please Enter your reason for mass request' });
            setTimeout(() => setError({ reasonForMassRequest: '' }), 3000);
            return;
        }
        if (!formData?.price || formData?.price < 10) {
            setError({ price: 'Enter price atleat $10' });
            setTimeout(() => setError({ price: '' }), 3000);
            return;
        }
        try {
            setLoading(true);
            const res = await massRequest(formData)
            if(res.data.message){
                toast.success(res.data.message)
                setFormData({ name: '', date: '', mobileNumber: '', reasonForMassRequest: ''})
                //setSelectedCard('massRequestPayout')
            }
        } catch (error) {
            toast.error('Unable to submit mass request')
            //console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const handleDonate = () => {
        setSelectedCard('donations')
    }

  return (
    <div className="relative flex flex-col items-center justify-center">
    <div className="w-full pad1 font-light border-b-[3px] mb-12 py-4">
        <h2 className="w-full text-[36px] tablet:text-[32px] phone:text-[21px] font-semibold text-main-color">
            Mass Request Card Form
        </h2>
    </div>

    <div className="pad1">
        <form className="w-[500px] phone:w-[94%] shadow-xl rounded-[10px] p-5">
            <h2 className="w-full text-[21px] font-semibold text-main-color mb-7">Mass Request Card</h2>

            <div className="inputGroup gap-[6px] mb-2">
                <label className="label font-semibold text-main-color">Full Name</label>
                <input id="name" onChange={handleChange} type="text" className="input p-2" />
                <p className="text-[14px] font-semibold text-main-color-dark">{error?.name}</p>
            </div>

            <div className="inputGroup gap-[6px] mb-2">
                <label className="label font-semibold text-main-color">Date</label>
                <input id="date" min={today} onChange={handleChange} type="date" className="input p-2" />
                <p className="text-[14px] font-semibold text-main-color-dark">{error?.date}</p>
            </div>

            <div className="inputGroup gap-[6px] mb-2 overflow-hidden">
                        <label className="label font-semibold text-main-color">Mobile Number</label>
                        <PhoneInput
                            country={'us'}
                            value={formData.mobileNumber}
                            onChange={handlePhoneChange}
                            inputClass="custom-phone-input" // Custom class for input
                            containerClass="custom-container" // Custom class for container
                            buttonClass="custom-button" // Custom class for flag dropdown button
                            dropdownClass="custom-dropdown" // Custom class for dropdown menu
                            inputProps={{
                                className: 'ml-8 flex items-center w-[94%] p-2 phone:p-3 rounded-[8px] border-[2px] border-text-color-2 text-[18px] phone:text-[16px] text-text-color-3 font-medium'
                            }}

                        />
                        <p className="text-[14px] font-semibold text-main-color-dark">{error?.mobileNumber}</p>
                    </div>
            
                    <div className="inputGroup gap-[6px] mb-2">
                        <label className="label font-semibold text-main-color">Reason for Mass Request</label>
                        <textarea
                            id="reasonForMassRequest"
                            onChange={handleChange}
                            className="input resize-none p-2 h-[150px]"
                        />
                        <p className="text-[14px] font-semibold text-main-color-dark">{error?.reasonForMassRequest}</p>
                    </div>

            <div className="inputGroup gap-[6px] mb-2">
                <label className="label font-semibold text-main-color">Price Giving</label>
                <input id="price" onChange={handleChange} type="number" className="input p-2" placeholder="$10 and above" />
                <p className="text-[14px] font-semibold text-main-color-dark">{error?.price}</p>
            </div>



            <Button disabled={loading} onClick={handleSubmit} text={`${loading ? 'Submitting...' : 'Submit'}`} />
            <br />
            <br />
            <div className="flex mr-auto w-[50%] small-phone:w-[70%] smaller-phone:w-[85%]">
                <div 
                    className={`w-full p-4 rounded-[0px] font-font-2 text-[21px] phone:text-[17px] bg-[#9B111E] cursor-pointer duration-500 hover:bg-[#800000] text-white font-semibold flex items-center justify-center text-center`}
                    onClick={handleDonate}
                >
                    Donate
                </div>
            </div>
        </form>
    </div>
</div>
  )
}

export default MassRequest
