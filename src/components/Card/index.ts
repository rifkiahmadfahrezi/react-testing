export interface CardProps extends React.HTMLProps<HTMLDivElement>{
   children: React.ReactNode,
   className?: string
}
export interface CardImageProps extends React.HTMLProps<HTMLDivElement | HTMLImageElement>{
   className?: string
   src: string
   alt: string
   aspect ?: '1/1' | '16/9' | 'auto'
}

import Card from "./Card"
import CardBody from "./CardBody"
import CardImage from "./CardImage"
import CardFooter from "./CardFooter"

export { Card, CardBody, CardImage, CardFooter }