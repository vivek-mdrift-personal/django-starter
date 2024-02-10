import React from 'react'
import Grid from '@mui/material/Grid'
import Chip from '@mui/material/Chip'
import Avatar from '@mui/material/Avatar'

// ** Icon Imports
import Icon from 'src/@core/components/icon'
import ReviewHeader from './ReviewHeader'

const ReviewView = () => {
  return (
    <div>
      <ReviewHeader />
      <h6>Event Session</h6>
      <Grid container spacing={3} className='box-card-border'>
        <Grid item xs={12} sm={10} style={{ display: 'flex', padding: '18px', gap: '8px' }}>
          <div>
            <Chip
              label='31 Oct 2023'
              avatar={
                <Avatar>
                  <Icon icon='tabler:calendar' fontSize={20} />
                </Avatar>
              }
            />
          </div>
          <div>
            <Chip
              label='Session 1'
              avatar={
                <Avatar>
                  <Icon icon='tabler:user' fontSize={20} />
                </Avatar>
              }
            />
          </div>
          <div>
            <Chip
              label='Session 2'
              avatar={
                <Avatar>
                  <Icon icon='tabler:user' fontSize={20} />
                </Avatar>
              }
            />
          </div>
          <div>
            <Chip
              label='Session 3'
              avatar={
                <Avatar>
                  <Icon icon='tabler:user' fontSize={20} />
                </Avatar>
              }
            />
          </div>
        </Grid>
        <Grid item xs={12} sm={2}>
          <div style={{ display: 'flex', justifyContent: 'end', padding: '6px' }}>
            <Avatar>
              <Icon icon='tabler:edit' fontSize={20} />
            </Avatar>
          </div>
        </Grid>
      </Grid>
      <h6>Total Members</h6>

      <Grid container spacing={3} className='box-card-border'>
        <Grid item xs={12} sm={10} style={{ display: 'flex', padding: '18px', gap: '8px' }}>
          <div>
            <Chip label='Jamal Kerrod' />
          </div>
          <div>
            <Chip label='Shamus Tuttle' />
          </div>
          <div>
            <Chip label='Devonne Wallbridge' />
          </div>
          <div>
            <Chip label='Ariella Filippyev' />
          </div>
        </Grid>
        <Grid item xs={12} sm={2}>
          <div style={{ display: 'flex', justifyContent: 'end', padding: '6px' }}>
            <Avatar>
              <Icon icon='tabler:edit' fontSize={20} />
            </Avatar>
          </div>
        </Grid>
      </Grid>

      <h6>Activity</h6>

      <Grid container spacing={3} className='box-card-border'>
        <Grid item xs={12} sm={10} style={{ display: 'flex', padding: '18px', gap: '8px' }}>
          <div>
            <Chip label='Audience Poll' />
          </div>
          <div>
            <Chip label='Quiz' />
          </div>
          <div>
            <Chip label='FAQ' />
          </div>
        </Grid>
        <Grid item xs={12} sm={2}>
          <div style={{ display: 'flex', justifyContent: 'end', padding: '6px' }}>
            <Avatar>
              <Icon icon='tabler:edit' fontSize={20} />
            </Avatar>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default ReviewView
