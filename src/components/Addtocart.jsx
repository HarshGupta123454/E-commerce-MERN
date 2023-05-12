import React,{useState}from 'react'
import styled from 'styled-components';
import { FaCheck } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { Buttons } from './Buttons';
import { FaMinus, FaPlus } from "react-icons/fa";
const Wrapper=styled.section`
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
  .button{
    background: transparent;
    border: none;
    cursor: pointer;
    margin: 1rem 0;
  }
  span{
    padding: 0 10px;
    font-size:2rem;
  }
`
export default function Addtocart({product}) {
    console.log(product)
    const {stock,colors}=product
    const [color, setColor] = useState(colors[0]);
    const [amount,setamount]=useState(1);
    const increase=()=>{
        amount<stock?setamount(amount+1):setamount(stock)
    }
    const decrease=()=>{
        amount<=1?setamount(1):setamount(amount-1)
    }
  return (
    <>
    <Wrapper>
        <div className="color">
        <p>Color:
        {colors.map((ele,index)=>{
            return(
                <button
                key={index}
                style={{backgroundColor:ele}}
                className={color === ele ? "btnStyle active" : "btnStyle"}
                onClick={() => setColor(ele)}
                >
                    {color === ele ? <FaCheck className="checkStyle" /> : null}
                </button>
            )
        })}
        </p>
        </div>
        <div className="add-to-cart">
            <div className="add">
                <button onClick={decrease} className='button'><FaMinus/></button>
                <span>{amount}</span>
                <button onClick={increase} className='button'><FaPlus/></button>
            </div>
            <NavLink to="/cart">
                <Buttons>Add To Cart</Buttons>
            </NavLink>
        </div>
    </Wrapper>

    </>
  )
}
