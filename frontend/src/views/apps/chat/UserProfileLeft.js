// ** React Imports
import { Fragment } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import Badge from '@mui/material/Badge'
import Radio from '@mui/material/Radio'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import Switch from '@mui/material/Switch'
import ListItem from '@mui/material/ListItem'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import RadioGroup from '@mui/material/RadioGroup'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import ListItemButton from '@mui/material/ListItemButton'
import FormControlLabel from '@mui/material/FormControlLabel'

// ** Custom Component Import
import CustomTextField from 'src/@core/components/mui/text-field'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Third Party Components
import PerfectScrollbar from 'react-perfect-scrollbar'

// ** Custom Component Imports
import Sidebar from 'src/@core/components/sidebar'
import ProfileUpload from './ProfileUpload'
import CommunitiesDialog from 'src/dashboard/communities-nav/communities-table/CommunitiesDialog'

const UserProfileLeft = props => {
  const {
    store,
    hidden,
    statusObj,
    userStatus,
    sidebarWidth,
    setUserStatus,
    userProfileLeftOpen,
    handleUserProfileLeftSidebarToggle
  } = props

  const handleUserStatus = e => {
    setUserStatus(e.target.value)
  }

  const ScrollWrapper = ({ children }) => {
    if (hidden) {
      return <Box sx={{ height: '100%', overflowY: 'auto', overflowX: 'hidden' }}>{children}</Box>
    } else {
      return <PerfectScrollbar options={{ wheelPropagation: false }}>{children}</PerfectScrollbar>
    }
  }

  return (
    <Sidebar
      show={userProfileLeftOpen}
      backDropClick={handleUserProfileLeftSidebarToggle}
      sx={{
        zIndex: 9,
        height: '100%',
        width: sidebarWidth,
        borderTopLeftRadius: theme => theme.shape.borderRadius,
        borderBottomLeftRadius: theme => theme.shape.borderRadius,
        '& + .MuiBackdrop-root': {
          zIndex: 8,
          borderRadius: 1
        }
      }}
    >
      {store && store.userProfile ? (
        <Fragment>
          <IconButton
            size='small'
            onClick={handleUserProfileLeftSidebarToggle}
            sx={{ top: '0.5rem', right: '0.5rem', position: 'absolute', color: 'text.disabled' }}
          >
            <Icon icon='tabler:x' />
          </IconButton>

          <Box sx={{ display: 'flex', flexDirection: 'column', p: theme => theme.spacing(11.25, 6, 4.5) }}>
            {/* <Box sx={{ mb: 3.5, display: 'flex', justifyContent: 'center' }}>
              <Badge
                overlap='circular'
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right'
                }}
                badgeContent={
                  <Box
                    component='span'
                    sx={{
                      width: 10,
                      height: 10,
                      borderRadius: '50%',
                      color: `${statusObj[userStatus]}.main`,
                      backgroundColor: `${statusObj[userStatus]}.main`,
                      boxShadow: theme => `0 0 0 2px ${theme.palette.background.paper}`
                    }}
                  />
                }
              >
                <Avatar
                  sx={{ width: 80, height: 80 }}
                  src={store.userProfile.avatar}
                  alt={store.userProfile.fullName}
                />

              </Badge>
            </Box> */}
               <ProfileUpload />
      
          </Box>

          <Box sx={{ height: 'calc(100% - 13.3125rem)' }}>
            <ScrollWrapper>
              <Box sx={{ p: 6 }}>

              <CustomTextField fullWidth label=' Communitie Name' placeholder=' Communitie Name' />
              
                
                <CustomTextField
                  multiline
                  fullWidth
                  minRows={4}
                  sx={{ mt: 6 ,mb:4 }}
                  defaultValue={store.userProfile.about}
                  label='Description' placeholder=' Description'
                />

               <CommunitiesDialog />
              </Box>
            </ScrollWrapper>
          </Box>
        </Fragment>
      ) : null}
    </Sidebar>
  )
}

export default UserProfileLeft
