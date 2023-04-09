import React, { FormEvent } from 'react'
import { ConstGeneric } from '../../constants/ConstGeneric'
import { ConstInputTypes } from '../../constants/ConstInputTypes'
import { TextInput } from '../inputs/TextInput'

interface ILoginPageForm {
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    handleSubmit: (e: FormEvent<HTMLFormElement>) => void
}

export const LoginPageForm = (props: ILoginPageForm) => {

    const { handleChange, handleSubmit } = props

    const getInputsProps = () => {
        return [
            {
                type: ConstInputTypes.EMAIL_TYPE,
                onChange: handleChange,
                name: ConstInputTypes.EMAIL_TYPE,
                placeholder: ConstGeneric.EMAIL
            },
            {
                type: ConstInputTypes.PASSWORD_TYPE,
                onChange: handleChange,
                name: ConstInputTypes.PASSWORD_TYPE,
                placeholder: ConstGeneric.PASSWORD
            },
        ]
    }

    return (
        <div className='login-page--form__container'>
            <div className='login-page--form__wrapper'>
                <div className='login-page--form__header'>{ConstGeneric.LOGIN_HEADER}</div>
                <form onSubmit={(e) => handleSubmit(e)}>
                    {getInputsProps().map((input, idx) => {
                        return <TextInput key={idx} {...input} />
                    })}
                    <button>{ConstGeneric.LOGIN_BUTTON}</button>
                </form>
                <div className='login-page--form__seperator'><span>{ConstGeneric.OR}</span></div>
                <div className='login-page--form__signup'>
                    <div>{ConstGeneric.DONT_HAVE_AN_ACCOUNT + ConstGeneric.QUESTION_MARK}</div>
                    <div>{ConstGeneric.SIGN_UP}</div>
                </div>
            </div>
        </div>
    )
}
