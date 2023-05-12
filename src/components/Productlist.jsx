import React from 'react'
import { Usefiltercontext } from '../context/Filtercontext'
import Gridview from './Gridview'
import Listview from './Listview'
export default function Productlist() {
    const {filter_product,grid_view}=Usefiltercontext()
  if(grid_view===true){
    return(
        <Gridview filter_product={filter_product}/>
   
        
    )
  }
  if(grid_view===false){
    return(
        <Listview filter_product={filter_product} />
    )
  }
}
