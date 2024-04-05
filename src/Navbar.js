import React from 'react'
import { useState,useEffect } from 'react';
import { Link,useLocation } from 'react-router-dom';
import { Box,AppBar,Container, 
    Toolbar,
    Typography,
    Menu,
    MenuItem
 } from '@mui/material'
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import ParticlesEffect from './ParticlesEffect';

const Navbar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const location = useLocation()

useEffect(()=>{
console.log("Location",location.pathname)
},[location])




  return (
    <>
   <ParticlesEffect/>
    <AppBar
    position='static'
    sx={{width:'100%',height:'70px',opacity:'80%'}}
    >
     
       <Container maxWidth="xl">
    <Toolbar disableGutters>
    
    <Link style={{color:"white"}} to="/">
    <VolunteerActivismIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}/>
    <Typography
            variant="h6"
            noWrap
         
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: "Bebas Neue",
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            EduCare
          </Typography>
          </Link>

          <Link style={{ color: 'white' }} to="/reportgenerator">
          <Typography 
          variant="h6" 
          component="div" 
          sx={{ flexGrow: 1, marginLeft:'50px',fontFamily: "Bebas Neue" }}>
            Report Generator
          </Typography>
          </Link>

        <Link style={{color:"white"}} to="/lessonplanner">
          <Typography 
          variant="h6" 
          component="div" 
          sx={{ marginLeft:'30px',fontFamily: "Bebas Neue" }}>
            Lesson Planner
          </Typography>  
        </Link>


        <Link style={{color:"white"}} to="/companion">
          <Typography 
          variant="h6" 
          component="div" 
          sx={{ marginLeft:'30px',fontFamily: "Bebas Neue" }}>
            ConstantCompanion
          </Typography>  
        </Link>
    </Toolbar>
       </Container>
    </AppBar>
    </>
  )
  
}

export default Navbar