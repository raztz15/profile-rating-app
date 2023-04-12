import './LoginPage.css'
import React, { FormEvent, useState } from 'react'
import { LoginPageForm } from './LoginPageForm'
import { ReactComponent as WorkingManImage } from '../../assets/icons/login_image.svg'
import { userLogin } from '../../services/LoginService'
import { loginUserAction } from '../../actions/userActions'
import { useAppDispatch } from '../../reducers/rootReducer'

export const LoginPage = () => {

    const dispatch = useAppDispatch()

    const [user, setUser] = useState({
        email: '',
        password: ''
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setUser(prevState => ({ ...prevState, [name]: value }))
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        dispatch(loginUserAction(user.email, user.password))
    }

    const getLoginFormProps = () => {
        return {
            handleChange,
            handleSubmit
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
