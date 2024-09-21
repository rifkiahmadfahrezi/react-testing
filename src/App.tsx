import React from 'react'
import { Button } from './components/Button'
import { Card, CardBody, CardImage, CardFooter } from './components/Card'

const App : React.FC = () => {
  const images = ['/images/cat1.jpeg', '/images/cat2.jpeg', '/images/cat3.jpeg']
  return (
    <>
      <main data-testid="app" className='mt-5 px-5' >
        <div className="container mx-auto">
          <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-5">
            {images.map(image => (
              <Card key={image} className='shadow-lg' >
                <CardImage 
                  aspect='1/1'
                  src={image}
                  alt='cat'/>
                <CardBody>
                  <h1 className='text-xl font-semibold capitalize' >Hello sirr!</h1>
    
                  <CardFooter className='mt-4' >
                    <Button>Pet</Button>
                  </CardFooter>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </>
  )
}

export default App