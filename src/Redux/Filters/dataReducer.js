import { GET_DATA_FAILURE, GET_DATA_REQUEST, GET_DATA_SUCCESS } from "./actionTypes"

const initState = {
    datas: [],
    isLoading: false,
    isError: false,
    isSearch: false
}

export const dataReducer = (state = initState, action) => {
    switch (action.type) {
        case GET_DATA_REQUEST: {
            return {
                ...state,
                isLoading: true,
                isError: false
            }
        }

        case GET_DATA_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                datas: action.payload,
                isSearch: true
            }
        }

        case GET_DATA_FAILURE: {
            return {
                ...state,
                isError: true,
                isLoading: false
            }
        }

        default: return state
    }
}