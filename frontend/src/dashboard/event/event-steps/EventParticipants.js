import React from 'react'
import Icon from 'src/@core/components/icon'
import ParticipantsDialog from '../participants/ParticipantsDialog'

const EventParticipants = () => {
  return (
    <div>
      <div className='box-border'>
        <div className='box-section-title'>
          <ParticipantsDialog />
        </div>
      </div>
    </div>
  )
}

export default EventParticipants
