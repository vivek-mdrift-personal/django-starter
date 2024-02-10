import React, { useState } from 'react'
import EventDate from './EventDate'
import Grid from '@mui/material/Grid'
import CreateSession from './CreateSession'

import CreateSessionList from './CreateSessionList'

const SeheduleView = () => {
  const [showList, setShowList] = useState(false)

  const receivedData = data => {
    setShowList(data)
  }

  return (
    <Grid container spacing={2} style={{ height: '60vh' }}>
      <Grid item xs={12} sm={3} md={4} lg={3.5}>
        <EventDate />
      </Grid>

      <Grid item xs={12} sm={9} md={8}  lg={8.5} style={{ border: '1px solid #e1e1e3', padding: 5, borderRadius: 5, width: '100%' }}>
        {showList ? <></> : <CreateSession callback={receivedData} />}
        {showList ? <CreateSessionList /> : <></>}
      </Grid>
    </Grid>
  )
}

export default SeheduleView
