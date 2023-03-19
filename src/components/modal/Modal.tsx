import './Modal.css'
import { IModalProps } from '../../interfaces/ModalInterfaces'
import ReactDOM from 'react-dom'
import { ReactComponent as ExitIcon } from "../../assets/icons/close-modal-icon.svg";

export const Modal = (props: IModalProps) => {

    // Destructuring props
    const { title, isOpen, buttons, children, setIsOpen } = props

    // Creating higher level of html to the root app
    const portalElement = document.getElementById('portal')

    return isOpen && portalElement ? ReactDOM.createPortal(
        <div className='modal-container'>
            <div className='modal-wrapper'>
                <div className='modal-header'>
                    <div className='modal-title'>
                        <h4>{title}</h4>
                    </div>
                    <ExitIcon onClick={() => setIsOpen(false)} />
                </div>
                <div className='modal-content'>
                    {children}
                </div>
                <div className='modal-footer'>
                    {buttons.map(({ className, cb, text }) => {
                        return <div className={className} onClick={cb}>{text}</div>
                    })}
                </div>
            </div>
        </div>,
        portalElement
    ) : null
}
