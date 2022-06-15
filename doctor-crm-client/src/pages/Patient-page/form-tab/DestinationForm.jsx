import * as React from 'react'
import { Button, TextField } from '@mui/material'
import BasicDatePicker from '../../../components/date-picker/DatePicker'
import style from './form.module.css'
const DestinationForm = ({
    destination,
    formInputDestinationHandler,
    destinationSubmit,
    setValueDateDestination,
    valueDateDestination,
}) => {
    return (
        <div className={style.form_align}>
            <form className={style.destination_form} onSubmit={destinationSubmit}>
                <TextField
                    style={{ width: '100%',marginBottom:'20px' }}
                    label={'Назначение'}
                    required
                    name={'medical'}
                    value={destination.medical}
                    onChange={formInputDestinationHandler}
                    className={style.mr}
                />
                <TextField
                    style={{ width: '100%', marginBottom:'20px'  }}
                    label={'Заметки'}
                    required
                    name={'notes'}
                    value={destination.notes}
                    onChange={formInputDestinationHandler}
                    className={style.mr}
                />
                <BasicDatePicker
                    width={'100%'}
                    valueDate={valueDateDestination}
                    setValueDate={setValueDateDestination}
                    labelDatePicker={'Дата назначения'}
                    className={style.mr}
                />
                <div className={style.mr}>
                    <Button size='medium' variant='outlined' type='submit'>
                        Сохранить
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default DestinationForm
