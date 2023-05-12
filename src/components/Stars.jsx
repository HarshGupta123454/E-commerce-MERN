import React from 'react'
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import styled from 'styled-components';
const Wrapper=styled.section`
    .icon-style {
    display: flex;
    gap: 0.2rem;
    align-items: center;
    justify-content: flex-start;

    .icon {
      font-size: 2rem;
      color: orange;
    }

    .empty-icon {
      font-size: 2.6rem;
    }
    p {
      margin: 0;
      padding-left: 1.2rem;
    }
  }
`
const arr=[0,1,2,3,4]

export default function Stars({stars,review}) {
  return (
    <Wrapper>
        <div className="icon-style">
        {arr.map((ele,index)=>{
            let number=index+0.5;
            return(
                <span key={index}>
                    {stars>=index+1?(<FaStar className="icon" />):stars>=number?(<FaStarHalfAlt className="icon" />):(<AiOutlineStar className="icon" />)}
                </span>
            )
        })}
        <p>({review} customer reviews)</p>
        </div>
    </Wrapper>
  )
}
