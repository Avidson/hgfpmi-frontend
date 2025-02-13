import { useEffect, useState } from "react";
import Button from "../Helpers/Button";
import PrayingHandImg from '../../assests/prayingHand.jpg'
import { prayerRequest } from "../../Helpers/apis";
import toast from "react-hot-toast";

function PrayerRequest() {
    const [formData, setFormData] = useState({ gender: 'male' }); 
    const [ error, setError ] = useState({})
    const [ loading, setLoading ] = useState(false)

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    useEffect(() => {
        console.log(formData);
        console.log(error)
    }, [formData, error]);

    const handleGender = (e) => {
        const selectedGender = e.target.value;
        setFormData({ ...formData, gender: selectedGender });
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        if(loading){
            return;
        }
        if(!formData?.name){
            setError({ name: 'Please Enter your name' })
            setTimeout(() => {
                setError({ name: '' })
                return;
            }, 3000)
        }
        if(!formData?.gender){
            setError({ gender: 'Please Select a gender' })
            setTimeout(() => {
                setError({ gender: '' })
                return;
            }, 3000)
        }
        if(!formData?.prayerRequest){
            setError({ prayerRequest: 'Please Enter your prayer request' })
            setTimeout(() => {
                setError({ prayerRequest: '' })
                return;
            }, 3000)
        }
        try {
            setLoading(true)
            const res = await prayerRequest(formData)
            if(res.data.message){
                toast.success(res?.data?.message)
                setFormData({ name: "", gender: "male", prayerRequest: "" });
            }
        } catch (error) {
            toast.error('Unable to submit prayer request')
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="relative flex flex-col items-center justify-center">

            <div className="w-full pad1 font-light border-b-[3px] mb-12 py-4">
                    <h2 className="w-full text-[36px] tablet:text-[32px] phone:text-[21px] font-semibold text-main-color">My Prayer Request Card</h2>
            </div>

            <div className="pad1 flex items-center justify-center gap-16 tablet:gap-12 tablet:flex-col">
                <div className="bg-main-color text-white p-4 rounded-[4px] flex flex-1 flex-col text-[18px]">
                    <p>
                        “We have such a High Priest, who sits at the right of the throne of the Divine Majesty in heaven” (Hebrews 8:1). “And so he is able, now and always, to save those who come to God through him, because he lives forever to plead with God for them” (Hebrews 17:25). Jesus will never turn us away in our time of need. His Love and Mercy is boundless. Let us together lift up our prayers to him in complete faith.
                        <br />
                        <br />
                        If you wish to submit a prayer request, please follow the details in the form to fill up your details. The Prayer form is open 24 hours a day, 7 days a week, so you can send your request anytime, from anywhere!
                    </p>

                    <img alt="praying hand" src={PrayingHandImg} className="rounded-[20px] w-[300px] mt-9" />
                </div>

                <form className="flex-1 w-full phone:w-[94%] shadow-xl rounded-[10px] p-5">
                    <h3 className="mb-12 text-[24px] font-semibold">Prayer Card</h3>
                    <div className="inputGroup gap-[6px] mb-2">
                        <label className="label font-semibold text-main-color">Full Name</label>
                        <input id="name" value={formData?.name} onChange={handleChange} type="text" placeholder="Enter Full Name" className="input p-2" />
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
                                    onChange={handleGender}
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
                                    onChange={handleGender}
                                />
                                <label htmlFor="female" className="label font-semibold text-main-color">Female</label>
                            </div>
                        </div>
                        <p className="text-[14px] font-semibold text-main-color-dark">{error?.gender}</p>

                    </div>

                    <div className="inputGroup gap-[6px] mb-2">
                        <label className="label font-semibold text-main-color">Prayer Request</label>
                        <textarea 
                            id="prayerRequest" 
                            value={formData?.prayerRequest}
                            onChange={handleChange} 
                            className="input resize-none p-2 h-[150px]"
                        >
                            
                        </textarea>
                        <p className="text-[14px] font-semibold text-main-color-dark">{error?.prayerRequest}</p>
                    </div>

                    <Button disabled={loading} onClick={handleSubmit} text={`${loading ? 'Submitting...' : 'Submit'} `} />
                </form>
            </div>

        </div>
    );
}

export default PrayerRequest;
