import { Card } from '@mui/material'
import React from 'react'
import Image from 'next/image'

const EventHeader = () => {
  return (
    <Card>
      <div style={{ display: 'flex', gap: '20px', padding: '20px' }}>
        <div style={{ display: 'flex', gap: '11px' }}>
          <div>
            <Image src='/images/icons/profile_icon.png' alt='Picture' width={50} height={50} />
          </div>
          <div style={{ alignSelf: 'center' }}>
            <div>Asia Leaders Connect 2023</div>
            <div style={{ display: 'flex', gap: '11px' }}>
              <div>
                <Image src='/images/icons/ep_location.png ' alt='Picture' width={13} height={13} /> Singapore
              </div>
              <div>
                <Image src='/images/icons/solar_calendar.png' alt='Picture' width={13} height={13} /> 31 Oct 2023 - 03 Nov 2023
              </div>
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', gap: '11px' }}>
          <div>
            <Image src='/images/user.png' width={50} height={50} alt='Picture of the author' />
          </div>
          <div style={{ alignSelf: 'center' }}>
            <div>Rebecca Tetha</div>
            <div style={{ fontSize: '12px' }}>Coordinator</div>
          </div>
        </div>
      </div>
    </Card>
  )
}

export default EventHeader
