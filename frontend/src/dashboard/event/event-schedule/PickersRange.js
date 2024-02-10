// ** React Imports
import { useState, forwardRef } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'

// ** Custom Component Import
import CustomTextField from 'src/@core/components/mui/text-field'

// ** Third Party Imports
import format from 'date-fns/format'
import addDays from 'date-fns/addDays'
import DatePicker from 'react-datepicker'

const PickersRange = ({ popperPlacement }) => {
  // ** States
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(addDays(new Date(), 15))
  const [startDateRange, setStartDateRange] = useState(new Date())
  const [endDateRange, setEndDateRange] = useState(addDays(new Date(), 45))

  const handleOnChange = dates => {
    const [start, end] = dates
    setStartDate(start)
    setEndDate(end)
  }

  const handleOnChangeRange = dates => {
    const [start, end] = dates
    setStartDateRange(start)
    setEndDateRange(end)
  }

  const CustomInput = forwardRef((props, ref) => {
    const startDateFormatted = format(props.start, 'MM/dd/yyyy')
    const endDateFormatted = props.end !== null ? format(props.end, 'MM/dd/yyyy') : null
    const value = `${startDateFormatted}${endDateFormatted !== null ? ' - ' + endDateFormatted : ''}`

    return <CustomTextField inputRef={ref} label={props.label || ''} {...props} value={value} />
  })

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap' }} className='demo-space-x'>
      <div>
        <DatePicker
          fullWidth
          selectsRange
          endDate={endDate}
          selected={startDate}
          startDate={startDate}
          id='date-range-picker'
          onChange={handleOnChange}
          shouldCloseOnSelect={false}
          showPopperArrow={false} // Set to false to hide the input field
          popperPlacement={popperPlacement}
          customInput={<CustomInput label='Event Date' start={startDate} end={endDate} />}
          open={true} // Set to true to open the DatePicker by default
        />
      </div>
    </Box>
  )
}

export default PickersRange
