import transformChartData, { ChartData } from './transformChartData'
import { FeedbackForm } from '@/types'

const results: FeedbackForm[] = [
  {
    rating: '1',
    name: 'A',
    email: 'a@mail.com',
    comment: 'a',
  },
  {
    rating: '5',
    name: 'B',
    email: 'b@mail.com',
    comment: 'b',
  },
  {
    rating: '3',
    name: 'C',
    email: 'c@mail.com',
    comment: 'C',
  },
  {
    rating: '3',
    name: 'D',
    email: 'd@mail.com',
    comment: 'd',
  },
  {
    rating: '1',
    name: 'E',
    email: 'e@mail.com',
    comment: 'e',
  },
]

const chartData: ChartData[] = [
  {
    rating: '1',
    count: 2,
  },
  {
    rating: '3',
    count: 2,
  },
  {
    rating: '5',
    count: 1,
  },
]

describe('transformChartData', () => {
  it('transforms data correctly', () => {
    expect(transformChartData(results)).toEqual(chartData)
  })
})
