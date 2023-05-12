import { createContext, useContext, useReducer, useEffect } from "react"
import reducer from "../reducer/ProductReducer"
import axios from "axios"
const initialstate = {
    isLoading: true,
    isError: false,
    products: [],
    featureProduct: [],
    isSingleLoading:false,
    singleProduct:{},
    isSingleError:false
}
const AppContext = createContext();

const API = "https://api.pujakaitem.com/api/products";
const AppProvidor = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialstate);
    const getProduct = async (url) => {
        try {
            const res = await axios.get(url);
            const products = await res.data
            dispatch({type:"SET_API_DATA",payload:products})
        } catch (error) {
            dispatch({type:"SET_ERROR"})
        }
    }

    //2nd api call for single procuvt
    const getSingleProduct=async(url)=>{
        dispatch({type:"SET_SINGLE_LOADING"});
        try {
            console.log(url)
            const res=await axios.get(url);
            const data=await res.data;
            dispatch({type:"SET_SINGLE-LOADING",payload:data})
        } catch (error) {
            dispatch({type:"SET_SINGLE_ERROR"})
        }
    }
    useEffect(() => {
        getProduct(API)
    },[])
    return (
        <AppContext.Provider value={{ ...state,getSingleProduct}}>
      {children}
    </AppContext.Provider>
    )

}
const useProductContext = () => {
    return useContext(AppContext);
};
export { AppProvidor, AppContext, useProductContext };
