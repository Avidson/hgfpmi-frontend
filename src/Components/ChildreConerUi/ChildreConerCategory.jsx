import { childrenVideo } from "../../data/ChlidrenVideo"
import { useFetchChildrenProgram } from "../../Helpers/fetch.hooks"
import Spinner from "../Helpers/Spinner"
import ChildrenVideos from "./ChildrenVideos"

function ChildreConerCategory() {
  const { data, isFetching } = useFetchChildrenProgram()
  const video = data || []
  return (
    <div>
      <div className="flex w-full pad1">
        <div className="w-full p-8 rounded-[20px] mt-8 mb-8 bg-main-color-dark text-white flex items-center justify-center">
            <h2 className="text-[32px] tablet:text-[26px] phone:text-[24px] font-semibold">Children Stories</h2>
        </div>
      </div>

      {
        isFetching ? (
          <Spinner />
        ) : (
          <ChildrenVideos data={video} />
        )
      }
    </div>
  )
}

export default ChildreConerCategory
