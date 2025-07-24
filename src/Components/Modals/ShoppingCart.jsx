import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, updateQuantity } from "../../redux/cart/cartSlice";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import { CgRemove, CgAdd } from "react-icons/cg";

function ShoppingCart({ setSelectedCard }) {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({});
  //console.log("CART", cart.products);

  const handleQuantity = (type, productId) => {
    const productIndex = cart.products.findIndex(
      (item) => item.id === productId
    );

    if (productIndex !== -1) {
      const currentQuantity = cart.products[productIndex].quantity;
      const newQuantity =
        type === "dec" ? Math.max(currentQuantity - 1, 1) : currentQuantity + 1;

      // Dispatch the updateQuantity action
      dispatch(updateQuantity({ productId, quantity: newQuantity }));
    }
  };

  const handleRemoveFromCart = (idx) => {
    dispatch(removeFromCart(idx));
  };

  const proceedToCheckout = () => {
    setSelectedCard("checkout");
  }

  return (
    <div className="relative w-full flex flex-col items-center max-h-[85vh] overflow-y-auto">
      <div className="fixed flex flex-col items-center justify-center gap-1 bg-white">
        <h3 className="focusText border-b-0 w-full text-[24px] phone:text-[20px] text-center">
          View Cart
        </h3>

        <p className="text-text-color-2 font-semibold text-[19px]">
          Cart subtotal ({cart.products?.length} Items): $
          {Number(cart.total).toFixed(2).toLocaleString()}
        </p>
      </div>

      <div className="mt-16">
        {cart.products.length <= 0 ? (
          <div className="flex flex-col items-center justify-center">
            <span>
              <MdOutlineRemoveShoppingCart className="text-[35px] text-main-color" />
            </span>
            <p className="text-[20px] font-bold mt-3 text-text-color-2">
              Your Cart is Empty
            </p>
          </div>
        ) : (
          cart.products?.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center justify-start gap-4 pb-4 pt-4 border-b-[2px] border-b-transparent-bg"
            >
              <div className="w-[25%]">
                <img src={item?.img} alt={`${item?.name}`} />
              </div>

              <div>
                <div className="flex flex-col gap-3">
                  <span className="flex gap-[2px]  text-[18px]">
                    Product: <p className="font-semibold">{item?.name}</p>
                  </span>
                  <span className="text-[18px] flex items-center gap-[2px]">
                    ID: <p className="font-semibold text-[14px]">{item?.id}</p>
                  </span>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="flex flex-col gap-3">
                    <p className="font-semibold text-[18px]">Quantity:</p>
                    <div className="flex items-center gap-4">
                      <button
                        onClick={() => handleQuantity("dec", item?.id)}
                        className="text-[28px] cursor-pointer"
                      >
                        <CgRemove className="icon" />
                      </button>
                      <span className="number">{item?.quantity}</span>
                      <button
                        onClick={() => handleQuantity("inc", item?.id)}
                        className="text-[28px] cursor-pointer"
                      >
                        <CgAdd className="icon" />
                      </button>
                    </div>
                  </div>

                  <span className="amount">
                    $ {item?.price * item?.quantity}
                  </span>

                  <button
                    onClick={() => handleRemoveFromCart(idx)}
                    className="bg-black border-[1px] hover:border-black p-1 text-white rounded-[4px] hover:bg-transparent hover:text-black"
                  >
                    Remove from cart
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      <hr className="w-full border-2 mt-8 mb-2" />

      <div className="flex items-center gap-4">
        <a
          href="/shop"
          className="text-center link border-2 border-main-color text-main-color hover:bg-main-color hover:text-white duration-500 rounded-[4px] p-3"
        >
          Continue Shopping
        </a>
        {cart.products.length > 0 && (
          <div onClick={proceedToCheckout} className="text-center border-2 b border-main-color text-color-1 bg-main-color hover:bg-transparent hover:text-main-color duration-500 rounded-[4px] p-3 cursor-pointer">
            Proceed to Checkout
          </div>
        )}
      </div>
    </div>
  );
}

export default ShoppingCart;