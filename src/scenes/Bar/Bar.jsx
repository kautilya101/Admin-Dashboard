import { Box } from '@mui/material';
import React from 'react';
import Header from '../../components/Header';
import BarChart from '../../components/BarChart';

const Bar = () => {
  return (
    <div>
      <Box m='20px'>
        <Header title="Bar Chart" subtitle="Simple bar Chart"  />
        <Box height='75vh'>
          <BarChart/>
        </Box>
      </Box>
    </div>
  );
}

export default Bar;
