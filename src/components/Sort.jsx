import React from 'react'
import { BsFillGridFill, BsList } from "react-icons/bs";
import { Usefiltercontext } from '../context/Filtercontext';
import styled from 'styled-components';
const Wrapper=styled.section`
  display: flex;
  justify-content: space-between;
  margin-top: 2.5rem;

  .sort-list--grid{
    display: flex;
    justify-content: space-between;
    gap: 2rem;

    .sort-btn{
        border: none;
        padding: 0.8rem 1rem;
        display: flex;
        justify-content: center;
        cursor: pointer;
    }
    .icon {
      font-size: 1.6rem;
    }
    .active {
      background-color: ${({ theme }) => theme.colors.black};
      color: #fff;
    }
  }
`
export default function Sort() {
    const {grid_view,setGridView,setListView,filter_product}=Usefiltercontext()
  return (
    <Wrapper className='sort-section'>
        {/* for 1st column */}
        <div className="sort-list--grid">
            <button className={grid_view?"active sort-btn":"sort-btn"} onClick={setGridView}>
            <BsFillGridFill className="icon" />
            </button>
            <button
          className={!grid_view ? "active sort-btn" : "sort-btn"}
          onClick={setListView}>
          <BsList className="icon" />
        </button>
        </div>

        <div className="product-data">
            <p>{`${filter_product.length} Product Available`}</p>
        </div>
        <div className="sort-selection">
            sortdata
        </div>

    </Wrapper>
  )
}
