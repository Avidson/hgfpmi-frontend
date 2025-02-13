import React, { useState } from 'react'

function NewProductItem({ productItemId }) {
  const [ formData, setFormData ] = useState({})

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value })
  }
  return (
    <div>
      { productItemId ? 'Update' : 'New' } Product {productItemId}

      <form>
        <div className="inputGroup gap-1">
            <label className="label font-semibold">Name</label>
            <input type="text" className="input p-2" placeholder="Enter Name" />
        </div>
        <div className="inputGroup gap-1">
            <label className="label font-semibold">Price</label>
            <input type="number" className="input p-2" placeholder="$" />
        </div>
        <div className="inputGroup gap-1">
            <label className="label font-semibold">Author</label>
            <input type="text" className="input p-2" placeholder="Enter Author" />
        </div>
        <div className="inputGroup gap-1">
            <label className="label font-semibold">Description</label>
            <textarea type="text" className="input p-2 h-[85px] resize-none" placeholder="Enter Description" ></textarea>
        </div>
        <div className="inputGroup gap-1">
            <label className="label font-semibold">Allow Discount</label>
            <input type="checkbox" className="input p-4 cursor-pointer" placeholder="Enter Author" />
        </div>
        {
          <div className="inputGroup gap-1">
            <label className="label font-semibold">Author</label>
            <input type="text" className="input p-2" placeholder="Enter Author" />
          </div>
        }
      </form>
    </div>
  )
}

export default NewProductItem
