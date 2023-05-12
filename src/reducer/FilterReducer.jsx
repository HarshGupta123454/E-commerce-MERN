const filterreducer=(state,action)=>{
    switch (action.type) {
        case "LOAD_FILTER_PRODUCT":
            return{
                ...state,
                filter_product:action.payload,
                all_product:action.payload
            };
        case "SET_GRID_VALUE":
            return{
                ...state,
                grid_view:true
            }
        case "SET_LIST_VALUE":
            return{
            ...state,
            grid_view:false
            }
        default:
            return state
    }
}

export default filterreducer