import React from 'react'
import { Route, Routes } from 'react-router'
import PatientForm from './pages/Add-patient/PatientForm'
import Dashboard from './pages/Dashboard/Dashboard'
import PatientList from './pages/Patient-list/PatientList'
import PatientPage from './pages/Patient-page/PatientPage'
import SignIn from './pages/Sign-in-page/SignInPage'
import SignUp from './pages/Sign-up-page/SignUpPage'
const MainRoute = () => {
    return (
        <Routes>
            <Route path='/' element={<h1>Main</h1>} />
            <Route path='/patients' element={<PatientList />} />
            <Route path='/new' element={<PatientForm />} />
            <Route path='/patient/:id' element={<PatientPage />} />
            <Route path='/login' element={<SignIn />} />
        </Routes>
    )
}

export default MainRoute

export const SignRoute = () => {
    return (
        <Routes>
            <Route path='/registration' element={<SignUp />} />
            <Route path='/login' element={<SignIn />} />
        </Routes>
    )
}
