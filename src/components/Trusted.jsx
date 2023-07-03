import React from "react";
import styled from "styled-components";

export default function Trusted() {
  const Wrapper = styled.section`
    padding: 5rem 0;
    margin: 8rem 0;
    background-color: ${({ theme }) => theme.colors.bg};
    h3 {
      text-align: center;
      text-transform: capitalize;
      color: ${({ theme }) => theme.colors.text};
      font-size: 2rem;
      font-weight: bold;
    }
    .brand-section {
      margin-top: 3.2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-direction: row;
      .svg-image {
        width: 8rem;
        height: auto;
        aspect-ratio: 3/4;
        mix-blend-mode: color-burn;
      }
    }
    @media (max-width: ${({ theme }) => theme.media.mobile}) {
      .brand-section {
        flex-direction: column;
      }
    }
  `;
  return (
    <Wrapper>
      <div className="container">
        <h3>Trusted By 1000+ Companies</h3>
        <div className="brand-section">
          <div className="slide">
            <img
              src="adidas-9.svg"
              alt="trusted-brands"
              className="svg-image"
            />
          </div>
          <div className="slide">
            <img src="nike-11.svg" alt="trusted-brands" className="svg-image" />
          </div>
          <div className="slide">
            <img src="oster.svg" alt="trusted-brands" className="svg-image" />
          </div>
          <div className="slide">
            <img src="bru-1.svg" alt="trusted-brands" className="svg-image" />
          </div>
          <div className="slide">
            {" "}
            <img src="conco.svg" alt="trusted-brands" className="svg-image" />
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
