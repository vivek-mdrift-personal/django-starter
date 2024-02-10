// ** MUI Imports
import Link from 'next/link'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import { GridToolbarFilterButton } from '@mui/x-data-grid'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'

// ** Custom Component Import
import CustomTextField from 'src/@core/components/mui/text-field'

// ** Icon Imports
import Icon from 'src/@core/components/icon'
import CreateUserDialog from './CreateUserDialog'

const TableHeader = props => {
  // ** Props
  const { plan, handlePlanChange, handleFilter, value } = props

  return (
    <Box
      sx={{
        py: 4,
        px: 6,
        rowGap: 2,
        columnGap: 4,
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}
    >
      {/* <GridToolbarFilterButton /> */}
      <CustomTextField value={props.value} sx={{ mr: 4, mb: 2 }} placeholder='Search...' onChange={props.onChange} />
      <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
        <CustomTextField select value={plan} sx={{ mr: 2 }} defaultValue='Status'>
          <MenuItem value='Status'> Status</MenuItem>
          <MenuItem value='completed'>Completed</MenuItem>
          <MenuItem value='pending'>Pending</MenuItem>
          <MenuItem value='ongoing'>Ongoing</MenuItem>
        </CustomTextField>

        <Link href='create-faq'>
          <Button variant='contained' color='warning' sx={{ '& svg': { mr: 2 } }}>
            <Icon fontSize='1.125rem' icon='tabler:plus' />
            Create Faq
          </Button>
        </Link>
      </Box>
    </Box>
  )
}

export default TableHeader
