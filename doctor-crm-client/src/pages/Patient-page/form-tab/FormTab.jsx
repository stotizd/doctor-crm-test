import { styled } from '@mui/material/styles'
import * as React from 'react'
import PropTypes from 'prop-types'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { Button, TextField } from '@mui/material'
import Switch from '@mui/material/Switch'
import Stack from '@mui/material/Stack'
import BasicDatePicker from '../../../components/date-picker/DatePicker'
import style from './form.module.css'

const AntSwitch = styled(Switch)(({ theme }) => ({
    width: 28,
    height: 16,
    padding: 0,
    display: 'flex',
    '&:active': {
        '& .MuiSwitch-thumb': {
            width: 15,
        },
        '& .MuiSwitch-switchBase.Mui-checked': {
            transform: 'translateX(9px)',
        },
    },
    '& .MuiSwitch-switchBase': {
        padding: 2,
        '&.Mui-checked': {
            transform: 'translateX(12px)',
            color: '#fff',
            '& + .MuiSwitch-track': {
                opacity: 1,
                backgroundColor: theme.palette.mode === 'dark' ? '#177ddc' : '#1890ff',
            },
        },
    },
    '& .MuiSwitch-thumb': {
        boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
        width: 12,
        height: 12,
        borderRadius: 6,
        transition: theme.transitions.create(['width'], {
            duration: 200,
        }),
    },
    '& .MuiSwitch-track': {
        borderRadius: 16 / 2,
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,.35)' : 'rgba(0,0,0,.25)',
        boxSizing: 'border-box',
    },
}))

const FormTab = ({
    inputLabel,
    onSubmit,
    setValue,
    value,
    valueDate,
    setValueDate,
    labelDatePicker,
    valueInput,
    formHandler,
    name
}) => {
    return (
        <form onSubmit={onSubmit}>
            <div className={style.form_align}>
                <TextField
                    style={{ width: '40%' }}
                    label={inputLabel}
                    required
                    name={name}
                    value={valueInput}
                    onChange={formHandler}
                />
                <BasicDatePicker
                    width={'400px'}
                    valueDate={valueDate}
                    setValueDate={setValueDate}
                    labelDatePicker={labelDatePicker}
                />
            </div>
            <div className={style.form_align}>
                <Stack direction='row' spacing={1} alignItems='center'>
                    <Typography style={{ fontSize: '20px', fontWeight: 'bold' }}>Утренний осмотр</Typography>
                    <AntSwitch
                        onChange={() => setValue(!value)}
                        checked={value}
                        inputProps={{ 'aria-label': 'ant design' }}
                    />
                    <Typography style={{ fontSize: '20px', fontWeight: 'bold' }}>Вечерний осмотр</Typography>
                </Stack>
                <Button size='medium' variant='outlined' type='submit'>
                    Сохранить
                </Button>
            </div>
        </form>
    )
}

export default FormTab
