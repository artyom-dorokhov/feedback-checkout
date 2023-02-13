import { useState } from 'react'
import { Container } from '@mui/material'
import { FeedbackForm } from '@/types'
import FeedbackFormPage from '../components/FeedbackFormPage'
import FeedbackResultsPage from '../components/FeedbackResultsPage'

export default function Feedback() {
  const [openResults, setOpenResults] = useState(false)
  const [results, setResults] = useState<FeedbackForm[]>([])

  const showResults = () => setOpenResults(true)
  const hideResults = () => setOpenResults(false)

  const addResult = (e: React.FormEvent<HTMLFormElement>) => {
    const formData = new FormData(e.currentTarget)
    const result = Object.fromEntries(formData.entries()) as FeedbackForm

    setResults((items) => [...items, result])
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    addResult(e)
    showResults()
  }

  return (
    <Container maxWidth="md">
      {openResults ? (
        <FeedbackResultsPage results={results} onBack={hideResults} />
      ) : (
        <FeedbackFormPage onSubmit={onSubmit} />
      )}
    </Container>
  )
}
