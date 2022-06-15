import  React,{useState} from 'react'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Link from '@mui/material/Link'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { Link as RouterLink, useNavigate  } from 'react-router-dom'
import { signIn } from '../../redux/ac/ac'
import { useDispatch } from 'react-redux'
const theme = createTheme()

export default function SignIn() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [registerInput, setRegisterInput] = useState({
        email: '',
        password: '',
    })

    const registerInputHandler = (e) => {
        setRegisterInput((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }))
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(signIn(registerInput))
        setRegisterInput({
            email: '',
            password: '',
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
                        Войти
                    </Typography>
                    <Box component='form' onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin='normal'
                            required
                            fullWidth
                            label='Электронная почта'
                            name='email'
                            autoComplete='email'
                            autoFocus
                            value={registerInput.email}
                            onChange={registerInputHandler}
                        />
                        <TextField
                            margin='normal'
                            required
                            fullWidth
                            name='password'
                            label='Пароль'
                            type='password'
                            autoComplete='current-password'
                            value={registerInput.password}
                            onChange={registerInputHandler}
                        />
                        <Button type='submit' fullWidth variant='contained' sx={{ mt: 3, mb: 2 }}>
                            Sign In
                        </Button>
                        <Grid container justifyContent='center'>
                            <Grid item>
                                <RouterLink style={{ textDecoration: 'none', color: '#1976d2' }} to={'/registration'}>
                                    {'Нет аккаунта ? Зарегистрироваться'}
                                </RouterLink>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    )
}
