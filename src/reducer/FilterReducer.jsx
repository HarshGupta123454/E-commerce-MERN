const filterreducer=(state,action)=>{
    switch (action.type) {
        case "LOAD_FILTER_PRODUCT":
            const data=action.payload.map((ele)=> ele.price);
            const maxPrice=Math.max(...data)
            return{
                ...state,
                filter_product:[...action.payload],
                all_product:[...action.payload],
                filter:{...state.filter,maxPrice,price:maxPrice}
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
        case "CHANGE_SORTING_VALUE":
            return{
                ...state,
                sorting_value:action.payload
            }
        case "SORTING_PRODUCT":
            let tempstorage=[...state.filter_product]
            function sortingFunction(a,b){
                if(state.sorting_value==="a-z"){
                    return a.name.localeCompare(b.name)
                }
                if(state.sorting_value==="z-a"){
                    return b.name.localeCompare(a.name)
                }
                if(state.sorting_value==="lowest"){
                    return a.price-b.price
                }
                if(state.sorting_value==="highest"){
                    return b.price-a.price
                }
            }
            const newdata=tempstorage.sort(sortingFunction)
            return{
                ...state,
                filter_product:newdata
            }
            case "CHANGE-FILTER-VALUE":
                const {name,value}=action.payload;
                return{
                    ...state,
                    filter:{
                        ...state.filter,
                        [name]:value
                    }
                }
            case "FILTER-PRODUCT":
                const {text,category,company,color,price}=state.filter;
                const {all_product}=state;
                let temp=[...all_product];
                if(text){
                    console.log("text call")
                    temp=temp.filter((ele)=> ele.name.toLowerCase().includes(text))
                }
                if(category!=="all"){
                    console.log(category)
                    temp=temp.filter((ele)=> ele.category===category)
                }
                if(company!=="all"){
                    console.log(category)
                    temp=temp.filter((ele)=> ele.company===company)
                }
                if(color!=="all"){
                    console.log(color)
                    temp=temp.filter((ele)=> ele.colors.includes(color))
                }
                if(price){
                    temp=temp.filter((ele)=> ele.price<=price)
                }
                return {
                    ...state,
                    filter_product:temp
                }
                case "CLEAR_FILTERS":
                    return {
                         ...state,
                         filter: {
                        ...state.filters,
                        text: "",
                        category: "all",
                        company: "all",
                        color: "all",
                        maxPrice: 0,
                        price: state.filter.maxPrice,
                        minPrice: state.filter.maxPrice,
        },
      };
            default:
                 return state
    }
}

export default filterreducer