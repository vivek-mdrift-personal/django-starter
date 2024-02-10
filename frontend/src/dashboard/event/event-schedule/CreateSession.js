import React, { useState } from 'react'
import Accordion from '@mui/material/Accordion'
import Typography from '@mui/material/Typography'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Divider from '@mui/material/Divider'
import { styled } from '@mui/system' // Updated import
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Icon from 'src/@core/components/icon'
import CreateSessionView from './CreateSessionView'

const AccordionSummaryStyled = styled(AccordionSummary)({
  border: '1px solid #E6E6E6'
})

const CreateSession = (props) => {
  const [list, setList] = useState(true);

  const sendToParent = () => {
    setList(!list);
    props.callback(list);
  };

  return (
    <div>
      <Accordion>
        <AccordionSummaryStyled
          id='panel-header-1'
          aria-controls='panel-content-1'
          expandIcon={<Icon fontSize='1.25rem' icon='tabler:chevron-down' />}
        >
          <Typography>Create Sessions</Typography>
        </AccordionSummaryStyled>
        <AccordionDetails>
          <Typography sx={{ color: 'text.secondary' }}>
            <CreateSessionView />
            <Grid item xs={12} sm={12} sx={{ mt: 2 }}>
              <Button variant='contained' onClick={sendToParent} color='warning' sx={{ '& svg': { mr: 2 } }}>
                <Icon fontSize='1.125rem' icon='tabler:plus' />
                Create Session
              </Button>
            </Grid>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}

export default CreateSession
