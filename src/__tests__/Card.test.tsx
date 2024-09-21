import { screen, render } from "@testing-library/react";
import '@testing-library/jest-dom'
import { Card, CardBody, CardImage, CardFooter } from "../components/Card";

describe('Cards component', () => { 
   test('should render all card components on properly', () => {
      render(
         <Card className='shadow-lg' >
            <CardImage 
               src='/images/cat1.jpeg'
               alt='cat'/>
            <CardBody>
            <h1 className='text-xl font-semibold capitalize' >Hello sirr!</h1>

            <CardFooter className='mt-4' >
               Footer card
            </CardFooter>
            </CardBody>
         </Card>
      )

      const card = screen.getByTestId('card')
      const cardBody = screen.getByTestId('card-body')
      const cardImage = screen.getByTestId('card-image')
      const cardFooter = screen.getByTestId('card-footer')
      
      expect(card).toBeInTheDocument()
      expect(cardBody).toBeInTheDocument()
      expect(cardImage).toBeInTheDocument()
      expect(cardFooter).toBeInTheDocument()
   })

   test('Card image should have aspect auto', () => {
      render(
         <CardImage 
            src='/images/cat1.jpeg'
            alt='cat'/>
      )

      const img = screen.getByTestId('card-img-auto')
      expect(img).toBeInTheDocument()
   })
   test('Card image should have aspect square [1/1]', () => {
      render(
         <CardImage 
            aspect='1/1'
            src='/images/cat1.jpeg'
            alt='cat'/>
      )

      const img = screen.getByTestId('card-img-1/1')
      expect(img).toBeInTheDocument()
   })
   test('Card image should have aspect video [16/9]', () => {
      render(
         <CardImage 
            aspect='16/9'
            src='/images/cat1.jpeg'
            alt='cat'/>
      )

      const img = screen.getByTestId('card-img-16/9')
      expect(img).toBeInTheDocument()
   })
 })