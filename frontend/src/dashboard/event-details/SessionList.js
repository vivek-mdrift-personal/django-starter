import React from 'react'
import Grid from '@mui/material/Grid'
import Chip from '@mui/material/Chip'
import Avatar from '@mui/material/Avatar'
import { Card } from '@mui/material'
import Icon from 'src/@core/components/icon'

const SessionList = () => {
  return (
    <>
      <Card sx={{ mt: 2, p: 2 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={1} style={{ display: 'flex', padding: '20px 18px', gap: '8px' }}>
            <div>
              <Chip label='Introduction' avatar={<Avatar>1</Avatar>} />
            </div>
            <div>
              <Chip
                label='24 Dec 2023'
                avatar={
                  <Avatar>
                    <Icon icon='tabler:calendar' fontSize={20} />
                  </Avatar>
                }
              />
            </div>
            <div>
              <Chip
                label='06:00:00 AM -  07:00:00 AM '
                avatar={
                  <Avatar>
                    <Icon icon='tabler:clock' fontSize={20} />
                  </Avatar>
                }
              />
            </div>
            <div>
              <Chip
                label='Arun Ashok'
                avatar={
                  <Avatar>
                    <Icon icon='tabler:user' fontSize={20} />
                  </Avatar>
                }
              />
            </div>
            <div>
              <Chip
                label='Anjaly Dennis'
                avatar={
                  <Avatar>
                    <Icon icon='tabler:user' fontSize={20} />
                  </Avatar>
                }
              />
            </div>
            <div>
              <Chip
                label='Orchard Hotel Singapore'
                avatar={
                  <Avatar>
                    <Icon icon='tabler:archive' fontSize={20} />
                  </Avatar>
                }
              />
            </div>
          </Grid>

          <p xs={12} sm={12} style={{ margin: '0px 10px', padding: '0px 18px' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.Lorem ipsum dolor sit amet
          </p>
        </Grid>
      </Card>
      <Card sx={{ mt: 2, p: 2 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={1} style={{ display: 'flex', padding: '20px 18px', gap: '8px' }}>
            <div>
              <Chip label='Introduction' avatar={<Avatar>2</Avatar>} />
            </div>
            <div>
              <Chip
                label='24 Dec 2023'
                avatar={
                  <Avatar>
                    <Icon icon='tabler:calendar' fontSize={20} />
                  </Avatar>
                }
              />
            </div>
            <div>
              <Chip
                label='06:00:00 AM -  07:00:00 AM '
                avatar={
                  <Avatar>
                    <Icon icon='tabler:clock' fontSize={20} />
                  </Avatar>
                }
              />
            </div>
            <div>
              <Chip
                label='Arun Ashok'
                avatar={
                  <Avatar>
                    <Icon icon='tabler:user' fontSize={20} />
                  </Avatar>
                }
              />
            </div>
            <div>
              <Chip
                label='Anjaly Dennis'
                avatar={
                  <Avatar>
                    <Icon icon='tabler:user' fontSize={20} />
                  </Avatar>
                }
              />
            </div>
            <div>
              <Chip
                label='Orchard Hotel Singapore'
                avatar={
                  <Avatar>
                    <Icon icon='tabler:archive' fontSize={20} />
                  </Avatar>
                }
              />
            </div>
          </Grid>

          <p xs={12} sm={12} style={{ margin: '0px 10px', padding: '0px 18px' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.Lorem ipsum dolor sit amet
          </p>
        </Grid>
      </Card>
    </>
  )
}

export default SessionList
