// ** Next Import
import Link from 'next/link'

// ** MUI Imports
import Grid from '@mui/material/Grid'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import TableFilter from 'src/@core/layouts/components/table/TableFilter'
import PageHeader from 'src/@core/components/page-header'
import TableRole from './TableRole'
import { Card } from '@mui/material'

// ** Demo Components Imports

const LinkStyled = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  color: theme.palette.primary.main
}))

const RoleView = () => {
  return (
    <Card className='tab-space' sx={{ mt: 2 }}>
      <TableRole />
    </Card>
  )
}

export default RoleView
