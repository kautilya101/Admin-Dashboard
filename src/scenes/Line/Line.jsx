import React from 'react';
import Header from '../../components/Header';
import { Box } from '@mui/material';
import LineCharts from '../../components/LineCharts';

const Line = () => {
  return (
    <Box m='20px'>
      <Header title='Line Chart' subtitle="Sample Line Chart" />
      <Box height='75vh'>
        <LineCharts/>
      </Box>
    </Box>
  );
}

export default Line;
