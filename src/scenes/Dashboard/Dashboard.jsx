import { Box, Button, IconButton, Typography, useTheme } from '@mui/material';
import React from 'react';
import Header from '../../components/Header';
import { tokens } from '../../theme';
import { mockTransactions } from '../../data/mockData';
import BarChart from '../../components/BarChart';
import PieCharts from '../../components/PieCharts';
import LineCharts from '../../components/LineCharts';
import GeographyChart from '../../components/GeographyChart';
import { DownloadOutlined, EmailIcon, PersonAddIcon, PointOfSaleIcon, TrafficIcon } from '../global';
import StatBox from '../../components/StatBox';
import ProgressBar from '../../components/ProgressBar';



const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
      <Box m='20px'>
          <Box display='flex' 
          justifyContent='space-between'
          alignItems='center'
          
          >
              <Header title="DASHBOARD"  subtitle="Welcome to DashBoard" />
              <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color:colors.grey[100],
              fontSize:'14px',
              fontWeight:'bold',
              padding:'10px 20px'
            }}
            >
            <DownloadOutlined sx={{ mr: '10px'}}  />
            Download Reports
            </Button>
          </Box>
          {/* grid system */}
          <Box
            display='grid'
            gridTemplateColumns='repeat(12,1fr)'
            gridAutoRows="140px"
            gap="20px"
            paddingBottom='20px'
          >
            {/* Row 1: Box 1 */}
            <Box gridColumn="span 3" 
              backgroundColor={colors.primary[400]}  
              display='flex'
              alignItems='center'
              justifyContent='center'
              >
                <StatBox 
                  title='12,361'
                  subtitle='Emails Sent'
                  progress='0.9'
                  increase='+10%'
                  icon={
                    <EmailIcon sx={{
                      color:colors.greenAccent[600],
                      fontSize: "26px"
                    }} />
                  }
                />
              </Box>
              {/* Row 1: Box 2 */}
              <Box gridColumn="span 3" 
              backgroundColor={colors.primary[400]}  
              display='flex'
              alignItems='center'
              justifyContent='center'
              >
                <StatBox 
                  title='431225'
                  subtitle='Sales Obtained'
                  progress='0.5'
                  increase='+30%'
                  icon={
                    <PointOfSaleIcon sx={{
                      color:colors.greenAccent[600],
                      fontSize: "26px"
                    }} />
                  }
                />
              </Box>
              {/* Row 1: Box 3 */}
              <Box gridColumn="span 3" 
              backgroundColor={colors.primary[400]}  
              display='flex'
              alignItems='center'
              justifyContent='center'
              >
                <StatBox 
                  title='32441'
                  subtitle='New Clients'
                  progress='0.40'
                  increase='+20%'
                  icon={
                    <PersonAddIcon sx={{
                      color:colors.greenAccent[600],
                      fontSize: "26px"
                    }} />
                  }
                />
              </Box>
              {/* Row 1: Box 4 */}
              <Box gridColumn="span 3" 
              backgroundColor={colors.primary[400]}  
              display='flex'
              alignItems='center'
              justifyContent='center'
              >
                <StatBox 
                  title='1,325,431'
                  subtitle='Traffic Inbound'
                  progress='0.8'
                  increase='+43%'
                  icon={
                    <TrafficIcon sx={{
                      color:colors.greenAccent[600],
                      fontSize: "26px"
                    }} />
                  }
                />
              </Box>
              {/* Row 2: Box 1 - Line Chart */}
              <Box
                gridColumn='span 8'
                gridRow='span 2'
                backgroundColor={colors.primary[400]}

              >
                <Box mt='25px' 
                  p='0 30px'
                  display='flex'
                  justifyContent='space-between'
                  alignItems='center'>
                    <Box>
                      <Typography variant='h5' fontWeight='600' color={colors.grey[100]}>
                        Revenue Generated
                      </Typography>
                      <Typography variant='h3' fontWeight='500' color={colors.greenAccent[500]}>
                        $59,452,52
                      </Typography>
                    </Box>
                    <Box >
                      <IconButton>
                        <DownloadOutlined
                          sx={{
                            fontSize:'26px',
                            color: colors.greenAccent[500]
                          }}
                        />
                      </IconButton>
                    </Box>
                </Box>
                
                <Box height='250px' mt='-20px'>
                  <LineCharts isDashboard={true}/>
                </Box>
              </Box>
              {/* Row 2: Box 2 - Transactions Box */}
              <Box gridColumn='span 4' gridRow='span 2'
                backgroundColor={colors.primary[400]}
                overflow='auto'
              >
                <Box display='flex' 
                  justifyContent='space-between'
                  alignItems='center'
                  borderBottom={`4px solid ${colors.primary[500]}`}
                  color= {colors.grey[100]}
                  p='15px'
                >
                  <Typography
                   color={colors.grey[100]}
                   variant='h5'
                   fontWeight='600' 
                  >
                    Recent Transactions
                  </Typography>
                </Box>
                {mockTransactions.map((transaction, i) =>(
                  <Box
                    key={`${transaction.txId} - ${i}`}
                    display='flex'
                    justifyContent='space-between'
                    alignItems='center'
                    borderBottom={`4px solid ${colors.primary[500]}`}
                    p='15px'
                  >
                    <Box>
                      <Typography
                        color={colors.greenAccent[500]}
                        variant='h5'
                        fontWeight='600' 
                      >
                        {transaction.txId}
                      </Typography>
                      <Typography
                        color={colors.greenAccent[500]}
                      >
                        {transaction.user}
                      </Typography>
                    </Box>
                    <Box color={colors.grey[100]}>{transaction.date}</Box>
                    <Box backgroundColor={colors.greenAccent[500]} p={'5px 10px'} borderRadius='4px'>${transaction.cost}</Box>
                  </Box>
                ))}
              </Box>
              {/* Final row : Box 1*/}
              <Box
                gridColumn='span 4'
                gridRow='span 2'
                backgroundColor={colors.primary[400]}
                p='30px'
              >
                <Typography variant='h5' fontWeight='600'>
                  Campaign
                </Typography>
                <Box display='flex' 
                  flexDirection='column' 
                  alignItems='center'
                  mt='25px'
                  >
                  <ProgressBar size='125'/>
                  <Typography variant='h5' 
                    color={colors.greenAccent[500]}
                    sx={{mt:'15px'}}
                  >
                    $48,352 revenue generated
                  </Typography>
                  <Typography variant='h6' fontWeight='100'>
                    Includes extra misc expenditures and costs
                </Typography>
                </Box>
              </Box>
              {/* Final row: Box 2 */}
              <Box
                gridColumn='span 4'
                gridRow='span 2'
                backgroundColor={colors.primary[400]}
                
              >
                <Typography variant='h5' 
                  fontWeight='600'
                  sx={{ p: "30px 30px 0 30px"}}
                  >
                  Sales Quantity
                </Typography>
                <Box display='flex' 
                  height='250px'
                  mt="-20px"
                  >
                    <BarChart isDashboard={true} />
                </Box>
              </Box>
              {/* Final row: Box 3 */}
              <Box
                gridColumn='span 4'
                gridRow='span 2'
                backgroundColor={colors.primary[400]}
              >
                <Typography variant='h5' 
                  fontWeight='600'
                  sx={{ p: "30px 30px 0 30px"}}
                  >
                  Geography Based Traffic
                </Typography>
                <Box display='flex' 
                  height='250px'
                  mt='-20px'
                  >
                  <GeographyChart isDashboard={true} />
                </Box>
              </Box>
          </Box>
      </Box>
  );
}

export default Dashboard;
