import { Box, useTheme } from '@mui/material';
import React from 'react';
import Header from '../../components/Header';
import GeographyChart from '../../components/GeographyChart';
import { tokens } from '../../theme';

const Geoprahy = () => {

  const theme = useTheme();
  const colors = tokens(theme.palette.mode)

  return (
    <Box m='20px'>
      <Header title='Geography Chart' subtitle='Sample Gragraphy Chart' />
      <Box height='75vh' border={`1px solid ${colors.grey[100]}`} borderRadius='4px'>
        <GeographyChart/>
      </Box>
    </Box>
  );
}

export default Geoprahy;
