import React from 'react'
import type { CardProps } from '.'
import { cn } from '../../lib/utils'

const CardFooter : React.FC<CardProps> = ({className, children, ...props} : CardProps) => {
  return (
    <div
      data-testid="card-footer"
      className={cn(className)}
      {...props}
      >
      {children}
    </div>
  )
}

export default CardFooter