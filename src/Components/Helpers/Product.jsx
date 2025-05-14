import { MdAddShoppingCart } from "react-icons/md";
import { MdOutlineViewTimeline } from "react-icons/md";
import { IoIosAddCircleOutline } from "react-icons/io";
import { IoIosRemoveCircleOutline } from "react-icons/io";
import { useState } from "react";
import { addProduct } from "../../redux/cart/cartSlice";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import OrderForm from "../Modals/OrderForm";

function Product({data}) {
    console.log('object darata', data)
    const dispatch = useDispatch()
    const [ productquantity, setProductQuantity ] = useState(1)

    function truncateText(text, maxLength) {
        if (text?.length <= maxLength) {
            return text;
        }
    
        const truncated = text?.slice(0, maxLength);
        const lastSpaceIndex = truncated?.lastIndexOf(' ');
        
        // Adjust to the last space to avoid cutting off in the middle of a word
        const result = lastSpaceIndex > -1 ? truncated.slice(0, lastSpaceIndex) : truncated;
    
        return result + '...';
    }


    function calculateDiscountedPrice(originalPrice, discountPercentage) {
        const discountAmount = (originalPrice * discountPercentage) / 100;
        
        const discountedPrice = originalPrice - discountAmount;
        
        return discountedPrice.toFixed(2);
    }

    const discountPayableAmount = calculateDiscountedPrice(data?.price, data?.discountPercernt)

    const handleQuantity = (type) => {
        if(type === 'dec'){
            productquantity > 1 && setProductQuantity(productquantity - 1)
        } else{
            setProductQuantity(productquantity + 1)
        }
    }

    const handleAddToCart = () => {
        //send product id to backend as well as token or userID
        dispatch(
            addProduct({ ...data, id: data?.id, price: data?.isDiscountAllowed ? data?.discountPrice : data?.price,  quantity: productquantity })
        )
        toast.success('Item addded to cart')
    }

    const [ orderForm, setOrderForm ] = useState(false)
    const [ productId, setProductId] = useState()
    const handleOrderForm = (id) => {
        setProductId(id)
        setOrderForm((prev) => !prev)
    }

  return (
    <div className="w-[450px] phone:w-[94%] overflow-hidden shadow-xl rounded-[8px]">
        <div className="w-full h-auto relative overflow-x-hidden">
            <img alt={data?.name} src={data?.image} className={`w-full h-auto top-0 left-0`} />
        </div>

        <div className="flex w-full flex-col p-6">
            <div className="flex items-center gap-1 justify-between">
                <h3 className="text-text-color-2 font-semibold text-[21px]">{truncateText(data?.name, 20)}</h3>
                <div>
                    {
                        data?.discount_available ? (
                            <span className="flex gap-[2px]">
                                <small className="text-text-color-2 line-through text-[15px] font-semibold">${data?.price}</small>
                                <p className="text-color-1 font-bold text-[18px]" >
                                    ${data?.discount_price}
                                </p>
                            </span>
                        ) : (
                            <span className="text-color-1 font-bold text-[18px]">
                                ${data?.price}
                            </span>
                        )
                    }
                </div>
            </div>

            <div className="flex items-center justify-between text-text-color-3">
            <span
                dangerouslySetInnerHTML={{
                    __html: truncateText(data?.description, 25)
                }}
                ></span>
                <span>{data?.type}</span>
            </div>

            <hr className="w-full border-[1px] rounded-[10px] border-text-color-3 my-4" />
            
            <div className="flex items-center justify-center gap-3 mb-2">
                <div 
                    onClick={() => handleQuantity('dec')}
                    className="text-[32px] phone:text-[28px] cursor-pointer text-text-color-2 font-bold transition-all duration-300 hover:text-main-color"
                >
                    <IoIosRemoveCircleOutline />
                </div>
                <span className="text-[19px] phone:text-[16px] font-semibold">{productquantity}</span>
                <div 
                    onClick={() => handleQuantity('inc')}
                    className="text-[32px] phone:text-[28px] cursor-pointer text-text-color-2 font-bold transition-all duration-300 hover:text-main-color"
                >
                    <IoIosAddCircleOutline />
                </div>
            </div>

            <div className="flex gap-3">
                <div onClick={handleAddToCart} className="w-full p-2 rounded-[0px] font-font-2 text-[19px] phone:text-[16px] bg-main-color cursor-pointer duration-500 hover:bg-main-color-dark text-white font-semibold flex gap-1 items-center justify-center text-center">
                    <MdAddShoppingCart />
                    Add To Cart
                </div>

               {/*  <div onClick={() => handleOrderForm(data?.id)} className="w-full p-2 rounded-[0px] font-font-2 text-[19px] phone:text-[16px] bg-main-color cursor-pointer duration-500 hover:bg-main-color-dark text-white font-semibold flex gap-1 items-center justify-center text-center">
                    Order within Nigeria
                </div> */}
            </div>
        
        </div>

        {
            orderForm && (
                <OrderForm setOrderForm={setOrderForm} setProductId={setProductId} productId={productId} />
            )
        }
    </div>
  )
}

export default Product