export interface InputInterface {
    label?: string
    type: string
    value?: string | number
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
    name: string
    placeholder?: string
}