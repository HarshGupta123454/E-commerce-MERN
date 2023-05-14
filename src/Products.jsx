import React from 'react'
import styled from 'styled-components'
import Productlist from './components/Productlist'
import Sort from './components/Sort'
import Filtersection from './components/Filtersection'
const Wrapper=styled.section`
  .grid-filter-column{
    grid-template-columns: 0.2fr 1fr;
  }
`
export default function Products() {
  return (
   <Wrapper>
    <div className="container grid-filter-column grid">
      <div>
        <Filtersection/>
      </div>
      <div className="product-view-sort">
        <div className="sort-filter">
          <Sort/>
        </div>
        <div className="main-product">
          <Productlist/>
        </div>
      </div>
    </div>
   </Wrapper>
  )
}
