// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import { DataGrid } from '@mui/x-data-grid'
import IconButton from '@mui/material/IconButton'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Custom Components
import CustomChip from 'src/@core/components/mui/chip'
import CustomAvatar from 'src/@core/components/mui/avatar'
import TableHeader from './TableHeader'
import { getInitials } from 'src/@core/utils/get-initials'

// ** Data Import
import { rows } from './static-data'

const colors = {
  conducted: 'secondary',
  event: 'secondary',
  session: 'secondary',
  'restricted-user': 'error'
}

const statusObj = {
  1: { title: 'Ongoing', color: 'success' },
  2: { title: 'Pending', color: 'warning' }
}

const columns = [
  {
    flex: 0.1,
    field: 'id',
    minWidth: 50,
    headerName: 'id',
    renderCell: params => (
      <Typography variant='body2' sx={{ color: 'text.primary' }}>
        {params.row.id}
      </Typography>
    )
  },
  {
    flex: 0.2,
    minWidth: 200,
    field: 'event',
    headerName: 'EVENT',
    renderCell: params => (
      <Typography variant='body2' sx={{ color: 'text.primary' }}>
        {params.row.event}
      </Typography>
    )
  },

  {
    flex: 0.2,
    minWidth: 100,
    field: 'start_date',
    headerName: 'Start Date',
    renderCell: params => (
      <Typography variant='body2' sx={{ color: 'text.primary' }}>
        {params.row.start_date}
      </Typography>
    )
  },

  {
    flex: 0.2,
    field: 'end_Date',
    minWidth: 100,
    headerName: 'End Date',
    renderCell: params => (
      <Typography variant='body2' sx={{ color: 'text.primary' }}>
        {params.row.end_Date}
      </Typography>
    )
  },

  {
    flex: 0.3,
    minWidth: 300,
    field: 'location',
    headerName: 'location',
    renderCell: params => (
      <Typography variant='body2' sx={{ color: 'text.primary' }}>
        {params.row.location}
      </Typography>
    )
  },

  {
    flex: 0.2,
    minWidth: 100,
    field: 'conducted',
    headerName: 'conducted',
    renderCell: params => (
      <Typography variant='body2' sx={{ color: 'text.primary' }}>
        {params.row.conducted}
      </Typography>
    )
  },

  {
    flex: 0.2,
    minWidth: 100,
    field: 'status',
    headerName: 'Status',
    renderCell: params => {
      const status = statusObj[params.row.status]

      return (
        <CustomChip
          rounded
          size='small'
          skin='light'
          color={status.color}
          label={status.title}
          sx={{ '& .MuiChip-label': { textTransform: 'capitalize' } }}
        />
      )
    }
  },
  {
    flex: 0.15,
    minWidth: 120,
    sortable: false,
    field: 'actions',
    headerName: 'Actions',
    renderCell: ({ row }) => (
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <IconButton>
          <Icon icon='tabler:edit' />
        </IconButton>
        <IconButton>
          <Icon icon='tabler:trash' />
        </IconButton>
      </Box>
    )
  }
]

const TableEventList = () => {
  // ** States
  const [data] = useState(rows)
  const [searchText, setSearchText] = useState('')
  const [filteredData, setFilteredData] = useState([])
  const [paginationModel, setPaginationModel] = useState({ page: 0, pageSize: 6 })

  const handleSearch = searchValue => {
    setSearchText(searchValue)
    const searchRegex = new RegExp(escapeRegExp(searchValue), 'i')

    const filteredRows = data.filter(row => {
      return Object.keys(row).some(field => {
        // @ts-ignore
        return searchRegex.test(row[field].toString())
      })
    })
    if (searchValue.length) {
      setFilteredData(filteredRows)
    } else {
      setFilteredData([])
    }
  }

  return (
    <Card>
      <DataGrid
        autoHeight
        columns={columns}
        pageSizeOptions={[6, 10, 25, 50]}
        paginationModel={paginationModel}
        slots={{ toolbar: TableHeader }}
        onPaginationModelChange={setPaginationModel}
        rows={filteredData.length ? filteredData : data}
        sx={{
          '& .MuiSvgIcon-root': {
            fontSize: '1.125rem'
          }
        }}
        slotProps={{
          baseButton: {
            size: 'medium',
            variant: 'outlined'
          },
          toolbar: {
            value: searchText,
            clearSearch: () => handleSearch(''),
            onChange: event => handleSearch(event.target.value)
          }
        }}
      />
    </Card>
  )
}

export default TableEventList
