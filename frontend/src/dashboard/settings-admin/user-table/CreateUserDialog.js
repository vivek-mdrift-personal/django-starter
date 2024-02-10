// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import IconButton from '@mui/material/IconButton'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import MenuItem from '@mui/material/MenuItem'
import Box from '@mui/material/Box'
import Image from 'next/image'

// ** Custom Component Import
import CustomTextField from 'src/@core/components/mui/text-field'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

const CustomCloseButton = styled(IconButton)(({ theme }) => ({
  top: 0,
  right: 0,
  color: 'grey.500',
  position: 'absolute',
  boxShadow: theme.shadows[2],
  transform: 'translate(10px, -10px)',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: `${theme.palette.background.paper} !important`,
  transition: 'transform 0.25s ease-in-out, box-shadow 0.25s ease-in-out',
  '&:hover': {
    transform: 'translate(7px, -5px)'
  }
}))

const DialogCustomized = () => {
  // ** State
  const [open, setOpen] = useState(false)
  const handleDialogToggle = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <div>
      <Button variant='contained' color='warning' sx={{ '& svg': { mr: 2 } }} onClick={handleDialogToggle}>
        <Icon fontSize='1.125rem' icon='tabler:plus' />
        Create User
      </Button>
      <Dialog
        fullWidth
        maxWidth='md'
        open={open}
        onClose={handleClose}
        aria-labelledby='customized-dialog-title'
        sx={{ '& .MuiDialog-paper': { overflow: 'visible' } }}
      >
        <DialogTitle id='customized-dialog-title' sx={{ p: 4 }}>
          {/* <Typography variant='h6' component='span'>
            Modal title
          </Typography> */}
          <CustomCloseButton aria-label='close' onClick={handleClose}>
            <Icon icon='tabler:x' fontSize='1.25rem' />
          </CustomCloseButton>
        </DialogTitle>

        <Grid container spacing={3} dividers sx={{ p: theme => `${theme.spacing(4)} !important` }}>
          <Grid sx={{ bgcolor: '#f9f9f9', padding: 2, borderRadius: 3 }} item sm={6} xs={12}>
            <Box sx={{ mb: 8, textAlign: 'left' }}>
              <Typography variant='h3' sx={{ mb: 3 }}>
                Create User
              </Typography>
              <Typography sx={{ color: 'text.secondary' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacinia facilisis mattis diamLorem ipsum dolor
                sit amet, consectetur adipiscing elit. Lacinia facilisis mattis diam
              </Typography>
            </Box>
            <Box display='flex' justifyContent='center' alignItems='center'>
              <Image src='/images/img/create_user.png' width={300} height={250} alt='Picture of the author' />
            </Box>
          </Grid>
          <Grid item sm={6} xs={6}>
            <Box sx={{ mb: 4 }}>
              <CustomTextField fullWidth defaultValue='Name' label='Name *' placeholder='Doe' />
            </Box>
            <Box sx={{ mb: 4 }}>
              <CustomTextField fullWidth defaultValue='Username' label='Username *' placeholder='Doe' />
            </Box>
            <Box sx={{ mb: 4 }}>
              <CustomTextField fullWidth select sx={{ mr: 2 }} defaultValue='Select Plan' label='Role *'>
                <MenuItem value='Select Plan'>Select Plan</MenuItem>
                <MenuItem value='basic'>Admin</MenuItem>
                <MenuItem value='company'>Coordinator</MenuItem>
              </CustomTextField>
            </Box>

            <Box sx={{ mb: 4 }}>
              <CustomTextField fullWidth defaultValue='Email' label='Email *' placeholder='Doe' />
            </Box>
            <Box sx={{ mb: 4 }}>
              <CustomTextField fullWidth defaultValue='Phone Number' label='Phone Number *' placeholder='Doe' />
            </Box>

            <Box sx={{ mb: 4 }}>
              <CustomTextField fullWidth select sx={{ mr: 2 }} defaultValue='Location' label='Location *'>
                <MenuItem value='Location'>Location</MenuItem>
                <MenuItem value='basic'>Location 1</MenuItem>
                <MenuItem value='company'>Location 2</MenuItem>
              </CustomTextField>
            </Box>
          </Grid>
        </Grid>

        <DialogActions sx={{ p: theme => `${theme.spacing(3)} !important` }}>
          {/* <Button onClick={handleClose}>Save changes</Button> */}
          <Button variant='contained' color='warning' sx={{ '& svg': { mr: 2 } }} onClick={handleDialogToggle}>
            <Icon fontSize='1.125rem' icon='tabler:plus' />
            Create User
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default DialogCustomized
