// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import ActiveEvents from 'src/@core/layouts/components/dashboards/ActiveEvents'
import ActiveUserReportsWithTabs from 'src/@core/layouts/components/dashboards/ActiveUserReportsWithTabs'
import AnalyticsWebsiteAnalyticsSlider from 'src/@core/layouts/components/dashboards/AnalyticsWebsiteAnalyticsSlider'
import TotalOrganistation from 'src/@core/layouts/components/dashboards/TotalOrganistation'
import UpcomingEvents from 'src/@core/layouts/components/dashboards/UpcomingEvents'
import UserInvitesReportsWithTabs from 'src/@core/layouts/components/dashboards/UserInvitesReportsWithTabs'
import KeenSliderWrapper from 'src/@core/styles/libs/keen-slider'

const Home = () => {
  return (
    <KeenSliderWrapper>
      <Grid container spacing={3}>
        <Grid item xs={12} lg={6}>
          <AnalyticsWebsiteAnalyticsSlider />
        </Grid>
        <Grid item xs={12} lg={6}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={4} lg={4}>
              <ActiveEvents />
            </Grid>
            <Grid item xs={12} md={4} lg={4}>
              <UpcomingEvents />
            </Grid>
            <Grid item xs={12} md={4} lg={4}>
              <TotalOrganistation />
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} lg={6}>
          <ActiveUserReportsWithTabs />
        </Grid>
        <Grid item xs={12} lg={6}>
          <UserInvitesReportsWithTabs />
        </Grid>
      </Grid>
    </KeenSliderWrapper>
  )
}

export default Home
