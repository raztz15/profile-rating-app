import { FC, useEffect, useState } from "react"
import { useSelector } from "react-redux";
import { Route, useNavigate, Navigate } from 'react-router-dom';
import { RootState } from "../../store/store";


interface IProtectedRouteProps {
    path: string,
    element: JSX.Element
}

export const ProtectedRoute = (props: IProtectedRouteProps) => {

    const { path, element } = props

    const { isAuth } = useSelector((state: RootState) => state.auth)

    const nav = useNavigate()
    console.log("path ===> ", path);

    if (!isAuth) {
        console.log("auth ===> ", isAuth);

        <Navigate to={'/login'} replace />
        // nav('/login')
        // return null
    }
    return element



    // const { currentUser } = useSelector((state: RootState) => state.currentUser)

    // return currentUser ? <Outlet />
    //     : <Navigate to="/login" />

};






