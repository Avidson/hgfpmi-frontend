import { previousMessages } from "../../data/previousMessages"
import { useFetchMessages } from "../../Helpers/fetch.hooks"
import MessagesSection from "../Helpers/MessagesCard"
import Spinner from "../Helpers/Spinner"

function PreviousMessages() {
  const { data, isFetching } = useFetchMessages({ live: false })
  const messages = data || []
  return (
    <div className="pad1">
        {
          isFetching ? (
            <Spinner />
          ) : (
            <MessagesSection data={messages} />
          )
        }
    </div>
  )
}

export default PreviousMessages
