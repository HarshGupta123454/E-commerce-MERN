const ProductReducer=(state,action)=>{
    switch(action.type){
        case "SET_LOADING":
            return{
                ...state,
                isLoading:true,
            };
        case "SET_API_DATA":
            const featuredata=action.payload.filter((ele)=>{
                return ele.featured === true;
            })
            return{
                ...state,
                isLoading:false,
                products:action.payload,
                featureProduct:featuredata
            }
        case "SET_ERROR":
            return {
                ...state,
                isLoading: false,
                isError: true,
              };
        case "SET_SINGLE-LOADING": 
            return{
                ...state,
                isSingleLoading:true,
                singleProduct:action.payload
            };
        case "SET_SINGLE_PRODUCT":
            return{
                ...state,
                isSingleLoading:false,
                singleProduct:action.payload
            };
        case "SET_SINGLE_ERROR":
            return{
                isSingleLoading:false,
                isSingleError:true
            }
        default:
            return state

    }
}
export default ProductReducer