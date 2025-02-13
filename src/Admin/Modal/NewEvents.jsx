import { useEffect, useState } from "react";
import Button from "../../Components/Helpers/Button";

function NewEvents({ editEventId }) {
    const [todayDate, setTodayDate] = useState("");

    useEffect(() => {
        const today = new Date().toISOString().split("T")[0];
        setTodayDate(today);
    }, []);

    const eventType = [
        {
            name: 'Program and Event',
            slug: 'programandevent'
        },
        {
            name: 'Mission and Outreach',
            slug: 'missionandloutreach'
        }
    ]

    const [ formData, setFormData ] = useState({})
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value })
    }

    const [ loading, setIsLoading ] = useState(false)
    const handleNewEvent = async () => {
        try {
            setIsLoading(true)
        } catch (error) {
            
        } finally {
            setIsLoading(false)
        }
    }
  return (
    <div className="flex flex-col gap-4 h-[70vh] overflow-y-auto scrollbar-thin">
      <h2 className="text-[20px] font-semibold text-main-color">New Program/Events: {editEventId}</h2>

      <form className="flex flex-col gap-4">
        <div className="inputGroup gap-1">
            <label className="label font-semibold">Title</label>
            <input type="text" id="title" onChange={handleChange} className="input p-2" placeholder="Enter Title" />
        </div>
        <div className="inputGroup gap-1">
            <label className="label font-semibold">Description</label>
            <textarea type="text" id="description" onChange={handleChange} className="input p-2 h-[85px] resize-none" placeholder="Enter Description" ></textarea>
        </div>
        <div className="inputGroup gap-1">
            <label className="label font-semibold">Author</label>
            <input type="text" id="author" onChange={handleChange} className="input p-2" placeholder="Enter Author" />
        </div>
        <div className="inputGroup gap-1">
            <label className="label font-semibold">Date</label>
            <input type="date" min={todayDate} className="input p-2" placeholder="Enter Date" />
        </div>
        <div className="inputGroup gap-1">
            <label className="label font-semibold">Event Type</label>
            <select name="" id="" className="input p-2">
                <option value="">-- SELECT EVENT TYPE </option>
                {
                    eventType.map((item) => (
                        <option value={item?.slug}>{item?.name}</option>
                    )) 
                }
            </select>
        </div>
        <div className="inputGroup gap-1">
            <label className="label font-semibold">Cover Image</label>
            <input type="file" accept="image/png image/jpeg" className="input p-2" placeholder="Enter Author" />
        </div>
        <div className="inputGroup gap-1">
            <label className="label font-semibold">Video</label>
            <input type="text" id="videoUrl" onChange={handleChange} className="input p-2" placeholder="Enter video url" />
        </div>

        
        <div className="">
            <Button onClick={handleNewEvent} text={`${loading ? 'Uploading...' : editEventId ? 'Update' : 'Upload'}`} />
        </div>
      </form>

    </div>
  )
}

export default NewEvents
