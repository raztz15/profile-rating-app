export interface InputInterface {
    label?: string
    type: string
    defauldValue?: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    name: string
}