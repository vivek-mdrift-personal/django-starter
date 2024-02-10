import { useState } from 'react'
import Tab from '@mui/material/Tab'
import TabPanel from '@mui/lab/TabPanel'
import TabContext from '@mui/lab/TabContext'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import MuiTabList from '@mui/lab/TabList'
import UserView from 'src/dashboard/settings-admin/user-table/UserView'
import RoleView from 'src/dashboard/settings-admin/role-table/RoleView'
import MemberView from 'src/dashboard/settings-admin/member-table/MemberView'

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

const TabsCustomized = () => {
  // ** State
  const [value, setValue] = useState('1')

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <>
       <Typography sx={{ fontSize: '20px', mb: 2 }}>User & Role</Typography>
       
 
    <TabContext value={value}>
      <TabList onChange={handleChange} aria-label='customized tabs example'>
        <Tab value='1' label='User' />
        <Tab value='2' label='Role' />
        <Tab value='3' label='Members' />
      </TabList>
      <TabPanel value='1' sx={{ p: 0 }}>
        <Typography>
          <UserView />
        </Typography>
      </TabPanel>
      <TabPanel value='2' sx={{ p: 0 }}>
        <Typography>
          <RoleView />
        </Typography>
      </TabPanel>
      <TabPanel value='3' sx={{ p: 0 }}>
        <Typography>
          <MemberView />
        </Typography>
      </TabPanel>
    </TabContext>
    </>
  )
}

export default TabsCustomized
