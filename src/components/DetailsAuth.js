import React from 'react'
import {Navigate} from "react-router-dom"
import {useAuth} from "./UseAuth"
import { useLocation } from 'react-router-dom'


export const DetailsAuth =({children}) => {
    const auth = useAuth()
    const location = useLocation()

    if (!auth.user) {
        return <Navigate to="/LogIn" state={{path: location.pathname}}/>
    }
    return children
};