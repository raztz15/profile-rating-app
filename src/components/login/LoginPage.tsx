import './LoginPage.css'
import React, { FormEvent, useState } from 'react'
import { LoginPageForm } from './LoginPageForm'
import { ReactComponent as WorkingManImage } from '../../assets/icons/login_image.svg'

export const LoginPage = () => {

    const [user, setUser] = useState({
        email: '',
        password: ''
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setUser(prevState => ({ ...prevState, [name]: value }))
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
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
