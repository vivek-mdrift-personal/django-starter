import React, { useState } from 'react'
import Grid from '@mui/material/Grid'
import { Box } from '@mui/system'

const ActivityList = () => {
  // State to track the active card
  const [activeCard, setActiveCard] = useState(null)

  // Function to handle card selection
  const handleCardClick = index => {
    setActiveCard(index)
  }

  // Array of activities with titles and image sources
  const activities = [
    { title: 'Audience Poll', imageSrc: '/images/icons/icon_poll.png' },
    { title: 'Quiz', imageSrc: '/images/icons/icon_quiz.png' },
    { title: 'FAQ', imageSrc: '/images/icons/icon_faq.png' }
  ]

  return (
    <Grid container spacing={4} style={{ maxWidth: '100%', height: '40vh' }}>
      {activities.map((activity, index) => (
        <Grid key={index} item xs={12} lg={2}>
          <Box
            className={`check-box ${activeCard === index ? 'active' : ''}`}
            onClick={() => handleCardClick(index)}
            sx={{
              backgroundColor: activeCard === index ? '#dbdade' : 'transparent',
              color: activeCard === index ? '#000' : 'inherit',
              padding: '8px',
              borderRadius: '4px',
              cursor: 'pointer',
              transition: 'background-color 0.3s, color 0.3s'
            }}
          >
            <img src={activity.imageSrc} alt={activity.title} style={{ width: '20px', height: 'auto' }} />
            {activity.title}
          </Box>
        </Grid>
      ))}
    </Grid>
  )
}

export default ActivityList
