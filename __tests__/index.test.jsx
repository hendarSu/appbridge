/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react'
import Home from '../pages'


describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />)

    const heading = screen.getByRole('heading', {
      name: 'Welcome to WooBridge!',
    })
    const btnName = screen.getByText("Let's Connect →")
    const footer = screen.getByText("Powered by")

    expect(heading).toBeInTheDocument()
    expect(btnName).toBeInTheDocument()
    expect(footer).toBeInTheDocument();
  })
})