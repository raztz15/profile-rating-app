import './Input.css'
import { InputInterface } from '../../interfaces/InputInterface'

export const TextInput = (props: InputInterface) => {

    const { label, type, defauldValue, onChange, name } = props

    return (
        <div className='text-input--container'>
            {label && <label>{label}</label>}
            <input type={type} defaultValue={defauldValue} onChange={onChange} name={name} />
        </div>
    )
}
