import React from 'react'
import type { CardProps } from '.'
import { cn } from '../../lib/utils'

const CardBody : React.FC<CardProps> = ({className, children, ...props} : CardProps) => {
  return (
    <div
      data-testid="card-body"
      className={cn('p-3', className)}
      {...props}
      >
      {children}
    </div>
  )
}

export default CardBody