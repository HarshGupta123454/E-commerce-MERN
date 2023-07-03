import React from "react";
import styled from "styled-components";
import { Buttons } from "./Buttons";
import { NavLink } from "react-router-dom";
export default function EmptyCart() {
  const Wrapper = styled.section`
    .container {
      padding: 9rem 0;
      text-align: center;
      height: 70vh;
      width: 100vw;
      display: flex;
      justify-content: center;
    }
    .inside-container {
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
      width: 50vw;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    }
    h2 {
      font-size: 9rem;
    }
    h3 {
      font-size: 4rem;
    }
    p {
      margin: 2rem 0;
    }
  `;
  return (
    <Wrapper>
      <div className="container">
        <div className="inside-container">
          <h2>OOPS</h2>
          <h3>Your Cart is Empty</h3>
          <p>Click the button to shop now</p>

          <Buttons>
            <NavLink to="/products">Click</NavLink>
          </Buttons>
        </div>
      </div>
    </Wrapper>
  );
}
