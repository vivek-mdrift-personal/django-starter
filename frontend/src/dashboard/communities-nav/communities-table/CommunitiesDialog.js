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
import TableCommunities from './add-participants/TableCommunities'

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

const CommunitiesDialog = () => {
  // ** State
  const [open, setOpen] = useState(false)
  const handleDialogToggle = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <div>
      <Button variant='contained' color='warning' sx={{ '& svg': { mr: 2 }, display: 'block', width: '100%' }} onClick={handleDialogToggle} >
        {/* <Icon fontSize='1.125rem' icon='tabler:plus' /> */}
        Create
      </Button>
      <Dialog
        fullWidth
        maxWidth='lg'
        open={open}
        onClose={handleClose}
        aria-labelledby='customized-dialog-title'
        sx={{ '& .MuiDialog-paper': { overflow: 'visible' } }}
      >
        <DialogTitle id='customized-dialog-title' sx={{ p: 4 }}>
          <Typography variant='h6' component='span' >
          Add Members
          </Typography>
          <CustomCloseButton aria-label='close' onClick={handleClose}>
            <Icon icon='tabler:x' fontSize='1.25rem' />
          </CustomCloseButton>
        </DialogTitle>
        <Box m={5}>
          <TableCommunities />
        </Box>

        <DialogActions sx={{ p: theme => `${theme.spacing(3)} !important` }}>
          {/* <Button onClick={handleClose}>Save changes</Button> */}
          <Button variant='contained' color='warning' sx={{ '& svg': { mr: 2 } }} onClick={handleDialogToggle}>
            <Icon fontSize='1.125rem' icon='tabler:plus' />
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default CommunitiesDialog
