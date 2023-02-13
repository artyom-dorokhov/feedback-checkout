import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import Feedback from '../pages'

describe('Feedback', () => {
  it('it submits the form and navigates between pages', async () => {
    const { container } = render(<Feedback />)

    expect(screen.getByText('Feedback Form')).toBeInTheDocument()

    fireEvent.change(screen.getByRole('textbox', { name: 'name' }), {
      target: { value: 'name' },
    })

    fireEvent.change(screen.getByRole('textbox', { name: 'email' }), {
      target: { value: 'email@mail.com' },
    })

    fireEvent.change(screen.getByRole('textbox', { name: 'comment' }), {
      target: { value: 'comment' },
    })

    fireEvent.click(screen.getByRole('button', { name: 'submit' }))

    expect(screen.getByText('Feedback Results')).toBeInTheDocument()
    expect(
      container.querySelector('.recharts-responsive-container')
    ).toBeInTheDocument()
    expect(screen.getByText('Latest Comments')).toBeInTheDocument()
    expect(screen.getByText('email@mail.com')).toBeInTheDocument()
    expect(screen.getByText('comment')).toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: 'go back' }))

    expect(screen.getByText('Feedback Form')).toBeInTheDocument()
  })
})
