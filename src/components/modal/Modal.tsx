import './Modal.css'
import { IModal } from '../../interfaces/ModalInterfaces'
import ReactDOM from 'react-dom'
import { ReactComponent as ExitIcon } from "../../assets/icons/close-modal-icon.svg";

export const Modal = (props: IModal) => {

    // Destructuring props
    const { title, isOpenModal, buttons, children, setIsOpenModal } = props

    // Creating higher level of html to the root app
    const portalElement = document.getElementById('portal')

    if (!isOpenModal) return null

    if (portalElement) {
        return ReactDOM.createPortal(
            <div className='modal-container'>
                <div className='modal-wrapper'>
                    <div className='modal-header'>
                        <div className='modal-head'>
                            <h4>{title}</h4>
                        </div>
                        <ExitIcon onClick={() => setIsOpenModal(false)} />
                    </div>
                    {children}
                    <div className='modal-buttons'>
                        {buttons.map(btn => {
                            return <div className={btn.className} onClick={btn.cb}>{btn.text}</div>
                        })}
                    </div>
                </div>
            </div>,
            portalElement
        )
    } else {
        return null
    }
}
