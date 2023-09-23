import './LoginPage.css'
import React, { FormEvent, useEffect, useState } from 'react'
import { LoginPageForm } from './LoginPageForm'
import { ReactComponent as WorkingManImage } from '../../assets/icons/login_image.svg'
import { saveLocalUser, userLogin } from '../../services/LoginService'
import { loginUserAction } from '../../actions/userActions'
import { useAppDispatch } from '../../reducers/rootReducer'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import { useNavigate } from 'react-router-dom'

export const LoginPage = () => {

    const { currentUser } = useSelector((state: RootState) => state.currentUser)

    const dispatch = useAppDispatch()

    const nav = useNavigate()

    const [user, setUser] = useState({
        username: '',
        email: '',
        password: ''
    })

    // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     const { name, value } = e.target
    //     setUser(prevState => ({ ...prevState, [name]: value }))
    // }

    // const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    //     e.preventDefault()
    //     await dispatch(loginUserAction(user.email, user.password))
    //     nav('/all-profiles')
    // }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(e.target);

        const formObj = Object.fromEntries(new FormData(e.target as HTMLFormElement))
        await dispatch(loginUserAction(formObj.email as string, formObj.password as string))
    }

    const getLoginFormProps = () => {
        return {
            // handleChange,
            handleSubmit,
        }
    }

    return (
        <div className='login-page--container'>
            <div className='login-page--wrapper'>
                <LoginPageForm {...getLoginFormProps()} />
                <div className='login-page--image__container'>
                    <WorkingManImage />
                </div>
            </div>
        </div>
    )
}
