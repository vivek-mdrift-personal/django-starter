// ** MUI Imports
import Box from '@mui/material/Box'
import { useKeenSlider } from 'keen-slider/react'
import KeenSliderWrapper from 'src/@core/styles/libs/keen-slider'

const SwiperAutoSwitch = ({ direction }) => {
  const [ref] = useKeenSlider(

    {
      loop: true,
      rtl: direction === 'rtl'
    },
    [
      slider => {
        let mouseOver = false
        let timeout

        const clearNextTimeout = () => {
          clearTimeout(timeout)
        }

        const nextTimeout = () => {
          clearTimeout(timeout)
          if (mouseOver) return
          timeout = setTimeout(() => {
            slider.next()
          }, 2000)
        }
        slider.on('created', () => {
          slider.container.addEventListener('mouseover', () => {
            mouseOver = true
            clearNextTimeout()
          })
          slider.container.addEventListener('mouseout', () => {
            mouseOver = false
            nextTimeout()
          })
          nextTimeout()
        })
        slider.on('dragStarted', clearNextTimeout)
        slider.on('animationEnded', nextTimeout)
        slider.on('updated', nextTimeout)
      }
    ]
  )

  return (
    <Box ref={ref} className='keen-slider'>
    <Box className='keen-slider__slide' style={{ height: 'auto', width: '100%', backgroundSize: 'cover', position: 'relative' }}>
      <img src='/images/img/Component_1.png' alt='swiper 5' style={{ display: 'block', width: '100%', height: '100vh' }} />
      </Box>
      <Box className='keen-slider__slide' style={{ height: 'auto', width: '100%', backgroundSize: 'cover', position: 'relative' }}>
      <img src='http://localhost:3000/images/img/Component_1.png' alt='swiper 5' style={{ display: 'block', width: '100%', height: '100vh' }} />
</Box>

    </Box>
  )
}

export default SwiperAutoSwitch
