import Button from '../Helpers/Button'

function MassReqestPayout() {
  return (
    <div className='flex flex-col text-center items-center justify-center'>
      <h1 className='font-semibold text-main-color text-[20px] phone:text-[17px] tablet:text-[18px]'>Mass Request Has been submitted Successful</h1>
      <p className='mt-6 text-[16px]'>Click button to make paymey</p>

        <div className="flex w-full mt-8">
            <Button text={'Make payment'} />
        </div>
    </div>
  )
}

export default MassReqestPayout
