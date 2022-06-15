import axios from 'axios'
import {
    ADD_PATIENT,
    ADD_TEMPERATURE,
    GET_ONE_PATIENT,
    GET_PATIENTS,
    SET_AUTH,
    SET_TEMPERATURE,
    SET_USER,
    SET_USERS,
    ADD_PRESURE,
    SET_PRESURE,
    SET_PULSE,
    SET_BREETHE,
    ADD_PULSE,
    ADD_BREETHE,
    ADD_DESTINATION,
    SET_DESTINATION,
    EXCTRACT,
} from '../types/types'
// registration

export const signUp = (value) => async (dispatch) => {
    const user = await axios.post('/user/registration', value)
    localStorage.setItem('token', user.data.user.id)
    localStorage.setItem('tokenName', user.data.user.name)
    dispatch({ type: SET_AUTH, payload: true })
    dispatch({ type: SET_USER, payload: user.data.user })
    dispatch({ type: SET_USERS, payload: user.data.users })
}
export const signIn = (value, navigate) => async (dispatch) => {
    try {
        const user = await axios.post('/user/login', value)
        // localstorage
        if (user) {
            localStorage.setItem('token', user.data.user.id)
            localStorage.setItem('tokenName', user.data.user.name)
            dispatch({ type: SET_AUTH, payload: true })
            dispatch({ type: SET_USER, payload: user.data.user })
            dispatch({ type: SET_USERS, payload: user.data.users })
        }
    } catch (err) {
        navigate('/user/login')
    }
}

export const signOut = (navigate) => async (dispatch) => {
    const signOut = await axios('/user/logout')
    localStorage.removeItem('token')
    localStorage.removeItem('tokenName')
    navigate('/login')
    dispatch({ type: SET_AUTH, payload: false })
    dispatch({ type: SET_USER, payload: null })
    dispatch({ type: SET_USERS, payload: null })
}

export const checkAuth = (navigate) => async (dispatch) => {
    const id = localStorage.getItem('token')
    const name = localStorage.getItem('tokenName')
    const info = await axios.post('/user/refresh', { name, id: Number(id) })

    if (info.status !== 500) {
        try {
            // localstorage
            if (info) {
                dispatch({ type: SET_AUTH, payload: true })
                dispatch({ type: SET_USER, payload: info.data.user })
                dispatch({ type: SET_USERS, payload: info.data.users })
                navigate('/')
            }
        } catch (err) {
            localStorage.removeItem('token')
            localStorage.removeItem('tokenName')
            navigate('/user/login')
        }
    } else {
        localStorage.removeItem('token')
        localStorage.removeItem('tokenName')
        navigate('/user/login')
    }
}

export const getPatient = (id) => async (dispatch) => {
    try {
        const patient = await axios.get(`/patient/${id}`)
        if (patient) {
            dispatch({ type: GET_PATIENTS, payload: patient.data })
        }
    } catch (err) {
        console.log(err)
    }
}

export const getOnePatient = (id) => async (dispatch) => {
    try {
        const patient = await axios.post(`/patient/one`, { id })
        if (patient) {
            dispatch({ type: GET_ONE_PATIENT, payload: patient.data })
            // diagrams
            dispatch({ type: SET_TEMPERATURE, payload: patient.data.temperatureDiagram })
            dispatch({ type: SET_PRESURE, payload: patient.data.presureDiagram })
            dispatch({ type: SET_PULSE, payload: patient.data.pulseDiagram })
            dispatch({ type: SET_BREETHE, payload: patient.data.breetheDiagram })
        }
    } catch (err) {
        console.log(err)
    }
}

export const addPatient = (value) => async (dispatch) => {
    try {
        const patient = await axios.post('/patient', value)
        if (patient) {
            dispatch({ type: ADD_PATIENT, payload: patient.data })
        }
    } catch (err) {
        console.log(err)
    }
}

export const exctractPatient = (value) => async (dispatch) => {
    try {
        
        const patient = await axios.post('/patient/exctract', value)
        console.log(patient)
        if (patient) {
            dispatch({ type: EXCTRACT, payload: patient.data })
        }
    } catch (err) {
        console.log(err)
    }
}
//

export const addTemperature = (value) => async (dispatch) => {
    try {
        const temperatureData = await axios.post('/diagram/tepmerature', value)
        if (temperatureData) {
            dispatch({ type: ADD_TEMPERATURE, payload: temperatureData.data })
        }
    } catch (err) {
        console.log(err)
    }
}
//
export const addPresure = (value) => async (dispatch) => {
    try {
        const presureData = await axios.post('/diagram/presure', value)
        if (presureData) {
            dispatch({ type: ADD_PRESURE, payload: presureData.data })
        }
    } catch (err) {
        console.log(err)
    }
}
//
export const addPulse = (value) => async (dispatch) => {
    try {
        const pulseData = await axios.post('/diagram/pulse', value)
        if (pulseData) {
            dispatch({ type: ADD_PULSE, payload: pulseData.data })
        }
    } catch (err) {
        console.log(err)
    }
}

export const addBreethe = (value) => async (dispatch) => {
    try {
        const breetheData = await axios.post('/diagram/breethe', value)
        if (breetheData) {
            dispatch({ type: ADD_BREETHE, payload: breetheData.data })
        }
    } catch (err) {
        console.log(err)
    }
}

export const getDestination = (value) => async (dispatch) => {
    if (value) {
        try {
            const destination = await axios(`/destination/${value}`)
            if (destination) {
                dispatch({ type: SET_DESTINATION, payload: destination.data })
            } else {
                dispatch({ type: SET_DESTINATION, payload: [] })
            }
        } catch (error) {
            console.log(error)
        }
    }
}

export const addDestination = (value) => async (dispatch) => {
    try {
        const destinationData = await axios.post('/destination', value)
        if (destinationData) {
            dispatch({ type: ADD_DESTINATION, payload: destinationData.data })
        }
    } catch (err) {
        console.log(err)
    }
}
