import { useState } from 'react'

// ** MUI Imports
import Tab from '@mui/material/Tab'
import TabPanel from '@mui/lab/TabPanel'
import TabContext from '@mui/lab/TabContext'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import MuiTabList from '@mui/lab/TabList'
import UserView from 'src/dashboard/settings-admin/user-table/UserView'
import RoleView from 'src/dashboard/settings-admin/role-table/RoleView'
import Icon from 'src/@core/components/icon'
import PollView from 'src/dashboard/content/poll-table/PollView'
import QuizView from 'src/dashboard/content/quiz-table/QuizView'
import FaqView from 'src/dashboard/content/faq-table/FaqView'

// Styled TabList component
const TabList = styled(MuiTabList)(({ theme }) => ({
  borderBottom: '0 !important',
  '&, & .MuiTabs-scroller': {
    boxSizing: 'content-box',
    padding: theme.spacing(1.25, 1.25, 2),
    margin: `${theme.spacing(-1.25)} ${theme.spacing(-1.25)} ${theme.spacing(-2)} !important`
  },
  '& .MuiTabs-indicator': {
    display: 'none'
  },
  '& .Mui-selected': {
    boxShadow: theme.shadows[2],
    backgroundColor: theme.palette.warning.main,
    color: theme.palette.common.white + ' !important'
  },
  '& .MuiTab-root': {
    lineHeight: 1,
    borderRadius: theme.shape.borderRadius,
    '&:hover': {
      color: theme.palette.warning.main
    }
  }
}))

const Content = () => {
  // ** State
  const [value, setValue] = useState('1')

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <>
   <Typography sx={{ fontSize: '20px', mb: 1 }}>Content</Typography>
   
    <TabContext value={value}>
      <TabList onChange={handleChange} aria-label='customized tabs example'>
        <Tab value='1' label='Poll' />
        <Tab value='2' label='Quiz' />
        <Tab value='3' label='Faq' />
      </TabList>
      <TabPanel value='1' sx={{ p: 0 }}>
        <Typography>
          <PollView />
        </Typography>
      </TabPanel>
      <TabPanel value='2' sx={{ p: 0 }}>
        <Typography>
          <QuizView />
        </Typography>
      </TabPanel>
      <TabPanel value='3' sx={{ p: 0 }}>
        <Typography>
          <FaqView />
        </Typography>
      </TabPanel>
    </TabContext>
    </>
  )
}

export default Content
