import * as React from 'react'
import PropTypes from 'prop-types'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { useDispatch, useSelector } from 'react-redux'
import style from './patient-info.module.css'
import Divider from '@mui/material/Divider'
import { Button, TextField } from '@mui/material'
import { useParams } from 'react-router-dom'
import { exctractPatient, getDestination } from '../../redux/ac/ac'
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

export default function PatientInfo() {
    const { id } = useParams()
    const [value, setValue] = React.useState(0)
    const patient = useSelector((state) => state.one_patient)

    const destination = useSelector((state) => state.destination)
    const dispatch = useDispatch()
    const handleChange = (event, newValue) => {
        setValue(newValue)
    }
    React.useEffect(() => {
        if (value === 2) {
            dispatch(getDestination(id))
        }
    }, [value])

    const exctractHandler = () => {
        let some = {
            id,
            exctract_date: new Date().toLocaleDateString('ru'),
        }
        dispatch(exctractPatient(some))
    }

    return (
        <Box sx={{ width: '800px', minHeight: '500px', background: 'white' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label='basic tabs example'>
                    <Tab label='???????????????????? ?? ????????????????' {...a11yProps(0)} />
                    <Tab label='?????????? ????????????????' {...a11yProps(1)} />
                    <Tab label='???????? ????????????????????' {...a11yProps(2)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                {patient?.patient.map((el) => (
                    <div classsName={style.info_patient_wrapper} key={el.id} id={el.id}>
                        <div className={style.head_wrapper}>
                            <h3>
                                ??????: {el.firstName} {el.lastName}
                                <div> ???????????? ??????????: {el.group_blood}</div>
                            </h3>
                            <h3>
                                <div>??????????????: {el.passport}</div>
                                ???????? ????????????????: {el.birthDay}
                            </h3>
                        </div>
                        <div className={style.content}>
                            <div>
                                <p>????????????: {el.job}</p>
                                <p>?????????? ?????????????????????????? ???????????????????? ????????????: {el.insurance_number}</p>
                                <p>?????????????????? ????????????????: {el.category_patient}</p>
                            </div>
                            <div>
                                <p>?????????? ????????????????????: {el.address}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </TabPanel>
            <TabPanel value={value} index={1}>
                {patient?.hystory.map((el) => (
                    <div key={el.id}>
                        <div className={style.hystory_wrapper}>
                            <div className={style.hystory_head}>
                                <p>????????: {el.doctor}</p>
                                <p>????????????????: {el.simptoms}</p>
                                <p>?????????????????? ??????????????: {el.press_diagnos}</p>
                                <p> ??????????????: {el.diagnos ? el.diagnos : '?????????????????? ??????????????'}</p>
                                <p>????????????: {el.palata}</p>
                            </div>
                            <div>
                                <p>???????? ??????????????????????: {el.receipt_date}</p>
                                <p>
                                    ???????? ??????????????:{' '}
                                    {el.exctract_date ? (
                                        el.exctract_date
                                    ) : (
                                        <Button onClick={exctractHandler} variant='outlined'>
                                            ????????????????
                                        </Button>
                                    )}
                                </p>
                                <p>????????????????: {el.from_who}</p>
                            </div>
                        </div>
                        <Divider />
                    </div>
                ))}
            </TabPanel>
            <TabPanel value={value} index={2} onClick={() => console.log('ag')}>
                {destination?.map((el) => (
                    <div key={el.id}>
                        <div>
                            <p>???????? ????????????????????:{el.date_inspection}</p>
                        </div>
                        <p>????????????????????: {el.medical}</p>
                        <p>??????????????: {el.medical}</p>
                        <Divider />
                    </div>
                ))}
            </TabPanel>
        </Box>
    )
}
