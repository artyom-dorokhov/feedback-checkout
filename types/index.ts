export type FeedbackForm = {
  name: string
  email: string
  rating: '1' | '2' | '3' | '4' | '5'
  comment: string
}
