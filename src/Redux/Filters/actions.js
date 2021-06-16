import { GET_DATA_FAILURE, GET_DATA_REQUEST, GET_DATA_SUCCESS } from "./actionTypes"
import axios from 'axios'

export const getDataRequest = () => {
    return {
        type: GET_DATA_REQUEST
    }
}

export const getDataSuccess = (payload) => {
    return {
        type: GET_DATA_SUCCESS,
        payload
    }
}

export const getDataFailure = () => {
    return {
        type: GET_DATA_FAILURE
    }
}
// categories all data
export const getDatas = (category) => (dispatch) => {
    dispatch(getDataRequest())

    if (category == "men" || category == "women" || category == "kids") {
        return axios.get('http://localhost:1200/product', {
            params: {
                c: category,
            }
        })
            .then(res => dispatch(getDataSuccess(res.data)))
            .catch(err => dispatch(getDataFailure()))
    } else {
        return axios.get('http://localhost:1200/product', {
            params: {
                name: category,
            }
        })
            .then(res => dispatch(getDataSuccess(res.data)))
            .catch(err => dispatch(getDataFailure()))
    }

}




//filter by offer

export const getDatasByOffer = (data, offer) => (dispatch) => {


    dispatch(getDataRequest())

    if (offer !== '') {
        return axios.get('http://localhost:1200/product', {
            params: {
                c: data,
                discount: offer,
            }
        })
            .then(res => dispatch(getDataSuccess(res.data)))
            .catch(err => dispatch(getDataFailure()))
    }
    else {
        return axios.get('http://localhost:1200/product', {
            params: {
                c: data,
            }
        })
            .then(res => dispatch(getDataSuccess(res.data)))
            .catch(err => dispatch(getDataFailure()))
    }
}

// filter by price MRP
export const getDatasByPrice = (data, price) => (dispatch) => {


    dispatch(getDataRequest())

    if (price !== '') {
        return axios.get('http://localhost:1200/product', {
            params: {
                c: data,
                mrp: price,
            }
        })
            .then(res => dispatch(getDataSuccess(res.data)))
            .catch(err => dispatch(getDataFailure()))
    }
    else {
        return axios.get('http://localhost:1200/product', {
            params: {
                c: data,
            }
        })
            .then(res => dispatch(getDataSuccess(res.data)))
            .catch(err => dispatch(getDataFailure()))
    }
}

//filter by department wise
export const getDatasByDept = (data) => (dispatch) => {


    dispatch(getDataRequest())


    return axios.get('http://localhost:1200/product', {
        params: {
            c: data,
        }
    })
        .then(res => dispatch(getDataSuccess(res.data)))
        .catch(err => dispatch(getDataFailure()))


}