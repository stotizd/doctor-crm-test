import * as React from 'react'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import { Button } from '@mui/material'
import style from './patient-list.module.css'
import { Link as RouterLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getOnePatient } from '../../redux/ac/ac'

const PatientList = () => {
    const patients = useSelector((state) => state.patients)
    const dispatch = useDispatch()

    const clickHandler = () => {
        dispatch(getOnePatient())
    }
    return (
        <Box sx={{ width: '100%', maxWidth: '100%', bgcolor: 'background.paper' }}>
            <nav aria-label='main mailbox folders'>
                <List>
                    {patients.map((el) => (
                        <RouterLink
                            id={el.id}
                            onClick={(e) => dispatch(getOnePatient(el.id))}
                            key={el.id}
                            style={{ textDecoration: 'none', color: 'black' }}
                            to={`/patient/${el.id}`}
                        >
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <div className={style.patient_list_item}>
                                        {el.firstName} {el.lastName}
                                        <div>
                                            <Button onClick={() => console.log('haha')} variant='outlined'>
                                                Выбрать
                                            </Button>
                                        </div>
                                    </div>
                                </ListItemButton>
                            </ListItem>
                        </RouterLink>
                    ))}
                </List>
            </nav>
        </Box>
    )
}

export default PatientList
