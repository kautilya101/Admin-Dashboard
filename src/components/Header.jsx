import { Typography, Box, useTheme } from "@mui/material";
import { tokens } from "../theme";
import React from 'react';

const Header = ({title, subtitle}) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <Box m='20px'>
            <Typography variant="h2"
                color={colors.grey[100]}
                fontWeight='bold'
                // mb='5px'
                sx={{ mb: '5px'}}
            >
                {title}
            </Typography>
            <Typography variant="h5"
                color={colors.greenAccent[400]}
            >
            {subtitle}
            </Typography>
        </Box>
    );
}

export default Header;
