

import { REGISTER_REQUEST, REGISTER_SUCCESS } from "./actiontype"
import Axios from "axios"



export const registering = (payload) => dispatch => {
    console.log("registering")
    console.log(payload)

    dispatch(registerrequest())
    Axios.post("",{
        ...payload
    })
    .then((res) => {
        console.log(res.data)
        dispatch(registersuccess(res.data))
    })
}



const registerrequest = (payload) => {
      return {
          type: REGISTER_REQUEST,
          payload
      }
}

const registersuccess = (payload) => {
    return {
        type: REGISTER_SUCCESS,
        payload
    }
}