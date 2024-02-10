import React from 'react'
import Grid from '@mui/material/Grid'
import Chip from '@mui/material/Chip'
import Avatar from '@mui/material/Avatar'
import Image from 'next/image'
import Icon from 'src/@core/components/icon'

const ReviewHeader = () => {
  return (
    <Grid container spacing={3} className='box-card-border'>
      <Grid item xs={12} sm={10} style={{ display: 'flex', padding: '18px', gap: '5px' }}>
        <div>
          <Image src='/images/img/card_image_1.png'  alt='Picture' width={80} height={50} style={{ borderRadius: '5px' }} />
        </div>
        <div>
          <Image
            src='/images/img/card_image_2.png'
            width={80}
            height={50}
            alt='Picture of the author'
            style={{ borderRadius: '5px' }}
          />
        </div>

        <div style={{ padding: '8px' }}>
          <Chip label='Asia Leaders Connect 2023' />
        </div>

        <div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</p>
        </div>
        <div style={{ padding: '8px' }}>
          <Chip
            label='Rebecca Tetha'
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
  )
}

export default ReviewHeader
