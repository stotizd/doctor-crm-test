import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addBreethe, addDestination, addPresure, addPulse, addTemperature } from '../redux/ac/ac'
export function useStateTabFormInput() {
    const { id } = useParams()
    const dispatch = useDispatch()
    const [temperature, setTemperature] = useState('')
    const [temperatureCheck, setTemperatureCheck] = useState(false)
    const [valueDateTemperature, setValueDateTemperature] = useState(new Date())
    //
    const temperatureHandler = (e) => {
        setTemperature(() => setTemperature(e.target.value))
    }
    //
    const temperatureSubmit = (e) => {
        e.preventDefault()
        const datTime = temperatureCheck ? 'evening' : 'morning'
        const some = {
            pole: temperatureCheck ? 'evening' : 'morning',
            temperature,
            date_inspection: valueDateTemperature.toLocaleDateString('ru'),
            patient_id: id,
        }
        dispatch(addTemperature(some))
        setTemperature('')
        setTemperatureCheck(false)
        setValueDateTemperature(new Date())
    }
    ////////
    const [presure, setPresure] = useState('')
    const [presureCheck, setPresureCheck] = useState(false)
    const [valueDatePresure, setValueDatePresure] = useState(new Date())
    //
    const presureHandler = (e) => {
        setPresure(() => setPresure(e.target.value))
    }
    //
    const presureSubmit = (e) => {
        e.preventDefault()
        const datTime = presureCheck ? 'evening' : 'morning'
        const some = {
            pole: presureCheck ? 'evening' : 'morning',
            presure,
            date_inspection: valueDatePresure.toLocaleDateString('ru'),
            patient_id: id,
        }
        dispatch(addPresure(some))
        setPresure('')
        setPresureCheck(false)
        setValueDatePresure(new Date())
    }
    ////////
    const [pulse, setPulse] = useState('')
    const [pulseCheck, setPulseCheck] = useState(false)
    const [valueDatePulse, setValueDatePulse] = useState(new Date())
    //
    const pulseHandler = (e) => {
        setPulse(() => setPulse(e.target.value))
    }
    //
    const pulseSubmit = (e) => {
        e.preventDefault()
        const datTime = pulseCheck ? 'evening' : 'morning'
        const some = {
            pole: pulseCheck ? 'evening' : 'morning',
            pulse,
            date_inspection: valueDatePulse.toLocaleDateString('ru'),
            patient_id: id,
        }
        dispatch(addPulse(some))
        setPulse('')
        setPulseCheck(false)
        setValueDatePulse(new Date())
    }

    ////////
    const [breethe, setBreethe] = useState('')
    const [breetheCheck, setBreetheCheck] = useState(false)
    const [valueDateBreethe, setValueDateBreethe] = useState(new Date())
    //
    const breetheHandler = (e) => {
        setBreethe(() => setBreethe(e.target.value))
    }
    //
    const breetheSubmit = (e) => {
        e.preventDefault()
        const datTime = breetheCheck ? 'evening' : 'morning'
        const some = {
            pole: breetheCheck ? 'evening' : 'morning',
            breethe,
            date_inspection: valueDateBreethe.toLocaleDateString('ru'),
            patient_id: id,
        }
        dispatch(addBreethe(some))
        setBreethe('')
        setBreetheCheck(false)
        setValueDateBreethe(new Date())
    }
    //
    const [destination, setDestination] = useState({
        medical: '',
        notes: '',
    })
    const [valueDateDestination, setValueDateDestination] = useState(new Date())

    const formInputDestinationHandler = (e) => {
        setDestination((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }))
    }
    const destinationSubmit = (e) => {
        e.preventDefault()
        const some = {
            medical: destination.medical,
            notes: destination.notes,
            date_inspection: valueDateDestination.toLocaleDateString('ru'),
            patient_id: id,
        }
        dispatch(addDestination(some))
        setDestination({
            medical: '',
            notes: '',
        })
        setValueDateBreethe(new Date())
    }

    return {
        temperature,
        temperatureHandler,
        temperatureCheck,
        setTemperatureCheck,
        valueDateTemperature,
        setValueDateTemperature,
        temperatureSubmit,
        //
        presure,
        presureHandler,
        presureCheck,
        setPresureCheck,
        valueDatePresure,
        setValueDatePresure,
        presureSubmit,
        //
        pulse,
        pulseHandler,
        pulseCheck,
        setPulseCheck,
        valueDatePulse,
        setValueDatePulse,
        pulseSubmit,
        //

        breethe,
        breetheHandler,
        breetheCheck,
        setBreetheCheck,
        valueDateBreethe,
        setValueDateBreethe,
        breetheSubmit,
        //
        destination,
        formInputDestinationHandler,
        destinationSubmit,
        valueDateDestination,
        setValueDateDestination

    }
}
