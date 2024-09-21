import React from 'react'
import { Button } from './components/Button'

const App : React.FC = () => {
  return (
    <>
      <main data-testid="app" >
        <div>App</div>
        <Button>
          Button
        </Button>
      </main>
    </>
  )
}

export default App