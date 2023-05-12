import React from 'react'
import styled from "styled-components"
import {Buttons} from "./Buttons"
import { NavLink } from "react-router-dom"
export default function HeroSection(props) {
    const Wrapper = styled.nav`
    padding:10rem 0;
    .hero-section-data{
        p{
            margin:2rem 0;
        }
        h1{
            text-transform:capitalize;
            font-weight:bold;
            line-height:normal;
        }
        .intro-data{
            margin-bottom:0;
        }
    }
    .hero-section-image{
        width:100%;
        height:auto;
        display:flex;
        justify-content:center;
        align-items:center;

        figure{
            position:relative;

            &::after{
                content:"";
                width:60%;
                height:70%;
                background-color: rgba(81, 56, 238, 0.4);
                position:absolute;
                left: 45%;
                top: -5rem;
                z-index: -1;
            }
        }
        .image-style{
            width:90%;
            height:auto;
        }
    }
    @media (max-width: ${({ theme }) => theme.media.mobile}){
        .grid{
            gap:10rem;
        }
    }
    `
    return (
        <Wrapper>

            <div className="container">
                <div className="grid grid-two-column">
                    <div className="hero-section-data">
                        <p className="intro-data">welcome to <h1>my {props.data}</h1></p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
                            atque temporibus veniam doloribus libero ad error omnis voluptates
                            animi! Suscipit sapiente.</p>
                        <NavLink>
                            <Buttons>Show now</Buttons>
                        </NavLink>
                    </div>
                    <div className="hero-section-image">
                        <figure>
                            <img src="images/hero.jpg" alt='' className='image-style' />
                        </figure>
                    </div>

                </div>
            </div>
        </Wrapper>
    )
}
