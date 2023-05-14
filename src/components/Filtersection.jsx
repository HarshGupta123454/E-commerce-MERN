import React from 'react'
import styled from 'styled-components'
import { Usefiltercontext } from '../context/Filtercontext'
import { FaCheck } from "react-icons/fa";
import Formatprice from "../Helper/Formatprice"
import { Buttons } from './Buttons';
const Wrapper=styled.section`
position: static;
padding:  5rem 0;
display: flex;
flex-direction: column;
gap: 3rem;

h3{
    font-weight: bold;
    font-size: 3rem;
}

.filter-search{
    width: 80%;

    input{
        padding: 0.5rem 1rem;
        width: 90%;
    }
}
.category-data,.company-filter{
    div{
    display: flex;
    flex-direction: column;
    gap: 1.7rem;
    margin: 2rem 0;
    align-items: flex-start;

}
}
button{
        border: none;
        background-color: ${({ theme }) => theme.colors.white};
        text-transform: capitalize;
        cursor: pointer;

        &:hover {
          color: ${({ theme }) => theme.colors.btn};
        }
    }
.active{
        border-bottom: 1px solid #000;
        color: ${({ theme }) => theme.colors.btn};
}
.btn-style {
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
  .active{
        opacity:1;
    }
  .filter-color{
    div{
        display: flex;
    }
  }
  .btn-style--all {
    background-color: transparent;
    text-transform: capitalize;
    border: none;
    cursor: pointer;
  }
  .price-range {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    input {
      margin: 0.5rem 0 1rem 0;
      padding: 0;
      box-shadow: none;
      cursor: pointer;
    }
  }
  .filter-clear{
    .btn{
        background-color: ${({ theme }) => theme.colors.btn};

        &:hover{
            background-color: transparent;
        }
    }
  }
`


export default function Filtersection() {
    const {filtervalue,all_product,filter,clearFilters}=Usefiltercontext();
    const uniquedata=(attr)=>{
        let data=all_product.map((ele)=>{
            return ele[attr]
        })
        if(attr==="colors"){
            data=data.flat()
        }
        return ["all",...new Set(data)]
    }
    const category=uniquedata("category");
    const company=uniquedata("company")
    const colors=uniquedata("colors")
  return (
    <Wrapper>
        <div className="filter-search">
        <input type="text" name='text' onChange={(e)=> filtervalue(e)} autoComplete='off' placeholder='search'/>
        </div>
        <div className="category-data">
            <h3>Category</h3>
            <div>
                {category.map((ele,index)=>{
                    return(
                        <button
                        className={ele===filter.category?"active":""}
                        type='button'
                        key={index}
                        name='category'
                        value={ele}
                        onClick={(e)=>filtervalue(e)}
                        >
                            {ele}
                        </button>
                    )
                })}
            </div>
        </div>
        <div className="company-filter">
            <h3>Company</h3>
            <div>
            {company.map((ele,index)=>{
                    return(
                        <button
                        className={ele===filter.company?"active":""}
                        type='button'
                        key={index}
                        name='company'
                        value={ele}
                        onClick={(e)=>filtervalue(e)}
                        >
                            {ele}
                        </button>
                    )
                })}
            </div>
        </div>
        <div className="filter-color">
            <h3>colors</h3>
            <div>
                {colors.map((ele,index)=>{
                    if(ele==="all"){
                        return(
                            <button
                        key={index}
                        type='button'
                         className={ele===filter.color?'btn-style--all active':'btn-style--all'}
                         name='color'
                         value={ele}
                         onClick={(e)=>filtervalue(e)}
                         >{ele}</button>
                        )

                    }
                    return(
                        <button
                        key={index}
                        type='button'
                        style={{backgroundColor:ele}}
                         className={ele===filter.color?'btn-style active':'btn-style'}
                         name='color'
                         value={ele}
                         onClick={(e)=>filtervalue(e)}
                         >{ele===filter.color?<FaCheck/>:""}</button>
                    )
                })}

            </div>

        </div>
        <div className="price-range">
            <h3>price</h3>
            <p>
            <Formatprice price={filter.price}/>
            </p>
            <input type="range" min={filter.minPrice} max={filter.maxPrice} name='price' value={filter.price} onChange={(e)=> filtervalue(e)} />
        </div>

        <div className="filter-clear">
        <Buttons className="btn" onClick={clearFilters}>
          Clear Filters
        </Buttons>
      </div>
    </Wrapper>
  )
}
