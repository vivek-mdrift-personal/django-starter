// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'

// ** Third Party Imports
import DatePicker from 'react-datepicker'

// ** Custom Component Imports
import CustomInput from './PickersCustomInput'
import { CardHeader } from '@mui/material'
import CustomTextField from 'src/@core/components/mui/text-field'
import Grid from '@mui/material/Grid'
import Autocomplete from '@mui/material/Autocomplete'

const ModulesSelect = [
  { title: '01/04/2024' },
  { title: '08/04/2024' },
  { title: '06/04/2024' },
  { title: '02/04/2024' }
]

const PickersTime = ({ popperPlacement }) => {
  // ** States
  const [time, setTime] = useState(new Date())
  const [dateTime, setDateTime] = useState(new Date())

  return (
    <Grid container spacing={6}>
      <Grid item xs={12} sm={12}>
        <Autocomplete
          multiple
          fullWidth
          options={ModulesSelect}
          filterSelectedOptions
          defaultValue={[ModulesSelect[13]]}
          id='autocomplete-multiple-outlined'
          getOptionLabel={option => (option && option.title) || ''}
          renderInput={params => <CustomTextField {...params} label='Date' placeholder='Add..' />}
        />
      </Grid>

      <Grid item xs={12} sm={3}>
        <DatePicker
          showTimeSelect
          selected={time}
          timeIntervals={15}
          showTimeSelectOnly
          dateFormat='h:mm aa'
          id='time-only-picker'
          popperPlacement={popperPlacement}
          onChange={date => setTime(date)}
          customInput={<CustomInput label='Starting Time' />}
        />
      </Grid>
      <Grid item xs={12} sm={3}>
        <DatePicker
          showTimeSelect
          selected={time}
          timeIntervals={15}
          showTimeSelectOnly
          dateFormat='h:mm aa'
          id='time-only-picker'
          popperPlacement={popperPlacement}
          onChange={date => setTime(date)}
          customInput={<CustomInput label='Ending Time' />}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <CustomTextField fullWidth label='Venue' placeholder='Location' />
      </Grid>
    </Grid>
  )
}

export default PickersTime
