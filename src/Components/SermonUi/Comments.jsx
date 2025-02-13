
function Comments() {
    const comments = [
        {
            comment: 'Nice show',
            programId: '1',
            userId: '123',
            name: 'Alex Paul'
        },
        {
            comment: 'Very impressive',
            programId: '1',
            userId: '456',
            name: 'Kelvin Mark'
        },
        {
            comment: 'Keep it up',
            programId: '1',
            userId: '789',
            name: 'James Richard'
        },
        {
            comment: 'Great!',
            programId: '1',
            userId: '321',
            name: 'Sophie Peters'
        }
    ]
  return (
    <div className="flex w-full items-center flex-col">
        <textarea name="" id="comment" className=" w-full resize-none outline-none border-b-[3px] border-b-text-black h-[80px] p-2" placeholder="Add your contribution here" ></textarea>

        <div className="mt-8 flex flex-col gap-3 w-full h-[200px] overflow-x-hidden overflow-y-auto">
            {
                comments.map((item) => (
                    <div className="p-2 w-full flex flex-col border-b-[1px]">
                        <p className="text-[17px] text-black">{item?.comment}</p>
                        <small className="ml-auto text-[13px] text-text-color-3" >{item?.name}</small>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Comments
