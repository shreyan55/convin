import React from 'react'
import {Box, Typography} from "@mui/material";

const Footer = () => {
  return (
      <Box sx={{ mt: 'auto', p: '0.2rem', bgcolor: '#efefef', zIndex:1201 }}>
        <Typography sx={{ textAlign: 'center', verticalAlign: 'middle' }}>
          Developed by <a style={{textDecoration: 'none'}} target="_blank" href="https://www.github.com/Shreyan55">Shreyansh</a>
        </Typography>
      </Box>
  )
}

export default Footer