import {createContext,useContext,useReducer,useEffect} from "react";
import { useProductContext } from "./Productcontext";
import reducer from "../reducer/FilterReducer"
const Filtercontext=createContext();
const initialState={
    filter_product:[],
    all_product:[],
     grid_view:false
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
    useEffect(()=>{
        dispatch({type:"LOAD_FILTER_PRODUCT",payload:products})
        console.log(state)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[products])
    return(
        <Filtercontext.Provider value={{...state,setGridView,setListView}}>
            {children}
        </Filtercontext.Provider>
    )
}

export const Usefiltercontext=()=>{
    return useContext(Filtercontext)
}