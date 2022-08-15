const { createContext, useContext, useReducer } = require("react");

const FilterContext = createContext();

export const FilterProvider = ({children}) => {

    const filterReducer = (state,action) => {
        switch(action.type){
            case "FILTER_BY_SEARCH":
                return {...state , bySearch: action.payload}

                case "SORT_BY_DATE":
                    return {...state , byDate: action.payload}

                    case "FILTER_BY_PRIORITY":
                        return {...state , byPriority: action.payload}

                        case "CLEAR_FILTER":
                            return { bySearch:"",
                            byPriority:"",
                            byDate:""}

                            default:
                                return state;
        }
    }


    const [filterState,filterDispatch] = useReducer(filterReducer,{
        bySearch:"",
        byPriority:"",
        byDate:""
    })

    return (
        <FilterContext.Provider value={{filterState,filterDispatch}}>
            {children}
        </FilterContext.Provider>
    )
}

export const useFilter = () => useContext(FilterContext);