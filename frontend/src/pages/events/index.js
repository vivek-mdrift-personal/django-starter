// ** Next Import
import Link from 'next/link'

// ** MUI Imports
import Grid from '@mui/material/Grid'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import TableFilter from 'src/@core/layouts/components/table/TableFilter'
import PageHeader from 'src/@core/components/page-header'
import { Card } from '@mui/material'
import TableEventList from 'src/dashboard/event/event-list/TableEventList'

// ** Demo Components Imports

const LinkStyled = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  color: theme.palette.primary.main
}))

const PollView = () => {
  return (
    <>
   <Typography sx={{ fontSize: '20px', mb: 1 }}>Events</Typography>
    <Card className='tab-space' sx={{ mt: 2 }}>
      <TableEventList />
    </Card>
    </>
  )
}

export default PollView
