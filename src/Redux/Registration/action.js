
import { REGISTER_REQUEST, REGISTER_SUCCESS, LOGIN_REQUEST, 
    LOGIN_SUCCESS, LOGOUT_SUCCESS, ADDTO_BAG, PAID, UPDATE_QUANTITY } from "./actiontype"
import Axios from "axios"
 

 
 



export const registering = (payload) => dispatch => {
    console.log("registering")
    console.log(payload)

    dispatch(registerrequest())
    Axios.post("http://localhost:1200/user", {
        ...payload,
        emailVerified: false,
        address: [], 
        favorite: [],
        orders: [],
        cart: [],
        wallet: 0
    })
        .then((res) => {
            console.log(res.data.data)
            dispatch(registersuccess(res.data.data))
        })
}



export const loggingout = (payload) => dispatch => {
    //console.log(payload)
    dispatch(logout())
}
 

export const SignInlogin = (payload) => dispatch => {
    // console.log(payload.user.emailVerified)
    //console.log(payload.user.phoneNumber)
    dispatch(loginRequest())

    Axios.get(`http://localhost:1200/user/${payload.user.phoneNumber}`, {

    })
        .then((res) => {
            console.log(res.data.data[0])
            dispatch(loginSuccessfull({...res.data.data[0], emailVerified: payload.user.emailVerified}))
        })
}



const registerrequest = (payload) => {
    return {
        type: REGISTER_REQUEST,
        payload
    } 
}

const registersuccess = (payload) => {
     console.log(payload)
    return {
        type: REGISTER_SUCCESS, 
        payload
    }
}

const loginRequest = (payload) => {
    return {
        type: LOGIN_REQUEST,
        payload
    }
}

const loginSuccessfull = (payload) => {
        // login_success_localstorage({...payload, isloggedIn: true, isloggedOut: false, isloading: false })
    return {
        type: LOGIN_SUCCESS,
        payload
    }
}


const logout = (payload) => {
    //    logout_success_localstorage()
    return {
        type: LOGOUT_SUCCESS,
        payload
    }
}




export const ADDTOBAG = (payload, user_obj) => dispatch => {
  
    Axios.patch(`http://localhost:1200/user/${user_obj.object_id}`, {
         cart: [...user_obj.cart, payload]
    })
        .then((res) => {
            dispatch(updating_bag(res.data.data))
        })
}

const updating_bag = (payload) => {

    return {
        type: ADDTO_BAG,
        payload
    }
}





export const Update_cart = (payload) => dispatch => {
  
     console.log(payload)
     dispatch(updateQuantity(payload))
       
}

const updateQuantity = (payload) => {

    return {
        type: UPDATE_QUANTITY,
        payload
    }
}





export const PAYMENT_DONE = (payload) => dispatch => {     
        console.log(payload)
        dispatch(payment1(payload))
    
}


const payment1 = (payload) => {

    return {
        type: PAID,
        payload
    }
}




