import React from 'react'
import styled from 'styled-components'
import { TbTruckDelivery } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";

export default function Services() {
    const Wrapper = styled.section`
    .grid{
        display: grid;
        gap:4rem;
        margin: 0 auto;
    }
    .service-1,
    .service-2,
    .service-3{
        width:34rem;
        margin: 0 auto;
        height:auto;
        display:flex;
        justify-content:center;
        flex-direction:column;
        align-items:center;
        background: ${({ theme }) => theme.colors.bg};
        text-align:center;
        border-radius: 2rem;
        box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
    }
    h3 {
        margin-top: 1.4rem;
        font-size: 2rem;
      }
    .service-2{
        gap: 4rem;
        background-color: transparent;
        box-shadow: none;

        .service-column-two {
            background: ${({ theme }) => theme.colors.bg};
            width: inherit;
            border-radius: 2rem;
            box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;

            div {
              display: flex;
              flex-direction: row;
              justify-content: center;
              align-items: center;
              gap: 1rem;
              padding:1rem;

              h3 {
                margin-top: 0 !important;
                font-size: 2rem;
            }
            }
        }
    }
    .icon {
        /* font-size: rem; */
        width: 7rem;
        height: 7rem;
        padding: 2rem;
        border-radius: 50%;
        background-color: #fff;
        color: #5138ee;
    }
    @media (max-width: ${({ theme }) => theme.media.mobile}){

    }
    `
    return (
        <Wrapper>
            <div className="container">
                <div className="grid grid-three-column">
                    <div className="service-1">
                        <TbTruckDelivery className="icon" />
                        <h3>Super Fast and Free Delivery</h3>
                    </div>
                    <div className="service-2">
                        <div className="service-column-two">
                            <div>
                                <MdSecurity className="icon" />
                                <h3>Non-contact Shipping</h3>
                            </div>
                        </div>
                        <div className="service-column-two">
                            <div>
                                <GiReceiveMoney className="icon" />
                                <h3>Money-back Guaranteed</h3>
                            </div>
                        </div>
                    </div>
                    <div className="service-3">
                    <div>
              <RiSecurePaymentLine className="icon" />
              <h3>Super Secure Payment System</h3>
            </div>
                    </div>
                </div>
            </div>

        </Wrapper>
    )
}
