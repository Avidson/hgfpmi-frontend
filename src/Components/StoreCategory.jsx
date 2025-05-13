import { useState } from "react"
import { category, product } from "../data/store"
import FeatureProducts from "./FeatureProducts"
import Products from "./Helpers/Products"
import { useFetchProducts } from "../Helpers/fetch.hooks"
import { Link } from "react-router-dom"
import Spinner from "./Helpers/Spinner"

function StoreCategory() {
    const { data, isFetching } = useFetchProducts()
    const result = data?.map(item => ({
        name: item.name,
        slug: item.slug
      }));
    const productsCategory = result || [] || category
    const [ catState, setCatState ] = useState('featured')

    const changeCategory = (item) => {
        setCatState(item)
    }

    const allProducts = data || []
    //console.log('datares', allProducts)
    const sortedProducts = allProducts.filter((productItem) => productItem.slug === catState);


  return (
    <div className="w-full">
        <div className="w-full pad1 bg-main-color flex items-center justify-center gap-[2px] flex-wrap tablet:text-[14px]">
            <div onClick={() => changeCategory('featured')} className={`cursor-pointer flex flex-1 items-center justify-center border-b-[4px] ${catState === 'featured' ? 'border-b-color-1' : 'border-b-white'} hover:border-b-color-1 ${catState === 'featured' ? 'text-color-1' : 'text-white'} hover:text-color-1`}>
                    <p className={`text-center font-semibold text-[24px] phone:text-[16px] `}>Featured</p>
            </div>
            {/**
             * 
            {
                productsCategory.map((item, idx) => (
                    <div key={idx} onClick={() => changeCategory(item.slug)} className={`cursor-pointer flex flex-1 items-center justify-center border-b-[4px] ${item?.slug === catState ? 'border-b-color-1' : 'border-b-white'} hover:border-b-color-1 ${item.slug === catState ? 'text-color-1' : 'text-white'} hover:text-color-1`}>
                        <p className={`text-center font-semibold text-[24px] phone:text-[16px] `}>{item.name}</p>
                    </div>
                ))
            }
             */}
        </div>
        
        <div className="">
            {
                isFetching ? (
                    <div className="bg-none w-full flex items-center justify-center">
                        <Spinner />
                    </div>
                ) : (
                    <div className="w-full pad1 mt-12">
                        {
                            catState === 'featured' && (
                                <FeatureProducts data={productsCategory} setCatState={setCatState} />
                            )
                        }
                        {
                            catState === 'oil' && (
                                <Products data={sortedProducts} pagination={true} noPerPage={2} />
                            )
                        }
                        {
                            catState === 'sticker' && (
                                <Products data={sortedProducts} pagination={true} noPerPage={2} />
                            )
                        }
                        {
                            catState === 'adoration-songs' && (
                                <Products data={sortedProducts} pagination={true} noPerPage={2} />
                            )
                        }
                        {
                            catState === 'gospelandsongs' && (
                                <Products data={sortedProducts} pagination={true} noPerPage={2} />
                            )
                        }
                        {
                            catState === 'ministry-wraper' && (
                                <Products data={sortedProducts} pagination={true} noPerPage={2} />
                            )
                        }
                        {
                            catState === 'ministry-candle' && (
                                <Products data={sortedProducts} pagination={true} noPerPage={2} />
                            )
                        }
                        {
                            catState === 'paraclet-water' && (
                                <Products data={sortedProducts} pagination={true} noPerPage={2} />
                            )
                        }
                        <div className="text-center mt-6 mb-12">
                            <Link
                                to="/all-product"
                                className="bg-main-color-dark text-white px-8 py-3 rounded-full font-semibold hover:bg-main-color transition-colors"
                            >
                                See All
                            </Link>
                        </div>
                    </div>
                )
            }
        </div>
    </div>
  )
}

export default StoreCategory