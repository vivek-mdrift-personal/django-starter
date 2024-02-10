// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Demo Components Imports
import CustomCheckboxIcons from 'src/@core/components/custom-checkbox/icons'

const data = [
  {
    value: 'High',
    title: 'High',
    isSelected: true
  },
  {
    value: 'Mid',
    title: 'Mid'
  },
  {
    value: 'Low',
    title: 'Low'
  }
]

const icons = [
  {
    icon: 'tabler:align-box-bottom-right',
    iconProps: { fontSize: '1.75rem', style: { marginBottom: 8, color: 'green' } }
  },
  {
    icon: 'tabler:align-box-bottom-right',
    iconProps: { fontSize: '1.75rem', style: { marginBottom: 8, color: 'yellow' } }
  },
  {
    icon: 'tabler:align-box-bottom-right',
    iconProps: { fontSize: '1.75rem', style: { marginBottom: 8, color: 'red' } }
  }
]

const MeasureSteper = () => {
  const initialSelected = data.filter(item => item.isSelected).map(item => item.value)

  // ** State
  const [selected, setSelected] = useState(initialSelected)

  const handleChange = value => {
    if (selected.includes(value)) {
      const updatedArr = selected.filter(item => item !== value)
      setSelected(updatedArr)
    } else {
      setSelected([...selected, value])
    }
  }

  return (
    <Grid container spacing={4}>
      {data.map((item, index) => (
        <CustomCheckboxIcons
          key={index}
          data={data[index]}
          selected={selected}
          icon={icons[index].icon}
          handleChange={handleChange}
          name='custom-checkbox-icons'
          gridProps={{ sm: 3, xs: 12 }}
          iconProps={icons[index].iconProps}
        />
      ))}
    </Grid>
  )
}

export default MeasureSteper
