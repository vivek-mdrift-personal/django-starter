// ** React Imports
import { forwardRef, useState } from 'react'

// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import MenuItem from '@mui/material/MenuItem'
import CardHeader from '@mui/material/CardHeader'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import InputAdornment from '@mui/material/InputAdornment'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Link from 'next/link';

// ** Custom Component Import
import CustomTextField from 'src/@core/components/mui/text-field'
import Autocomplete from '@mui/material/Autocomplete'

const ModulesSelect = [{ title: 'Session 1' }, { title: 'Session 2' }, { title: 'Session 3' }, { title: 'Session 4' }]

// ** Third Party Imports
import DatePicker from 'react-datepicker'

// ** Icon Imports
import Icon from 'src/@core/components/icon'
import { Box } from '@mui/system'

const CustomInput = forwardRef((props, ref) => {
  return <CustomTextField fullWidth {...props} inputRef={ref} label='Birth Date' autoComplete='off' />
})

const CreateFaq = () => {
  // ** States
  const [date, setDate] = useState(null)
  const [language, setLanguage] = useState([])

  const [values, setValues] = useState({
    password: '',
    password2: '',
    showPassword: false,
    showPassword2: false
  })

  // Handle Password
  const handlePasswordChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value })
  }

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword })
  }

  // Handle Confirm Password
  const handleConfirmChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value })
  }

  const handleClickShowConfirmPassword = () => {
    setValues({ ...values, showPassword2: !values.showPassword2 })
  }

  // Handle Select
  const handleSelectChange = event => {
    setLanguage(event.target.value)
  }

  return (
    <Card>
      {/* <CardHeader title='Poll Details' /> */}
      {/* <Divider sx={{ m: '0 !important' }} /> */}
      <form onSubmit={e => e.preventDefault()}>
        <CardContent>
          <Grid container spacing={5}>
            <Grid item xs={12}>
              <Typography variant='body2' sx={{ fontWeight: 600 }}>
                FAQ Details
              </Typography>
            </Grid>

            <Grid item xs={12} sm={4}>
              <CustomTextField fullWidth label='Title *' placeholder='Post title' />
            </Grid>
            <Grid item xs={12} sm={8}>
              <CustomTextField fullWidth label='Description *' placeholder='Description' />
            </Grid>
            <Grid item xs={12} sm={4}>
              <CustomTextField select fullWidth label='Event *' id='form-layouts-separator-select' defaultValue=''>
                <MenuItem value='Event1'>Event 1</MenuItem>
                <MenuItem value='Event2'>Event 2</MenuItem>
                <MenuItem value='Event3'>Event 2</MenuItem>
              </CustomTextField>
            </Grid>
            <Grid item xs={12} sm={8}>
              <Autocomplete
                multiple
                fullWidth
                options={ModulesSelect}
                filterSelectedOptions
                defaultValue={[ModulesSelect[13]]}
                id='autocomplete-multiple-outlined'
                getOptionLabel={option => (option && option.title) || ''}
                renderInput={params => <CustomTextField {...params} label='Session' placeholder='Session' />}
              />
            </Grid>

            <Grid item xs={12}>
              <Divider sx={{ mb: '0 !important' }} />
            </Grid>

            <Grid item xs={12}>
              <Typography variant='body2' sx={{ fontWeight: 600 }}>
                FAQ Questions
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12}>
              <CustomTextField fullWidth label='Question *' placeholder='Type..' />
            </Grid>
            <Grid item xs={12} sm={6}>
              <RadioGroup row aria-label='position' name='horizontal' defaultValue='start'>
                <Grid item xs={12} sm={12}>
                  <FormControlLabel value='end' control={<Radio />} label='Option 1' />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <FormControlLabel value='option2' control={<Radio />} label='Add option or “Add Other”' />
                </Grid>
              </RadioGroup>
            </Grid>

            <Grid item xs={12} sm={12}>
              <Box sx={{ textAlign: 'end' }}>
                <Box
                  sx={{
                    marginRight: '3px',
                    borderRadius: '50%',
                    cursor: 'pointer',
                    backgroundColor: '#e0e4e4',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '2rem',
                    height: '2rem'
                  }}
                >
                  <Icon icon='tabler:plus' fontSize='1.25rem' />
                </Box>

                <Box
                  sx={{
                    cursor: 'pointer',
                    borderRadius: '50%',
                    backgroundColor: '#e0e4e4',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '2rem',
                    height: '2rem'
                  }}
                >
                  <Icon icon='tabler:trash' fontSize='1.25rem' />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </CardContent>
        <Divider sx={{ m: '0 !important' }} />
        <CardActions sx={{ display: 'flex', justifyContent: 'space-between' }}>

        <Link href="/content/">
      <Button variant='tonal' color='secondary'>
        Back
      </Button>
    </Link>
          <Button type='submit' sx={{ mr: 2 }} variant='contained' color='warning'>
            Create
          </Button>

          {/* <Button type='reset' color='secondary' variant='tonal'>
            Reset
          </Button> */}
        </CardActions>
      </form>
    </Card>
  )
}

export default CreateFaq
