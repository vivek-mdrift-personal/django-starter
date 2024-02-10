import React from 'react'
import Grid from '@mui/material/Grid'
import MenuItem from '@mui/material/MenuItem'

// ** Custom Component Import
import CustomTextField from 'src/@core/components/mui/text-field'

const IdentifySteper = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12} sm={6}>
        <CustomTextField fullWidth label='Name' placeholder='Name..' />
      </Grid>
      <Grid item xs={12} sm={6}>
        <CustomTextField fullWidth label='Designation' placeholder='Designation..' />
      </Grid>

      <Grid item xs={12} sm={6}>
        <CustomTextField fullWidth label='Organisation' placeholder='Organisation..' />
      </Grid>
      <Grid item xs={12} sm={6}>
        <CustomTextField fullWidth label='Contact Number' placeholder='Contact Number..' />
      </Grid>

      <Grid item xs={12} sm={6}>
        <CustomTextField fullWidth label='Email' placeholder='Email..' />
      </Grid>
      <Grid item xs={12} sm={6}>
        <CustomTextField fullWidth select defaultValue='Platform' label='Platform'>
          <MenuItem value='Platform'>Platform</MenuItem>
          <MenuItem value='Platform1'>Platform 1</MenuItem>
          <MenuItem value='Platform2'>Platform 2</MenuItem>
        </CustomTextField>
      </Grid>
    </Grid>
  )
}

export default IdentifySteper
