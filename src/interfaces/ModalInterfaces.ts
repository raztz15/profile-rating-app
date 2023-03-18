import { ReactNode } from "react"

export interface IModal {
    isOpenModal: boolean
    setIsOpenModal: (val: boolean) => void
    title: string
    buttons: IModalButton[]
    children: ReactNode | string
}

interface IModalButton {
    text: string
    cb: () => void
    className?: string 
}