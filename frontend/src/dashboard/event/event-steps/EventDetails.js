import Grid from '@mui/material/Grid'
import CustomAvatar from 'src/@core/components/mui/avatar'
import CustomTextField from 'src/@core/components/mui/text-field'
import CreateEventUpload from '../create-event/CreateEventUpload'
import DropzoneWrapper from 'src/@core/styles/libs/react-dropzone'

const EventDetails = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12} sm={6}>
        <CustomTextField fullWidth label='Event Name' placeholder='Event Name' />
      </Grid>
      <Grid item xs={12} sm={6}>
        <CustomTextField fullWidth label='Event Description' placeholder='Event Description' />
      </Grid>
      <Grid item xs={12} sm={12}>
        <CustomTextField fullWidth rows={2} multiline label='Brief Description ' placeholder='Type..' />
      </Grid>
      <Grid item xs={12} sm={12}>
        <DropzoneWrapper>
          <CreateEventUpload />
        </DropzoneWrapper>
      </Grid>
    </Grid>
  )
}

export default EventDetails
