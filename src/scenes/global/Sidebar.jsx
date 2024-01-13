import React, { useState } from 'react';
import { ProSidebar, Menu, MenuItem} from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import {Box, IconButton, Typography, useTheme} from '@mui/material'
import {Link} from 'react-router-dom';
import { tokens } from '../../theme';
import { HomeOutlined, PeopleOutlined, ContactsOutlined,ReceiptOutlined, PersonOutlined, CalendarTodayOutlined, HelpOutlined, BarChartOutlined, PieChartOutlined, TimelineOutlined, MenuOutlined, MapOutlined } from './index';

const Item = ({title, to ,icon, selected, setSelected}) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
      <MenuItem
        active={selected === title}
        style={{ color: colors.grey[100] }}
        onClick={() => setSelected(title)}
        icon={icon}
      >
        <Typography>{title} </Typography>
        <Link to={to}/>
      </MenuItem>
    );
}

const Sidebar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [ isCollapsed, setIsCollapsed ] = useState(false);
    const [ selected, setSelected ] = useState("Dashboard");
    return (
        <Box 
            sx={{
                "& .pro-sidebar-inner": {
                    background: `${colors.primary[400]} !important`
                },
                "& .pro-icon-wrapper": {
                    backgroundColor: "transparent !important"
                },
                "& .pro-inner-item": {
                    padding: "5px 35px 5px 20px !important"
                },
                "& .pro-inner-item:hover": {
                    color: "#868dfb !important"
                },
                "& .pro-menu-item.active": {
                    color: "#6870fa !important"
                }
            }}
        >
            <ProSidebar collapsed={isCollapsed}>
                <Menu iconShape='square'>
                    <MenuItem 
                        onClick={() => setIsCollapsed(!isCollapsed)}
                        icon={isCollapsed ? <MenuOutlined/> : undefined }
                        style={{
                            margin: "10px 0px 20px 0px",
                            color: colors.grey[100],
                        }}
                    >
                        {!isCollapsed && (
                            <Box display='flex' 
                            justifyContent='space-between' 
                            alignItems='center'
                            ml='15px'
                            >
                                <Typography variant='h3' color={colors.grey[100]}>
                                    ADMINS
                                </Typography>
                                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                                    <MenuOutlined/>
                                </IconButton>
                            </Box>
                        )}
                    </MenuItem>

                    {!isCollapsed && (
                        <Box m="25px">
                            <Box display="flex" justifyContent="center" alignItems="center" >
                                <img 
                                alt='profile-user' 
                                width="100px" 
                                height="100px" 
                                src='https://images.unsplash.com/photo-1595152772835-219674b2a8a6?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                                style={{ cursor: "pointer", borderRadius: "50%"}} 

                                />
                            </Box>

                            <Box textAlign="center">
                                <Typography variant='h2' color={colors.grey[100]} fontWeight="bold" sx={{ m: "10px 0 0 0"}} >John Doe</Typography>
                                <Typography variant='h5' color={colors.greenAccent[400]}>Sr Admin</Typography>
                            </Box>
                        </Box>
                    )}
                    
                    <Box paddingLeft={ isCollapsed ? undefined : "10%"}>
                        <Item 
                            title="DashBoard"
                            to="/"
                            icon={<HomeOutlined/>}
                            selected={selected}
                            setSelected={setSelected}
                         />
                         <Typography
                            variant='h6'
                            color={colors.grey[300]}
                            sx={{ m:"15px 0 5px 20px" }}
                         >
                             Data
                         </Typography>
                         <Item 
                            title="Manage Team"
                            to="/team"
                            icon={<PeopleOutlined/>}
                            selected={selected}
                            setSelected={setSelected}
                         />
                         <Item 
                            title="Contacts Information"
                            to="/contacts"
                            icon={<ContactsOutlined/>}
                            selected={selected}
                            setSelected={setSelected}
                         />
                         <Item 
                            title="Invoices"
                            to="/invoices"
                            icon={<ReceiptOutlined/>}
                            selected={selected}
                            setSelected={setSelected}
                         />
                         <Typography
                            variant='h6'
                            color={colors.grey[300]}
                            sx={{ m: "15px 0 5px 20px" }}
                         >
                             Pages
                         </Typography>
                         <Item 
                            title="New Profile"
                            to="/form"
                            icon={<PersonOutlined/>}
                            selected={selected}
                            setSelected={setSelected}
                         />

                         <Item 
                            title="Calendar"
                            to="/calendar"
                            icon={<CalendarTodayOutlined/>}
                            selected={selected}
                            setSelected={setSelected}
                         />
                         <Item 
                            title="FAQ"
                            to="/faq"
                            icon={<HelpOutlined/>}
                            selected={selected}
                            setSelected={setSelected}
                         />
                         <Typography
                            variant='h6'
                            color={colors.grey[300]}
                            sx={{ m:"15px 0 5px 20px" }}
                         >
                             Charts
                         </Typography>
                         <Item 
                            title="Bar Chart"
                            to="/bar"
                            icon={<BarChartOutlined/>}
                            selected={selected}
                            setSelected={setSelected}
                         />
                         <Item 
                            title="Pie Chart"
                            to="/pie"
                            icon={<PieChartOutlined/>}
                            selected={selected}
                            setSelected={setSelected}
                         />
                         <Item 
                            title="Line Chart"
                            to="/line"
                            icon={<TimelineOutlined/>}
                            selected={selected}
                            setSelected={setSelected}
                         />
                         <Item 
                            title="Geography Chart"
                            to="/geography"
                            icon={<MapOutlined/>}
                            selected={selected}
                            setSelected={setSelected}
                         />
                    </Box>
                </Menu>
            </ProSidebar>
        </Box>
    );
}

export default Sidebar;

