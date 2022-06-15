import * as React from 'react'
import { useState } from 'react'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { Link as RouterLink, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { signUp } from '../../redux/ac/ac'
import ControllableStates from '../../components/autocomplete/Autocomplete'

const theme = createTheme()

export default function SignUp() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [value, setValue] = React.useState('')
    const [inputValue, setInputValue] = React.useState('')
    const options = ['Женский', 'Мужской'];
    const labelAuto = 'Пол'
    const [registerInput, setRegisterInput] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        prof: '',
        gender: '',
        department: '',
    })

    const registerInputHandler = (e) => {
        
        setRegisterInput((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }))
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const some = {
            firstName: registerInput.firstName,
            lastName: registerInput.lastName,
            email: registerInput.email,
            password: registerInput.password,
            prof: registerInput.prof,
            department: registerInput.department,
            gender: inputValue,
        }
        dispatch(signUp(some))
        setRegisterInput({
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            prof: '',
            department: '',
            gender: '',
        })
        navigate('/')
    }

    return (
        <ThemeProvider theme={theme}>
            <Container component='main' maxWidth='xs'>
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component='h1' variant='h5'>
                        Регистрация
                    </Typography>
                    <Box component='form' noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete='given-name'
                                    name='firstName'
                                    required
                                    fullWidth
                                    label='Имя'
                                    autoFocus
                                    value={registerInput.firstName}
                                    onChange={registerInputHandler}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    label='Фамилия'
                                    name='lastName'
                                    autoComplete='family-name'
                                    value={registerInput.lastName}
                                    onChange={registerInputHandler}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    label='Электронный адрес'
                                    name='email'
                                    autoComplete='email'
                                    value={registerInput.email}
                                    onChange={registerInputHandler}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name='password'
                                    label='Пароль'
                                    type='password'
                                    autoComplete='new-password'
                                    value={registerInput.password}
                                    onChange={registerInputHandler}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name='prof'
                                    label='Специальность'
                                    value={registerInput.prof}
                                    onChange={registerInputHandler}
                                    autoComplete='given-prof'
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete='given-department'
                                    name='department'
                                    required
                                    fullWidth
                                    label='Отдел'
                                    value={registerInput.department}
                                    onChange={registerInputHandler}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <ControllableStates width={190} labelAuto={labelAuto} options={options} value={value}  inputValue={inputValue} setValue={setValue} setInputValue={setInputValue} />
                            </Grid>
                        </Grid>
                        <Button type='submit' fullWidth variant='contained' sx={{ mt: 3, mb: 2 }}>
                            Sign Up
                        </Button>
                        <Grid container justifyContent='center'>
                            <Grid item>
                                <RouterLink style={{ textDecoration: 'none', color: '#1976d2' }} to={'/login'}>
                                    {'Уже есть аккаунт ? Войти'}
                                </RouterLink>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    )
}
