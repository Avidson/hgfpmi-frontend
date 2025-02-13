import { useEffect, useState } from "react"
import Button from "../../Components/Helpers/Button"
import StoreProducts from "../Components/Helpers/StoreProducts"
import Navbar from "../Components/Navbar"
import Sidebar from "../Components/Sidebar"
import { category, product } from "../Data/store"

function AdminStore({ setSelectedCard, setProductItemId }) {
  const productData = product
  const cat = category
  const [ selectedCategory, setSelectedCategory ] = useState(cat[0]?.slug)

  const handleNewCategory = () => {
    setSelectedCard('categoryCard')
  }
  const handleNewProduct = () => {
    setProductItemId()
    setSelectedCard('productCard')
  }

  const handleChangeCategory = (value) => {
    setSelectedCategory(value)
  }

  const filteredProducts = productData.filter((item) => item.slug === selectedCategory);
  
  return (
    <div className="relative flex items-start gap-[12px] p-3 h-[100vh] w-[100vw]">

      <div className="fixed rounded-[20px] left-3 top-3 w-[260px] h-[calc(100vh-24px)] bg-main-color z-10">
        <Sidebar />
      </div>

      <div className="relative overflow-x-hidden flex-1 ml-[272px] h-full rounded-[20px] border-[2px] border-red-500">
        <Navbar title={'Store'} />

        <div className="mt-[1rem] p-3">

          <div className="flex items-center gap-5">
            <div className="ml-auto flex items-center gap-3">
              <div className="">
                <Button onClick={handleNewCategory} text={'New Category'} style="p-2" />
              </div>
              <div className="">
                <Button onClick={handleNewProduct} text={'New Product Item'} />
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
              {
                cat?.map((item, idx) => (
                  <div key={idx} onClick={() => handleChangeCategory(item?.slug)} className={`cursor-pointer border-[2px] border-main-color rounded-[100px] px-4 py-1 ${ selectedCategory === item?.slug ? 'bg-main-color text-white' : 'text-main-color' }`}>
                    {item?.name}
                  </div>
                ))
              }
          </div>

          <StoreProducts setProductItemId={setProductItemId} data={filteredProducts} pagination={true} setSelectedCard={setSelectedCard} noPerPage={2} quantityToDisplay={''} />
          
        </div>

      </div>

    </div>
  )
}

export default AdminStore
