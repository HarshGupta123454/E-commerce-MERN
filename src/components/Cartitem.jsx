import React from "react";
import FormatPrice from "../Helper/Formatprice";
import { FaTrash } from "react-icons/fa";
import CartAmountToggle from "./CartAmountToggel";
import { Usecartcontext } from "../context/Cartcontext";
import { toast } from "react-toastify";
const CartItem = ({
  id,
  name,
  images,
  color,
  price,
  quantity,
  stock,
  product_id,
}) => {
  const { deleteCartItem } = Usecartcontext();
  //to handle delete
  const handleClick = async (id) => {
    const data = { product_id: id };
    try {
      await toast.promise(deleteCartItem(data), {
        pending: {
          render() {
            return "please wait";
          },
        },
        success: {
          render({ data }) {
            return `${data.data.msg}`;
          },
        },
        error: {
          render({ data }) {
            // When the promise reject, data will contains the error
            return `${data}`;
          },
        },
      });
    } catch (error) {
      console.log(error);
    }
  };
  const setDecrease = () => {
    // quantity > 1 ? setAmount(amount - 1) : setAmount(1);
  };

  const setIncrease = () => {
    // quantity < stock ? setAmount(amount + 1) : setAmount(stock);
  };

  return (
    <div className="cart_heading grid grid-five-column">
      <div className="cart-image--name">
        <div>
          <figure>
            <img src={images[0].url} alt={id} />
          </figure>
        </div>
        <div>
          <p>{name}</p>
          <div className="color-div">
            <p>color:</p>
            <div
              className="color-style"
              style={{ backgroundColor: color, color: color }}
            ></div>
          </div>
        </div>
      </div>
      {/* price   */}
      <div className="cart-hide">
        <p>
          <FormatPrice price={price} />
        </p>
      </div>

      {/* Quantity  */}
      <div>
        <CartAmountToggle
          amount={quantity}
          setDecrease={setDecrease}
          setIncrease={setIncrease}
        />
      </div>
      {/* //Subtotal */}
      <div className="cart-hide">
        <p>
          <FormatPrice price={price * quantity} />
        </p>
      </div>

      <div>
        <button
          style={{ background: "none", border: "none" }}
          onClick={() => handleClick(product_id)}
        >
          <FaTrash className="remove_icon" />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
