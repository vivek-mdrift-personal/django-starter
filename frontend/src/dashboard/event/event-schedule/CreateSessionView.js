import React from 'react'
import Grid from '@mui/material/Grid'
import CustomAvatar from 'src/@core/components/mui/avatar'
import CustomTextField from 'src/@core/components/mui/text-field'
import CreateEventUpload from '../create-event/CreateEventUpload'
import DropzoneWrapper from 'src/@core/styles/libs/react-dropzone'
import PickersTimeView from './PickersTimeView'
import Autocomplete from '@mui/material/Autocomplete'
import Chip from '@mui/material/Chip'
import Button from '@mui/material/Button'
import Icon from 'src/@core/components/icon'

const ModulesSelect = [
  //   { title: 'Module 1' },
  //   { title: 'Module 2' },
  //   { title: 'Module 3' },
  //   { title: 'Module 4' }
  // Add more films as needed
]

const CreateSessionView = () => {
  return (
    <Grid container spacing={4} mt={2}>
      <Grid item xs={12} sm={6}>
        <CustomTextField fullWidth label='Session Name' placeholder='Name' />
      </Grid>
      <Grid item xs={12} sm={6}>
        <CustomTextField fullWidth label='Session Description' placeholder='Description' />
      </Grid>
      <Grid item xs={12} sm={12}>
        <PickersTimeView />
      </Grid>
      <Grid item xs={12} sm={12}>
        <Autocomplete
          freeSolo
          multiple
          fullWidth
          options={ModulesSelect}
          filterSelectedOptions
          defaultValue={[ModulesSelect[13]]}
          id='autocomplete-multiple-outlined'
          getOptionLabel={option => (option && option.title) || ''}
          renderInput={params => <CustomTextField {...params} variant='filled' label='Speakers' placeholder='Add..' />}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => <Chip label={option} {...getTagProps({ index })} key={index} />)
          }
        />
      </Grid>
    </Grid>
  )
}

export default CreateSessionView
