// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Tab from '@mui/material/Tab'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import TabContext from '@mui/lab/TabContext'
import Typography from '@mui/material/Typography'
import TableParticipants from '../event/participants/add-participants/TableParticipants'
import SessionList from './SessionList'

const EventTabs = () => {
  // ** State
  const [value, setValue] = useState('1')

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <TabContext value={value}>
      <TabList onChange={handleChange} aria-label='simple tabs example'>
        <Tab value='1' label='Sessions' />
        <Tab value='2' label='Participants' />
        <Tab value='3' label='Activity' />
      </TabList>
      <TabPanel value='1' sx={{ p: 0 }}>
        <Typography>
          <SessionList  />
        </Typography>
      </TabPanel>
      <TabPanel value='2' sx={{ p: 0 }}>
        <Typography>
          <TableParticipants />
        </Typography>
      </TabPanel>
      <TabPanel value='3' sx={{ p: 0 }}>
        <Typography>
          Danish tiramisu jujubes cupcake chocolate bar cake cheesecake chupa chups. Macaroon ice cream tootsie roll
          carrot cake gummi bears.
        </Typography>
      </TabPanel>
    </TabContext>
  )
}

export default EventTabs
