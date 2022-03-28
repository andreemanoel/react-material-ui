import { Paper, Typography } from '@mui/material';
import React from 'react';

const Home = () => {
  return (
    <Paper sx={{ width: '100%', overflow: 'hidden', height: '100vh' }} >
      <Typography
        style={{ fontWeight: 600 }}
        variant="h4"
        align='left'
        sx={{m: 1}}
      >
        Home
      </Typography>
    </Paper>
  )
}

export default Home;