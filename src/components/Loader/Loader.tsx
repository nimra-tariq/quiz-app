import React from 'react'
import { Box } from '@material-ui/core'
import { CircularProgress } from '@material-ui/core'
const Loader = () => {
  return (
    <div>
      <Box sx={{ display: 'flex' }} justifyContent='center'>
      <CircularProgress size='5rem' />
      <div>loading...</div>
    </Box>
    </div>
  )
}

export default Loader