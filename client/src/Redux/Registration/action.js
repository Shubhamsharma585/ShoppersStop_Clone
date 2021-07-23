
import {
    REGISTER_REQUEST, REGISTER_SUCCESS, LOGIN_REQUEST,
    LOGIN_SUCCESS, LOGOUT_SUCCESS, ADDTO_BAG, PAID, UPDATE_QUANTITY, UPDATE_ADDRESS
} from "./actiontype"
import Axios from "axios"







export const registering = (payload) => dispatch => {
    console.log("registering")
    console.log(payload)

    dispatch(registerrequest())
    Axios.post("https://ss-backend.vercel.app/user", {
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

    Axios.get(`https://ss-backend.vercel.app/user/${payload.user.phoneNumber}`, {

    })
        .then((res) => {
            console.log(res.data.data[0])
            dispatch(loginSuccessfull({ ...res.data.data[0], emailVerified: payload.user.emailVerified }))
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

    Axios.patch(`https://ss-backend.vercel.app/user/${user_obj.object_id}`, {
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



export const ADD_ADDRESS = (payload, user_obj) => dispatch => {
    console.log(payload, user_obj)
    Axios.patch(`https://ss-backend.vercel.app/user/${user_obj.object_id}`, {
        address: [...user_obj.address, payload]
    })
        .then((res) => {
            dispatch(address(res.data.data))
        })

}


const address = (payload) => {
    return {
        type: UPDATE_ADDRESS,
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




