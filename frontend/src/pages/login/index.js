// ** React Imports
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

// ** MUI Components
import Alert from '@mui/material/Alert'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Checkbox from '@mui/material/Checkbox'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import Box from '@mui/material/Box'
import useMediaQuery from '@mui/material/useMediaQuery'
import { styled, useTheme } from '@mui/material/styles'
import InputAdornment from '@mui/material/InputAdornment'
import MuiFormControlLabel from '@mui/material/FormControlLabel'

// ** Custom Component Import
import CustomTextField from 'src/@core/components/mui/text-field'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Third Party Imports
import * as yup from 'yup'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

// ** Hooks
import { useAuth } from 'src/hooks/useAuth'
import useBgColor from 'src/@core/hooks/useBgColor'
import { useSettings } from 'src/@core/hooks/useSettings'

// ** Configs
import themeConfig from 'src/configs/themeConfig'

// ** Layout Import
import BlankLayout from 'src/@core/layouts/BlankLayout'

// ** Demo Imports
import FooterIllustrationsV2 from 'src/views/pages/auth/FooterIllustrationsV2'
import CardSnippet from 'src/@core/components/card-snippet'
import SwiperAutoSwitch from 'src/dashboard/swiper/SwiperAutoSwitch'
import { Grid } from '@mui/material'
import { useRouter } from 'next/router'

const LoginIllustration = styled('img')(({ theme }) => ({
  width: '100%',
  zIndex: 2,
  marginTop: theme.spacing(),
  marginBottom: theme.spacing(0),
  [theme.breakpoints.down(1540)]: {
    maxHeight: 'auto'
  },
  [theme.breakpoints.down('lg')]: {
    maxHeight: 500
  }
}))

const RightWrapper = styled(Box)(({ theme }) => ({
  width: '100%',
  [theme.breakpoints.up('md')]: {
    maxWidth: 450
  },
  [theme.breakpoints.up('lg')]: {
    maxWidth: 600
  },
  [theme.breakpoints.up('xl')]: {
    maxWidth: 600
  }
}))

const LinkStyled = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  color: `${theme.palette.primary.main} !important`
}))

const FormControlLabel = styled(MuiFormControlLabel)(({ theme }) => ({
  '& .MuiFormControlLabel-label': {
    color: theme.palette.text.secondary
  }
}))

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(5).required()
})

const defaultValues = {
  password: 'admin',
  email: 'admin@gmail.com'
}

const LoginPage = () => {

  // ** Hook
  const {
    settings: { direction }
  } = useSettings()

  const [rememberMe, setRememberMe] = useState(true)
  const [showPassword, setShowPassword] = useState(false)

  // ** Hooks
  const auth = useAuth()
  const theme = useTheme()
  const bgColors = useBgColor()
  const { settings } = useSettings()
  const hidden = useMediaQuery(theme.breakpoints.down('md'))
  const router = useRouter()
  // ** Vars
  const { skin } = settings

  const {
    control,
    setError,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues,
    mode: 'onBlur',
    resolver: yupResolver(schema)
  })

  const onSubmit = data => {
    const { email, password } = data
    // router.push('/home')
    console.log(data)
    auth.login({ email, password, rememberMe }, () => {
      setError('email', {
        type: 'manual',
        message: 'Email or Password is invalid'
      })
    })
  }
  const imageSource = skin === 'bordered' ? 'auth-v2-login-illustration-bordered' : 'auth-v2-login-illustration'

  return (
    <Box className='content-right' sx={{ backgroundColor: 'background.paper' }}>
      <RightWrapper>
        <Box
          sx={{
            p: [6, 12],
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Box sx={{ width: '100%', maxWidth: 400 }}>
            <Image src='/images/iconnect.png' alt='Picture' width={160} height={80} />
            <Box sx={{ my: 6 }}>
              <Typography
                variant='h4'
                sx={{ mb: 1.5 }}
                dangerouslySetInnerHTML={{
                  __html: `Welcome
                  to i Connect <br /> You are invited to join Temasek<br />Foundation family !`
                }}
              />

              <Typography sx={{ color: 'text.secondary' }}>
                Please sign in to your account and start the adventure
              </Typography>
            </Box>
            {/* <Alert icon={false} sx={{ py: 3, mb: 6, ...bgColors.primaryLight, '& .MuiAlert-message': { p: 0 } }}>
              <Typography variant='body2' sx={{ mb: 2, color: 'primary.main' }}>
                Admin: <strong>admin@vuexy.com</strong> / Pass: <strong>admin</strong>
              </Typography>
              <Typography variant='body2' sx={{ color: 'primary.main' }}>
                Client: <strong>client@vuexy.com</strong> / Pass: <strong>client</strong>
              </Typography>
            </Alert> */}
            <form noValidate autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
              <Box sx={{ mb: 4 }}>
                <Controller
                  name='email'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange, onBlur } }) => (
                    <CustomTextField
                      fullWidth
                      autoFocus
                      label='Email or Username'
                      value={value}
                      onBlur={onBlur}
                      onChange={onChange}
                      placeholder='admin@gmail.com'
                      error={Boolean(errors.email)}
                      {...(errors.email && { helperText: errors.email.message })}
                    />
                  )}
                />
              </Box>
              <Box sx={{ mb: 1.5 }}>
                <Controller
                  name='password'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange, onBlur } }) => (
                    <CustomTextField
                      fullWidth
                      value={value}
                      onBlur={onBlur}
                      label='Password'
                      onChange={onChange}
                      id='auth-login-v2-password'
                      error={Boolean(errors.password)}
                      {...(errors.password && { helperText: errors.password.message })}
                      type={showPassword ? 'text' : 'password'}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position='end'>
                            <IconButton
                              edge='end'
                              onMouseDown={e => e.preventDefault()}
                              onClick={() => setShowPassword(!showPassword)}
                            >
                              <Icon fontSize='1.25rem' icon={showPassword ? 'tabler:eye' : 'tabler:eye-off'} />
                            </IconButton>
                          </InputAdornment>
                        )
                      }}
                    />
                  )}
                />
              </Box>
              <Box
                sx={{
                  mb: 1.75,
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <FormControlLabel
                  label='Remember Me'
                  control={<Checkbox checked={rememberMe} onChange={e => setRememberMe(e.target.checked)} />}
                />
                <Typography component={LinkStyled} href='#'>
                  Forgot Password?
                </Typography>
              </Box>
              <Button fullWidth type='submit' variant='contained' sx={{ mb: 4, backgroundColor: '#F09720' }}>
                Login
              </Button>
              <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
                <Typography sx={{ color: 'text.secondary', mr: 2 }}>New on our platform?</Typography>
                <Typography href='#' component={LinkStyled}>
                  Create an account
                </Typography>
              </Box>
            </form>
          </Box>
        </Box>
      </RightWrapper>

      {/* {!hidden ? (
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            position: 'relative',
            alignItems: 'center',
            borderRadius: '20px',
            justifyContent: 'center',
            backgroundColor: 'customColors.bodyBg'
          }}
        >
          <LoginIllustration alt='login-illustration' src={`/images/img/Component_1.png`} />
          <FooterIllustrationsV2 />
        </Box>
      ) : null} */}


            <SwiperAutoSwitch direction={direction} />


    </Box>
  )
}
LoginPage.getLayout = page => <BlankLayout>{page}</BlankLayout>
LoginPage.guestGuard = true

export default LoginPage
