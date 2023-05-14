import {createContext,useContext,useReducer,useEffect, useState} from "react";
import { useProductContext } from "./Productcontext";
import reducer from "../reducer/FilterReducer"
const Filtercontext=createContext();
const initialState={
    filter_product:[],
    all_product:[],
     grid_view:false,
     sorting_value: "",
     filter:{
        text:"",
        category:"all",
        company:"all",
        color:"all",
        maxPrice: 0,
        price: 0,
        minPrice: 0,
     }
}


export const Filterappcontext=({children})=>{
    const [state,dispatch]=useReducer(reducer,initialState);
    const {products}=useProductContext()

    const setGridView=()=>{
        return dispatch({type:"SET_GRID_VALUE",payload:state})
    }
    const setListView=()=>{
        return dispatch({type:"SET_LIST_VALUE",payload:state})
    }
    const sortvalue=(e)=>{
        const value=e.target.value;
        return dispatch({type:"CHANGE_SORTING_VALUE",payload:value})
    }

    const filtervalue=(e)=>{
        const {name,value}=e.target;
        return dispatch({type:"CHANGE-FILTER-VALUE",payload:{name,value}})
    }
    const clearFilters=()=>{
        return dispatch({type:"CLEAR_FILTERS"})
    }
    //for filter product
    useEffect(()=>{
        dispatch({type:"SORTING_PRODUCT"})
    },[state.sorting_value,state.filter])
    
    //for sort the data
    useEffect(()=>{
        dispatch({type:"FILTER-PRODUCT"})

    },[state.filter,])
    //to load all the product for gird and list view


    useEffect(()=>{
        dispatch({type:"LOAD_FILTER_PRODUCT",payload:products})
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[products])


    return(
        <Filtercontext.Provider value={{...state,setGridView,setListView,sortvalue,filtervalue,clearFilters}}>
            {children}
        </Filtercontext.Provider>
    )
}

export const Usefiltercontext=()=>{
    return useContext(Filtercontext)
}