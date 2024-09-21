import React from 'react'
import type { CardImageProps } from '.'
import { cn } from '../../lib/utils'

const CardImage : React.FC<CardImageProps> = ({
    className,
    aspect = 'auto',
    ...props
  } : CardImageProps) => {
    let ratio : string

    switch (aspect){
      case '1/1':
        ratio = 'aspect-square'
        break
      case '16/9':
        ratio = 'aspect-video'
        break
      default:
        ratio = 'aspect-auto'
        break
    }

  return (
    <figure
      data-testid="card-image"
      className={cn('w-full overflow-hidden', ratio, className)}
      {...props}
      >
      <img 
         className='object-cover w-full h-full'
         data-testid={'card-img-' + aspect}
         src={props.src}
         alt={props.alt} />
    </figure>
  )
}

export default CardImage