import { FeedbackForm } from '@/types'

export type ChartData = { rating: FeedbackForm['rating']; count: number }

const transformChartData = (data: FeedbackForm[]): ChartData[] => {
  const map = data.reduce((res, { rating }) => {
    const count = res.get(rating) || 0
    res.set(rating, count + 1)
    return res
  }, new Map<FeedbackForm['rating'], number>())

  const sortedMap = new Map([...Array.from(map)].sort())

  return Array.from(sortedMap.entries()).map(([rating, count]) => ({
    rating,
    count,
  }))
}

export default transformChartData
