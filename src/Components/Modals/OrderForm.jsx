import React, { useState } from 'react'
import { CgCloseO } from 'react-icons/cg'
import Button from '../Helpers/Button'

function OrderForm({ setOrderForm, productId, setProductId }) {

    const closePopup = () => {
        setProductId()
        setOrderForm((prev) => !prev)
    }

    const [ formData, setFormData ] = useState({})
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value })
    }

    const [ loading, setLoading ] = useState(false)
    const handleOrder = async () => {
        try {
            setLoading(true)
        } catch (error) {
            
        } finally {
            setLoading(false)
        }
    }
  return (
    <div className={`popup-overlay z-[9999] fixed flex items-center justify-center top-0 left-0 w-[100vw] h-[100vh] bg-transparent-bg-2 transition-transform duration-500 ease-in-out transform translate-y-0`}
    >
      <div className={`z-50 w-[550px] phone:max-w-[94%] h-auto m-auto rounded-[12px] border-[1px] px-[24px] py-4 flex flex-col gap-6 bg-white shadow-xl`}>
        <div className='w-full flex flex-col'>
          <div onClick={closePopup} className='ml-auto p-1 cursor-pointer'>
            <CgCloseO className='text-[32px] phone:text-[28px]' />
          </div>
          <div className='mt-2 flex flex-col gap-8 max-h-[70vh] overflow-y-auto'>
            {/**CONTENT */}

            <div className="inputGroup">
                <label className="label focusText border-b-0">Product ID:</label>
                <input type="text" id='productId' className="input p-3" readOnly disabled defaultValue={productId} />
            </div>

            <div className="inputGroup">
                <label className="label focusText border-b-0">Product Name:</label>
                <input type="text" id='productName' className="input p-3" readOnly disabled defaultValue={''} />
            </div>

            <div className="inputGroup">
                <label className="label focusText border-b-0">Product Quantity:</label>
                <input type="number" id='productQuantiy' className="input p-3" />
            </div>

            <div className="inputGroup">
                <label className="label focusText border-b-0">Customer Name</label>
                <input type="text" id='customerName' onChange={handleChange} className="input p-3"  />
            </div>

            <div className="inputGroup">
                <label className="label focusText border-b-0">Customer Address</label>
                <input type="text" id='customerAddress' onChange={handleChange} className="input p-3"  />
            </div>

            <div className="inputGroup">
                <label className="label focusText border-b-0">Customer Address</label>
                <input type="text" id='customerCountry' onChange={handleChange} className="input p-3" defaultValue={`Nigeria`} disabled readOnly value={`Nigeria`} />
            </div>

            <div className="inputGroup">
                <label className="label focusText border-b-0">Customer Phone Number</label>
                <input type="text" id='customerPhoneNumber' onChange={handleChange} className="input p-3"  />
            </div>

            <Button disabled={loading} text={ loading ? 'Please wait...' : `submit`} />

          </div>
        </div>
      </div>
    </div>
  )
}

export default OrderForm
