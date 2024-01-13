import React from 'react';
import Accordion from '@mui/material/Accordion';
import Header from '../../components/Header';
import { AccordionDetails, AccordionSummary, Box, Typography, useTheme } from '@mui/material';
import { tokens } from '../../theme';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';



const FAQ = () => {

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m='20px'>
      <Header title='FAQ' subtitle="Frequently Asked Questions Page" />
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
          <Typography color={colors.greenAccent[300]} variant='h5' >
            How to remove an event from Calendar?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            To remove an event from the Calendar simply 
            click on the desired event and confirm the 
            pop up box.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
          <Typography color={colors.greenAccent[300]} variant='h5' >
            How many types of charts are there ?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            There are 4 types of charts: Bar chart, Pie chart, Line chart, Geography chart.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
          <Typography color={colors.greenAccent[300]} variant='h5' >
            An Important Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing 
            elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </Typography>
        </AccordionDetails>
      </Accordion>


    </Box>
  );
}

export default FAQ;
