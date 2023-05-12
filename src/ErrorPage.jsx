import React from 'react'
import styled from 'styled-components'
import { Buttons } from './components/Buttons';
import { NavLink } from 'react-router-dom';
export default function ErrorPage() {
  const Wrapper=styled.section`
  .container{
    padding:9rem 0;
    text-align:center;

  }
  h2{
    font-size:9rem;
  }
  h3{
    font-size:4rem;
  }
  p {
    margin: 2rem 0;
  }
  
  `
  return (
    <Wrapper>
      <div className="container">
        <div>
        <h2>404</h2>
      <h3>Error page</h3>
      <p>The page you want to search dosent exist.Please click on button togo back</p>

      <Buttons><NavLink to="/">Click</NavLink></Buttons>
        </div>
      </div>
      
    </Wrapper>
  )
}
