import Button from "./Button"
export type ButtonVariants = 'default' | 'outline' | 'danger'
export interface ButtonProps extends React.HTMLProps<HTMLButtonElement>{
   variant?: ButtonVariants
   className ?: string
   children: React.ReactNode
}
export { Button }
