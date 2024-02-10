import React from 'react'
import Grid from '@mui/material/Grid'
import { useTheme } from '@mui/material/styles'

// ** Custom Components Imports
import CardSnippet from 'src/@core/components/card-snippet'

// ** Styled Component
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'
import PickersTime from './PickersTime'

const PickersTimeView = () => {
  // ** Hook
  const theme = useTheme()
  const { direction } = theme
  const popperPlacement = direction === 'ltr' ? 'bottom-start' : 'bottom-end'

  return (
    <DatePickerWrapper>
      <PickersTime popperPlacement={popperPlacement} />
    </DatePickerWrapper>
  )
}

export default PickersTimeView
