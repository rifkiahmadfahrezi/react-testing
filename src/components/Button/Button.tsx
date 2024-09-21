import React, { forwardRef } from 'react'
import type { ButtonProps } from '.'
import { cn } from '../../lib/utils'

const Button : React.FC<ButtonProps> = forwardRef(({
   className = '',
   variant = 'default',
   children,
   ...props
} :ButtonProps, ref) => {
   let style : string

   switch (variant){
      case 'danger': 
         style = "bg-red-500 text-slate-50 hover:bg-red-600 transition duration-200"
         break
      case 'outline':
         style = "bg-white text-slate-800 border-2 border-blue-500 hover:bg-blue-100 transition duration-200"
         break
      default :
         style = "bg-blue-500 text-slate-50 hover:bg-blue-600 transition duration-200"
         break

   }

  return (
    <button 
      data-testid={'btn-'+variant}
      ref={ref}
      className={cn("py-2 px-5 rounded-sm", style)} 
      {...props}
      type={'button'}
      >
      {children}
    </button>
  )
})

export default Button