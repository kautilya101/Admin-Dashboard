import React, { useContext } from 'react';
import { Box, IconButton, formHelperTextClasses, useTheme} from '@mui/material'
import { ColorModeContext, tokens } from '../../theme';
import {InputBase} from '@mui/material';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';

import { LightMode, DarkModeOutlinedIcon, NotificationsOutlinedIcon, SearchIcon, SettingsOutlinedIcon, PersonOutlinedIcon } from '.';



const Topbar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);
    
    return (
        <Box
            display='flex' 
            justifyContent='space-between' 
            p={2}
        >
            <Box
                display= "flex"
                backgroundColor={colors.primary[400]}
                borderRadius="3px"
            >
                <InputBase
                    sx={{ ml: 2, flex: 1}}
                    placeholder="Search"
                />
                <IconButton type='button' sx={{p: 1}}>
                    <SearchIcon/>
                </IconButton>
            </Box>
            <Box 
                display="flex" 
            >
                <IconButton onClick={colorMode.toggleColorMode}>
                    {theme.palette.mode === 'light' 
                    ? (<LightMode/>)
                    : (<DarkModeOutlinedIcon/>)
                    }
                </IconButton>
                <IconButton>
                    <NotificationsOutlinedIcon/>
                </IconButton>
                <IconButton>
                    <SettingsOutlinedIcon/>
                </IconButton>
                <IconButton>
                    <PersonOutlinedIcon/>
                </IconButton>
                
                
            </Box>
        </Box>
    );
}

export default Topbar;
