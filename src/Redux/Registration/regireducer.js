
import { REGISTER_REQUEST, REGISTER_SUCCESS, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT_SUCCESS } from "./actiontype"


const initstate = {
    isloggedIn: false,
    isloggedOut: true, 
    isloading: false,
    iserror: false,
    first_name: "",
    last_name: "",
    phone: "",
    email: "",
    email_verified: false,
    image_url: "",
    password: "",
    gender: "",
    address: [],
    favorite: [],
    orders: [],
    cart: [],
    wallet: 0
    
}


function regireducer(state = initstate, {type, payload}) 
{
    console.log(state, type, payload)
    switch(type)
    {
        case REGISTER_REQUEST: 
            {
                return {
                   ...state,
                isloading: true,
                }
            }

        case REGISTER_SUCCESS: 
        {
            return {
                ...state,
                isloggedIn: true,
                isloggedOut: false,
                isloading: false,
                iserror: false,
                first_name: payload.first_name,
                last_name: payload.last_name,
                phone: payload.phone,
                email: payload.email,
                email_verified: false,
                image_url: "",
                password: payload.password,
                gender: payload.gender,
                address: payload.address,
                favorite: payload.favorite,
                orders: payload.orders,
                cart: payload.cart,
                wallet: payload.wallet
            }
        }
        case LOGIN_REQUEST:
            {
                return {
                    ...state,
                   isloading: true
                }
            }

            
        case LOGIN_SUCCESS:
            {
                return {
                    ...state,
                    isloggedIn: true,
                    isloggedOut: false,
                    isloading: false
                }
            }

        case LOGOUT_SUCCESS:
            {
                return {
                    ...state,
                    isloggedOut: true,
                    isloggedIn: false
                }
            }

        default:
            return { 
               ...state
             }   
    }
}

export default regireducer;