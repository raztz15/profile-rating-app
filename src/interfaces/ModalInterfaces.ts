import { ReactNode } from "react"

export interface IModalProps {
    isOpen: boolean
    setIsOpen: (val: boolean) => void
    title: string
    buttons: IModalButton[]
    children: ReactNode | string
}

interface IModalButton {
    id: string
    text: string
    cb: () => void
    className?: string
}