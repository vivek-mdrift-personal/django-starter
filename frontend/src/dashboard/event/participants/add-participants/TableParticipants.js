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
import { rows } from './static-data'

const statusObj = {
  1: { title: 'Active', color: 'success' },
  2: { title: 'Inactive', color: 'warning' }
}

const columns = [
  {
    flex: 0.275,
    minWidth: 290,
    field: 'full_name',
    headerName: 'Name',
    renderCell: params => {
      const { row } = params

      return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography noWrap variant='body2' sx={{ color: 'text.primary', fontWeight: 600 }}>
              {row.full_name}
            </Typography>
            <Typography noWrap variant='caption'>
              {row.email}
            </Typography>
          </Box>
        </Box>
      )
    }
  },
  {
    flex: 0.2,
    field: 'phone_number',
    minWidth: 140,
    headerName: 'Phone Number',
    renderCell: params => (
      <Typography variant='body2' sx={{ color: 'text.primary' }}>
        {params.row.phone_number}
      </Typography>
    )
  },

  // {
  //   flex: 0.2,
  //   minWidth: 120,
  //   field: 'email',
  //   headerName: 'EMAIL',
  //   renderCell: params => (
  //     <Typography variant='body2' sx={{ color: 'text.primary' }}>
  //       {params.row.email}
  //     </Typography>
  //   )
  // },

  {
    flex: 0.275,
    minWidth: 250,
    field: 'company',
    headerName: 'COMPANY',
    renderCell: params => (
      <Typography variant='body2' sx={{ color: 'text.primary' }}>
        {params.row.company}
      </Typography>
    )
  },

  {
    flex: 0.2,
    minWidth: 120,
    field: 'category',
    headerName: 'Category',
    renderCell: params => (
      <Typography variant='body2' sx={{ color: 'text.primary' }}>
        {params.row.category}
      </Typography>
    )
  },

  {
    flex: 0.2,
    minWidth: 120,
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
        {/* <IconButton>
          <Icon icon='tabler:edit' />
        </IconButton> */}
        <IconButton>
          <Icon icon='tabler:trash' />
        </IconButton>
      </Box>
    )
  }
]

const TableParticipants = () => {
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
        checkboxSelection
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

export default TableParticipants
