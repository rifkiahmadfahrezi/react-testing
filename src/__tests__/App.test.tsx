import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import App from "../App";

describe("Main app component", () => {
   test('Should render propperly', () => {
      render(<App/>)
      const app = screen.getByTestId('app')
      expect(app).toBeInTheDocument()
   })
})