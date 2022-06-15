import { Button, TextField } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import style from './patient-from.module.css'
import { Link as RouterLink, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import BasicDatePicker from '../../components/date-picker/DatePicker'
import ControllableStates from '../../components/autocomplete/Autocomplete'
import { addPatient } from '../../redux/ac/ac'
const PatientForm = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const users = useSelector((state) => state.users)
    //
    const [value, setValue] = React.useState('')
    const [inputValue, setInputValue] = React.useState('')

    const [valueDoctor, setValueDoctor] = React.useState('')
    const [inputValueDoctor, setInputValueDoctor] = React.useState('')

    //
    const [valueDate, setValueDate] = React.useState(null)
    const [valueDateReceipt, setValueDateReceipt] = React.useState(null)
    const [valueDateExctract, setValueDateExctract] = React.useState(null)
    const options = ['001 -работающие', '002- не работающие']
    const usersOpt = users?.map((el) => `${el.firstName} ${el.lastName}`)
    const labelAuto = 'Категория пациента'
    const labelDoctor = 'Врач'
    const [formInputInfo, setFormInputInfo] = useState({
        firstName: '',
        lastName: '',
        address: '',
        passport: '',
        job: '',
        birthDay: '',
        insurance_number: '',
        category_patient: '',
        group_blood: '',
    })
    //
    const [formInputSick, setFormInputSick] = useState({
        simptoms: '',
        press_diagnos: '',
        diagnos: '',
        receipt_date: '',
        exctract_date: '',
        palata: '',
        doctor: '',
        from_who: '',
    })

    const formInputInfoHandler = (e) => {
        setFormInputInfo((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }))
    }
    const formInputSickHandler = (e) => {
        setFormInputSick((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }))
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const some = {
            info: {
                firstName: formInputInfo.firstName,
                lastName: formInputInfo.lastName,
                insurance_number: Number(formInputInfo.insurance_number),
                address: formInputInfo.address,
                passport: formInputInfo.passport,
                job: formInputInfo.job,
                birthDay: valueDate?.toLocaleDateString('ru'),
                category_patient: inputValue,
                group_blood: formInputInfo.group_blood,
            },
            sick: {
                simptoms: formInputSick.simptoms,
                press_diagnos: formInputSick.press_diagnos,
                diagnos: formInputSick.diagnos,
                palata: formInputSick.palata,
                doctor: inputValueDoctor,
                receipt_date: valueDateReceipt?.toLocaleDateString('ru'),
                exctract_date: valueDateExctract?.toLocaleDateString('ru'),
                from_who: formInputSick.from_who,
            },
        }
        dispatch(addPatient(some))
        setFormInputInfo({
            firstName: '',
            lastName: '',
            address: '',
            passport: '',
            job: '',
            birthDay: null,
            insurance_number: '',
            category_patient: '',
            group_blood: '',
        })
        setFormInputSick({
            simptoms: '',
            press_diagnos: '',
            diagnos: '',
            from_who: '',
            receipt_date: null,
            exctract_date: null,
            palata: '',
            doctor: '',
        })

        navigate('/')
    }
    return (
        <div className={style.patient_form_wrapper}>
            <div className={style.form_h2}>
                <h2>Форма добавления пациента</h2>
            </div>
            <form className={style.patient_form} onSubmit={handleSubmit}>
                <TextField
                    style={{ width: '90%', marginBottom: 10, background: 'white' }}
                    label='Фамилия'
                    required
                    name='lastName'
                    value={formInputInfo.lastName}
                    onChange={formInputInfoHandler}
                />
                <TextField
                    style={{ width: '90%', marginBottom: 10, background: 'white' }}
                    label='Имя'
                    required
                    name='firstName'
                    value={formInputInfo.firstName}
                    onChange={formInputInfoHandler}
                />
                <TextField
                    style={{ width: '90%', marginBottom: 10, background: 'white' }}
                    label='Группа крови'
                    required
                    name='group_blood'
                    value={formInputInfo.group_blood}
                    onChange={formInputInfoHandler}
                />
                <TextField
                    style={{ width: '90%', marginBottom: 10, background: 'white' }}
                    label='Адрес'
                    required
                    name='address'
                    value={formInputInfo.address}
                    onChange={formInputInfoHandler}
                />
                <TextField
                    style={{ width: '90%', marginBottom: 10, background: 'white' }}
                    label='Номер Паспорта'
                    required
                    name='passport'
                    value={formInputInfo.passport}
                    onChange={formInputInfoHandler}
                />
                <TextField
                    style={{ width: '90%', marginBottom: 10, background: 'white' }}
                    label='Работа'
                    required
                    name='job'
                    value={formInputInfo.job}
                    onChange={formInputInfoHandler}
                />

                <TextField
                    style={{ width: '90%', marginBottom: 10, background: 'white' }}
                    label='Номер удостоверения социальной защиты'
                    required
                    name='insurance_number'
                    type='number'
                    value={formInputInfo.insurance_number}
                    onChange={formInputInfoHandler}
                />

                <BasicDatePicker
                    labelDatePicker={'День рождения'}
                    width={'90%'}
                    valueDate={valueDate}
                    setValueDate={setValueDate}
                />
                {/*  */}
                <TextField
                    style={{ width: '90%', marginBottom: 10, background: 'white' }}
                    label='Симптомы'
                    required
                    name='simptoms'
                    value={formInputSick.simptoms}
                    onChange={formInputSickHandler}
                />
                <TextField
                    style={{ width: '90%', marginBottom: 10, background: 'white' }}
                    label='Первичный диагноз'
                    required
                    name='press_diagnos'
                    value={formInputSick.press_diagnos}
                    onChange={formInputSickHandler}
                />
                <TextField
                    style={{ width: '90%', marginBottom: 10, background: 'white' }}
                    label='Диагноз'
                    name='diagnos'
                    value={formInputSick.diagnos}
                    onChange={formInputSickHandler}
                />
                <TextField
                    style={{ width: '90%', marginBottom: 10, background: 'white' }}
                    label='Кто направил ?'
                    required
                    name='from_who'
                    value={formInputSick.from_who}
                    onChange={formInputSickHandler}
                />
                <BasicDatePicker
                    labelDatePicker={'Дата поступления'}
                    width={'90%'}
                    valueDate={valueDateReceipt}
                    setValueDate={setValueDateReceipt}
                />
                <BasicDatePicker
                    labelDatePicker={'Дата выписки'}
                    width={'90%'}
                    valueDate={valueDateExctract}
                    setValueDate={setValueDateExctract}
                />

                <TextField
                    style={{ width: '90%', marginBottom: 10, background: 'white' }}
                    label='Номер палаты'
                    required
                    name='palata'
                    value={formInputSick.palata}
                    onChange={formInputSickHandler}
                />
                <div className={style.controlls}>
                    {users ? (
                        <ControllableStates
                            labelAuto={labelDoctor}
                            options={usersOpt}
                            value={valueDoctor}
                            setValue={setValueDoctor}
                            inputValue={inputValueDoctor}
                            setInputValue={setInputValueDoctor}
                            width={'630px'}
                        />
                    ) : (
                        'Loading'
                    )}

                    <ControllableStates
                        labelAuto={labelAuto}
                        value={value}
                        options={options}
                        setValue={setValue}
                        inputValue={inputValue}
                        setInputValue={setInputValue}
                        width={'630px'}
                    />
                </div>
                <Button type='submit' style={{ width: '90%', height: 50, background: 'white' }} variant='outlined'>
                    Добавить пациента
                </Button>
            </form>
        </div>
    )
}

export default PatientForm
