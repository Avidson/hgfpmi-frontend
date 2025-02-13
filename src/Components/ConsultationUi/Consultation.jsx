import { useEffect, useState } from "react";
import Button from "../Helpers/Button";
import 'react-phone-input-2/lib/style.css'; // Import default styles
import PhoneInput from 'react-phone-input-2';

function Consultation() {
    const [formData, setFormData] = useState({ gender: 'male', mobileNumber: '' });
    const [error, setError] = useState({});
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handlePhoneChange = (value) => {
        setFormData({ ...formData, mobileNumber: value });
    };

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
        if (!formData?.gender) {
            setError({ gender: 'Please Select a gender' });
            setTimeout(() => setError({ gender: '' }), 3000);
            return;
        }
        if (!formData?.country) {
            setError({ country: 'Please Enter your country' });
            setTimeout(() => setError({ country: '' }), 3000);
            return;
        }
        if (!formData?.mobileNumber) {
            setError({ mobileNumber: 'Please Enter your mobile number' });
            setTimeout(() => setError({ mobileNumber: '' }), 3000);
            return;
        }
        if (!formData?.email) {
            setError({ email: 'Please Enter your email address' });
            setTimeout(() => setError({ email: '' }), 3000);
            return;
        }
        if (!formData?.resonToSeeFada) {
            setError({ resonToSeeFada: 'Please Enter your prayer request' });
            setTimeout(() => setError({ resonToSeeFada: '' }), 3000);
            return;
        }
        try {
            setLoading(true);
            //const res = await sendPrayerRequest(formData)
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {console.log('object', formData)}, [formData])

    return (
        <div className="relative flex flex-col items-center justify-center">
            <div className="w-full pad1 font-light border-b-[3px] mb-12 py-4">
                <h2 className="w-full text-[36px] tablet:text-[32px] phone:text-[21px] font-semibold text-main-color">
                    Consultation Card Request
                </h2>
            </div>

            <div className="pad1">
                <form className="w-[500px] phone:w-[94%] shadow-xl rounded-[10px] p-5">
                    <h2 className="w-full text-[21px] font-semibold text-main-color mb-7">My Consulation Request Card</h2>

                    <div className="inputGroup gap-[6px] mb-2">
                        <label className="label font-semibold text-main-color">Full Name</label>
                        <input id="name" onChange={handleChange} type="text" className="input p-2" />
                        <p className="text-[14px] font-semibold text-main-color-dark">{error?.name}</p>
                    </div>

                    <div className="inputGroup gap-[6px] mb-2">
                        <label className="label font-semibold text-main-color">Gender</label>
                        <div className="flex gap-4">
                            <div className="flex items-center gap-[2px]">
                                <input
                                    type="radio"
                                    id="male"
                                    name="gender"
                                    value="male"
                                    checked={formData.gender === 'male'}
                                    onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                                />
                                <label htmlFor="male" className="label font-semibold text-main-color">Male</label>
                            </div>

                            <div className="flex items-center gap-[2px]">
                                <input
                                    type="radio"
                                    id="female"
                                    name="gender"
                                    value="female"
                                    checked={formData.gender === 'female'}
                                    onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                                />
                                <label htmlFor="female" className="label font-semibold text-main-color">Female</label>
                            </div>
                        </div>
                        <p className="text-[14px] font-semibold text-main-color-dark">{error?.gender}</p>
                    </div>

                    <div className="inputGroup gap-[6px] mb-2">
                        <label className="label font-semibold text-main-color">Country</label>
                        <input id="country" onChange={handleChange} type="text" className="input p-2" />
                        <p className="text-[14px] font-semibold text-main-color-dark">{error?.country}</p>
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
                        <label className="label font-semibold text-main-color">Email</label>
                        <input id="email" onChange={handleChange} type="text" className="input p-2" />
                        <p className="text-[14px] font-semibold text-main-color-dark">{error?.email}</p>
                    </div>

                    <div className="inputGroup gap-[6px] mb-2">
                        <label className="label font-semibold text-main-color">Reason to see FADA</label>
                        <textarea
                            id="resonToSeeFada"
                            onChange={handleChange}
                            className="input resize-none p-2 h-[150px]"
                        />
                        <p className="text-[14px] font-semibold text-main-color-dark">{error?.resonToSeeFada}</p>
                    </div>

                    <Button onClick={handleSubmit} text={'Submit'} />
                </form>
            </div>
        </div>
    );
}

export default Consultation;
