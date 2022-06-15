import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import style from './App.module.css'
import MainRoute, { SignRoute } from './MainRoute'
import Dashboard from './pages/Dashboard/Dashboard'
import { checkAuth, getPatient } from './redux/ac/ac'
import { useDispatch, useSelector } from 'react-redux'
// const useAuth = true

function App() {
    const location = useLocation()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)
    const isAuth = useSelector((state) => state.isAuth)
    const user = useSelector((state) => state.user)
    useEffect(() => {
        localStorage.getItem('token') && localStorage.getItem('tokenName')
            ? dispatch(checkAuth(navigate))
            : navigate('/login')
    }, [])
  

    return (
        <div className='App'>
            <div className={isAuth ? '' : style.dashboard_none}>
                <Dashboard />
            </div>
            <div>
                <SignRoute />
            </div>
        </div>
    )
}

export default App
