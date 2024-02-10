// ** Next Import
import Link from 'next/link'

// ** MUI Imports
import Grid from '@mui/material/Grid'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import TableFilter from 'src/@core/layouts/components/table/TableFilter'
import PageHeader from 'src/@core/components/page-header'
import TableUser from './TableUser'
import { Card } from '@mui/material'

// ** Demo Components Imports

const LinkStyled = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  color: theme.palette.primary.main
}))

const SettingsView = () => {
  return (
    <Card className='tab-space' sx={{ mt: 2 }}>
      <TableUser />
    </Card>
  )
}

export default SettingsView
