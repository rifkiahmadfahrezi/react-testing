import React from 'react'
import type { CardProps } from '.'
import { cn } from '../../lib/utils'

const Card : React.FC<CardProps> = ({className, children, ...props} : CardProps) => {
  return (
    <div
      data-testid="card"
      className={cn('bg-white shadow rounded-md overflow-hidden', className)}
      {...props}
      >
      {children}
    </div>
  )
}

export default Card