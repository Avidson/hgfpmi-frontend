import { useState } from "react"
import Button from "../../Components/Helpers/Button"

function NewTestimony({ testimonyId, setTestimonyId, }) {
    const [ formData, setFormData ] = useState({})

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value })
    }

    const [ loading, setLoading ] = useState(false)
    const handleTestimony = async () => {
        try {
            setLoading(true)
        } catch (error) {
            
        } finally {
            setLoading(false)
        }
    }

  return (
    <div className="flex flex-col gap-4 h-[70vh] overflow-y-auto scrollbar-thin">
      <h2 className="text-[20px] font-semibold text-main-color">{testimonyId ? 'Update Testimony' : 'Enter New Testimony'}</h2>

      <form className="flex flex-col gap-4">
        <div className="inputGroup gap-1">
            <label className="label font-semibold">Name</label>
            <input type="text" id="name" onChange={handleChange} className="input p-2" placeholder="Enter testifier name" />
        </div>
        <div className="inputGroup gap-1">
            <label className="label font-semibold">Role</label>
            <input type="text" id="role" onChange={handleChange} className="input p-2" placeholder="Enter role" />
        </div>
        <div className="inputGroup gap-1">
            <label className="label font-semibold">Description</label>
            <textarea type="text" id="testimony" onChange={handleChange} className="input p-2 h-[85px] resize-none" placeholder="Enter Testimony" ></textarea>
        </div>
        <div className="inputGroup gap-1">
            <label className="label font-semibold">Image</label>
            <input type="file" accept="image/jpeg image/png" className="input p-2" placeholder="Enter Author" />
        </div>
        <div className="inputGroup gap-1">
            <label className="label font-semibold">Video</label>
            <input type="text" className="input p-2" placeholder="Enter video url" />
        </div>

        
        <div className="">{}
            <Button onClick={handleTestimony} disabled={loading} text={`${loading ? 'Uploading...' : testimonyId ? 'Update' : 'Save'}`} />
        </div>
      </form>

    </div>
  )
}

export default NewTestimony
