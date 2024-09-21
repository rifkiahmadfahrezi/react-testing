import { render, screen } from "@testing-library/react"
import '@testing-library/jest-dom'
import { Button } from "../components/Button"

describe('Button Component', () => { 
   test("Loads and display propperly", async () => {
      render(
         <Button>
            button
         </Button>
      )

      const btn = screen.getByTestId("btn-default")
      expect(btn).toBeInTheDocument()
   })
   test("Use default variants", async () => {
      render(
         <Button>
            button
         </Button>
      )

      const btn = screen.getByTestId("btn-default")
      expect(btn).toBeInTheDocument()
   })
   test("Use danger variants", async () => {
      render(
         <Button variant="danger">
            button
         </Button>
      )

      const btn = screen.getByTestId("btn-danger")
      expect(btn).toBeInTheDocument()
   })
   test("Use outline variants", async () => {
      render(
         <Button variant="outline">
            button
         </Button>
      )

      const btn = screen.getByTestId("btn-outline")
      expect(btn).toBeInTheDocument()
   })
})