import './Input.css'
import { InputInterface } from '../../interfaces/InputInterface'

export const TextInput = (props: InputInterface) => {

    const { label, type, value, onChange, name, placeholder } = props

    return (
        <div className='text-input--container'>
            {label && <label>{label}</label>}
            <input type={type} value={value} onChange={onChange} name={name} placeholder={placeholder} />
        </div>
    )
}
