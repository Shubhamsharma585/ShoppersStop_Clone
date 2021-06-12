
import { REGISTER_REQUEST, REGISTER_SUCCESS, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT_SUCCESS } from "./actiontype"
import Axios from "axios"


//local storage
const login_success_localstorage = (data) => {
    localStorage.setItem('userObj',JSON.stringify(data))
}
const logout_success_localstorage = () => {
    localStorage.clear()
}
//var loadVal = JSON.Parse(localStorage.getItem('name'))
//local storage





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
            console.log(res.data)
            dispatch(registersuccess(res.data))
        })
}



export const loggingout = (payload) => dispatch => {
    //console.log(payload)
    dispatch(logout())
}


export const SignInlogin = (payload) => dispatch => {
    console.log(payload.user.emailVerified)
    console.log(payload.user.phoneNumber)
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
       login_success_localstorage(payload)
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
        login_success_localstorage(payload)
    return {
        type: LOGIN_SUCCESS,
        payload
    }
}


const logout = (payload) => {
       logout_success_localstorage()
    return {
        type: LOGOUT_SUCCESS,
        payload
    }
}