import { useTheme } from '@mui/material/styles'
import { Button, Typography, Stack, Grid } from '@mui/material'
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Bar,
} from 'recharts'
import { FeedbackForm } from '@/types'
import transformChartData from './transformChartData'

type FeedbackResultsPageProps = {
  results: FeedbackForm[]
  onBack: () => void
}

export default function FeedbackResultsPage({
  results,
  onBack,
}: FeedbackResultsPageProps) {
  const theme = useTheme()

  return (
    <>
      <Grid container justifyContent="space-between" my={2}>
        <Typography variant="h5">Feedback Results</Typography>
        <Button type="button" variant="contained" onClick={onBack}>
          go back
        </Button>
      </Grid>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={transformChartData(results)}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="rating" />
          <YAxis dataKey="count" />
          <Bar dataKey="count" fill={theme.palette.primary.main} />
        </BarChart>
      </ResponsiveContainer>
      <Typography variant="h6" my={2}>
        Latest Comments
      </Typography>
      <Stack spacing={2}>
        {results.map(({ email, comment }, index) => (
          <div key={index}>
            <Typography variant="subtitle1">{email}</Typography>
            <Typography>{comment}</Typography>
          </div>
        ))}
      </Stack>
    </>
  )
}
