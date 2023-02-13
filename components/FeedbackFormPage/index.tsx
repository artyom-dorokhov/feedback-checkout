import {
  Grid,
  TextField,
  Button,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material'

type FeedbackFormPageProps = {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
}

export default function FeedbackFormPage({ onSubmit }: FeedbackFormPageProps) {
  return (
    <>
      <Typography variant="h5" my={2}>
        Feedback Form
      </Typography>
      <form onSubmit={onSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Grid container rowSpacing={2}>
              <Grid item xs={12}>
                <TextField name="name" label="name" required fullWidth />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  type="email"
                  name="email"
                  label="email"
                  required
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel required>rating</InputLabel>
                  <Select
                    name="rating"
                    label="rating"
                    required
                    defaultValue="5"
                  >
                    {[1, 2, 3, 4, 5].map((i) => (
                      <MenuItem key={i} value={i}>
                        {i}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              multiline
              rows={8}
              name="comment"
              label="comment"
              required
              fullWidth
              sx={{ height: '100%' }}
            />
          </Grid>
          <Grid item xs={12}>
            <Grid container justifyContent="flex-end">
              <Button type="submit" variant="contained">
                submit
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </>
  )
}
