import React,{useState} from 'react'
import styled from 'styled-components'
import {NavLink} from "react-router-dom"
import { FiShoppingCart } from "react-icons/fi";
import { CgMenu, CgClose } from "react-icons/cg";
export default function Nav() {
    const[menuIcon,setMenuIcon]=useState(false);
    const Nav=styled.nav`
    .navbar-lists{
        display:flex;
        align-items:center;
        gap:4em;

        .navbar-link{
            &:link,
            &:visited{
                display:inline-block;
                text-decoration:none;
                font-size:1.5rem;
                font-weight:500;
                text-transform:uppercase;
                color: ${({ theme }) => theme.colors.black};
                transition: color 0.3s linear;
            }
            &:hover,
        &:active {
          color: ${({ theme }) => theme.colors.helper};
        }
        }
    
    }
    .close-outline {
        display: none;
      }
    .cart-trolley--link{
        // position:relative
        
        .cart-trolley {
            // position:relative;
            font-size: 2.7rem;
          }
          .cart-total--item {
            width: 1.6rem;
            height: 1.7rem;
            font-size:small;
            position: absolute;
            background-color: #000;
            color: #000;
            border-radius: 50%;
            display: grid;
            place-items: center;
            top: 2%;
            right: 2%;
            background-color: ${({ theme }) => theme.colors.helper};
        }
        
    }
    .mobile-navbar-btn{
        display:none;
    }
    @media (max-width: ${({ theme }) => theme.media.mobile}){
        .mobile-navbar-btn{
            display:inline-block;
            z-index:999;
            font-size:3.4rem;
            border:${({theme})=> theme.media.mobile}

            .mobile-nav-icon{
                
                color:${({theme})=> theme.colors.black}
            }
        }
        .active .mobile-nav-icon{
            display:none;
            top:2%;
            right:6%;
            position:absolute;
            z-index:999;
            color:${({theme})=> theme.colors.black}

        }
        .active .close-outline{
            display:inline-block
        }
        .navbar-lists{
            width:100vw;
            height:100vh;
            position:absolute;
            top:10%;
            left:0;
            display:flex;
            align-items:center;
            flex-direction:column;
            background-color:#fff;
            justify-content:center
            visibility: hidden;
            opacity: 0;
            
            // transform: translateX(100%);
            transition:all3s linear;
            z-index:999;
        }
        .active .navbar-lists {
            visibility: visible;
            opacity: 1;
            transform: translateX(0);
            z-index: 999;
            // transform-origin: right;
            transition: all 3s linear;
            .navbar-link {
              font-size: 4.2rem;
            }
        }  
        .cart-trolley--link{
            .cart-trolley {
                
                font-size: 3.7rem;
              }

            .cart-total--item{
                position:relative;
                width: 2.6rem;
                height: 2.7rem;
                right:-63%;
                font-size:16px;
            }
        }
    }
        
    }
    `
  return (
    <Nav>
        <div className={menuIcon ? "navbar active" : "navbar"}>
            <ul className="navbar-lists">
                <li className="navbar-items"><NavLink className="navbar-link" to="/">Home</NavLink> </li>
                <li className="navbar-items"><NavLink className="navbar-link" to="/about">About</NavLink> </li>
                <li className="navbar-items"><NavLink className="navbar-link" to="/products">Products</NavLink> </li>
                <li className="navbar-items"><NavLink className="navbar-link" to="/contact">Contact</NavLink> </li>
                <li>
            <NavLink to="/cart" className="navbar-link cart-trolley--link">
              <span className="cart-total--item"> 10 </span>
              <FiShoppingCart className="cart-trolley" />
            </NavLink>
          </li>
            </ul>
            <div className="mobile-navbar-btn">
          <CgMenu
            name="menu-outline"
            className="mobile-nav-icon"
            onClick={() => setMenuIcon(true)}
          />
          <CgClose
            name="close-outline"
            className="mobile-nav-icon close-outline"
            onClick={() => setMenuIcon(false)}
          />
        </div>
        </div>
    </Nav>
  )
}
