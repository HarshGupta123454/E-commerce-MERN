import React, { useState } from "react";
import styled from "styled-components";
import { FaCheck } from "react-icons/fa";
import { Buttons } from "./Buttons";
import { FaMinus, FaPlus } from "react-icons/fa";
import { Usecartcontext } from "../context/Cartcontext";
import { Uselogincontext } from "../context/Logincontext";
import { toast } from "react-toastify";
const Wrapper = styled.section`
  .colors p {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .btnStyle {
    width: 2rem;
    height: 2rem;
    background-color: #000;
    border-radius: 50%;
    margin-left: 1rem;
    border: none;
    outline: none;
    opacity: 0.5;
    cursor: pointer;

    &:hover {
      opacity: 1;
    }
  }
  .active {
    opacity: 1;
  }
  .button {
    background: transparent;
    border: none;
    cursor: pointer;
    margin: 1rem 0;
  }
  span {
    padding: 0 10px;
    font-size: 2rem;
  }
`;
export default function Addtocart({ product }) {
  const { setCartItem } = Usecartcontext();
  const { isAuthenticated } = Uselogincontext();
  console.log(product);
  const { stock, colors, id } = product;
  const [color, setColor] = useState(colors[0]);
  const [quantity, setquantity] = useState(1);
  const handleClick = async () => {
    if (isAuthenticated) {
      const products = {
        products: {
          product_id: id,
          quantity,
          color,
        },
      };
      try {
        await toast.promise(setCartItem(products), {
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
    } else {
      toast.info("must be login");
    }
  };
  const increase = () => {
    quantity < stock ? setquantity(quantity + 1) : setquantity(stock);
  };
  const decrease = () => {
    quantity <= 1 ? setquantity(1) : setquantity(quantity - 1);
  };
  return (
    <>
      <Wrapper>
        <div className="color">
          <p>
            Color:
            {colors.map((ele, index) => {
              return (
                <button
                  key={index}
                  style={{ backgroundColor: ele }}
                  className={color === ele ? "btnStyle active" : "btnStyle"}
                  onClick={() => setColor(ele)}
                >
                  {color === ele ? <FaCheck className="checkStyle" /> : null}
                </button>
              );
            })}
          </p>
        </div>
        <div className="add-to-cart">
          <div className="add">
            <button onClick={decrease} className="button">
              <FaMinus />
            </button>
            <span>{quantity}</span>
            <button onClick={increase} className="button">
              <FaPlus />
            </button>
          </div>
          <Buttons onClick={handleClick}>Add To Cart</Buttons>
        </div>
      </Wrapper>
    </>
  );
}
