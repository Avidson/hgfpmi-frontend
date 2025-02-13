import { product } from "../data/store";
import { useFetchProducts } from "../Helpers/fetch.hooks";
import Products from "./Helpers/Products";
import { MdKeyboardArrowRight } from "react-icons/md";

function FeatureProducts({data, setCatState}) {
  const { data: productsData, isFetching } = useFetchProducts()

    const allProducts = productsData || []

  return (
    <div className="flex flex-col w-full">
      {
        data.map((item, idx) => {

          const sortedProducts = allProducts.filter(productItem => productItem.slug === item.slug);

          return (
            <div className="flex flex-col mb-10" key={idx}>
              <FilerComponent
                title={item?.name}
                img={item?.img}
                desc={item?.desc}
                linkText={item?.cta}
                setCatState={setCatState}
                slug={item?.slug}
              />

              <div className="mt-6">
                <Products data={sortedProducts} quantityToDisplay={3} slug={item.slug} />
              </div>
            </div>
          );
        })
      }
    </div>
  )
}

export default FeatureProducts

//export a reuseable component here.
export const FilerComponent = ({ img, title, desc, linkText, setCatState, slug }) => {
    const changeCategory = (item) => {
        //alert(`Hello, ${item}`)
        setCatState(item)
    }
    return (
      <div className="relative flex flex-col overflow-hidden h-[180px] bg-gradient-to-r from-black/90 to-transparent">
        <img alt={title} src={`${img}`} className="absolute w-full h-full left-0 top-0 object-cover object-center" />

        <div  className="flex flex-col z-20 absolute w-full h-full left-0 top-0  bg-gradient-to-r from-black/90 to-transparent p-8">
            <h3 className="text-white text-[32px] phone:text-[26px] font-semibold">{title}</h3>
            <p className="text-white mt-[-4px] text-[18px] phone:text-[15px]">{desc}</p>

            <div onClick={() => changeCategory(slug)} className="w-fit p-2 bg-black flex items-center gap-1 mt-4 text-white ml-8 cursor-pointer">
                <p>
                    {linkText}
                </p>
                <MdKeyboardArrowRight className="text-[32px]" />
            </div>
        </div>

      </div>
    );
  };