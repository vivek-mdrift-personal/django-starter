import Grid from '@mui/material/Grid'
import CustomAvatar from 'src/@core/components/mui/avatar'
import CustomTextField from 'src/@core/components/mui/text-field'

const AnswersSteper = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12} sm={12}>
        <CustomTextField
          fullWidth
          rows={2}
          multiline
          label='Why is important to meet this person ?'
          placeholder='Type..'
        />
      </Grid>
      <Grid item xs={12} sm={12}>
        <CustomTextField
          fullWidth
          rows={2}
          multiline
          label='What can be achieved by working with this person ? '
          placeholder='Type..'
        />
      </Grid>
      <Grid item xs={12} sm={12}>
        <CustomTextField
          fullWidth
          rows={2}
          multiline
          label='How to engage this person effectively ? '
          placeholder='Type..'
        />
      </Grid>
    </Grid>
  )
}

export default AnswersSteper
