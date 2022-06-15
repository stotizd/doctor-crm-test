import style from './indication-form.module.css'
import { styled } from '@mui/material/styles'
import * as React from 'react'
import PropTypes from 'prop-types'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { Button, TextField } from '@mui/material'

import { useStateTabFormInput } from '../../hooks/useStateTabHook'
import FormTab from './form-tab/FormTab'
import DestinationForm from './form-tab/DestinationForm'

function TabPanel(props) {
    const { children, value, index, ...other } = props

    return (
        <div
            role='tabpanel'
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    )
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
}

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    }
}

export default function IndicationForm() {
    const {
        //
        temperatureCheck,
        setTemperatureCheck,
        valueDateTemperature,
        setValueDateTemperature,
        temperature,
        temperatureHandler,
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
        setValueDateDestination,
        valueDateDestination,
    } = useStateTabFormInput()
    const [value, setValue] = React.useState(0)
    const handleChange = (event, newValue) => {
        setValue(newValue)
    }
    return (
        <Box style={{ background: 'white', minHeight: '500px' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label='basic tabs example'>
                    <Tab label='Температура' {...a11yProps(0)} />
                    <Tab label='Давление' {...a11yProps(1)} />
                    <Tab label='Пульс' {...a11yProps(2)} />
                    <Tab label='Дыхание' {...a11yProps(3)} />
                    <Tab label='Назначение' {...a11yProps(4)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <FormTab
                    setValue={setTemperatureCheck}
                    value={temperatureCheck}
                    valueDate={valueDateTemperature}
                    setValueDate={setValueDateTemperature}
                    labelDatePicker={'Температура дата'}
                    valueInput={temperature}
                    formHandler={temperatureHandler}
                    onSubmit={temperatureSubmit}
                    inputLabel={'Температура'}
                    name={temperature}
                />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <FormTab
                    setValue={setPresureCheck}
                    value={presureCheck}
                    valueDate={valueDatePresure}
                    setValueDate={setValueDatePresure}
                    labelDatePicker={'Давление дата'}
                    valueInput={presure}
                    formHandler={presureHandler}
                    onSubmit={presureSubmit}
                    name={'presure'}
                    inputLabel={'Давление'}
                />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <FormTab
                    setValue={setPulseCheck}
                    value={pulseCheck}
                    valueDate={valueDatePulse}
                    setValueDate={setValueDatePulse}
                    labelDatePicker={'Пульс дата'}
                    valueInput={pulse}
                    formHandler={pulseHandler}
                    onSubmit={pulseSubmit}
                    name={'pulse'}
                    inputLabel={'Пульс'}
                />
            </TabPanel>
            <TabPanel value={value} index={3}>
                <FormTab
                    setValue={setBreetheCheck}
                    value={breetheCheck}
                    valueDate={valueDateBreethe}
                    setValueDate={setValueDateBreethe}
                    labelDatePicker={'Дыхание дата'}
                    valueInput={breethe}
                    formHandler={breetheHandler}
                    onSubmit={breetheSubmit}
                    name={'breethe'}
                    inputLabel={'Дыхание'}
                />
            </TabPanel>
            <TabPanel value={value} index={4}>
                <DestinationForm
                    valueDateDestination={valueDateDestination}
                    setValueDateDestination={setValueDateDestination}
                    destination={destination}
                    formInputDestinationHandler={formInputDestinationHandler}
                    destinationSubmit={destinationSubmit}
                />
            </TabPanel>
        </Box>
    )
}
