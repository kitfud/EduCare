import React, { useRef } from 'react';
import { Button, Typography, Box,Card } from '@mui/material';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import SchoolIcon from '@mui/icons-material/School';
import { Link } from 'react-router-dom';

import NoteAltTwoToneIcon from '@mui/icons-material/NoteAltTwoTone';
import WorkHistoryRoundedIcon from '@mui/icons-material/WorkHistoryRounded';
import TagFacesRoundedIcon from '@mui/icons-material/TagFacesRounded';

import PublicIcon from '@mui/icons-material/Public';
import CopyrightIcon from '@mui/icons-material/Copyright';

const LandingPage = () => {
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const contactRef = useRef(null);
  const topRef = useRef(null);

  const scrollToSection = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <Box ref={topRef} sx={{textAlign:'center', 
      justifyContent: 'center', 
      alignItems: 'center', height: '20vh',marginTop:'20px' }}>
      <VolunteerActivismIcon color="primary" sx={{fontSize:'50px'}}/>
        <Typography 
        color="primary"
        variant="h1" sx={{ fontWeight: 'bold' }}>EduCare</Typography>
      </Box>
      <Box sx={{ 
        margin:'auto',
        width:'90%',
        padding: '2rem' }}>
        <Button sx={{margin:'2px'}} variant="contained" onClick={() => scrollToSection(aboutRef)}>About Us</Button>
        <Button sx={{margin:'2px'}} variant="contained" onClick={() => scrollToSection(servicesRef)}>Services</Button>
        <Button sx={{margin:'2px'}} variant="contained" onClick={() => scrollToSection(contactRef)}>Contact</Button>
      </Box>
      <Box ref={aboutRef} sx={{
      display:'flex',
      textAlign:'center',
      margin:'auto',
      padding: '2rem', 
      width:'90%',
      backgroundColor: '#e0e0e0',
      opacity:'60%',
      height:'40vh'}}>
        <Box sx={{width:'40%',margin:'auto'}}>
        <Typography 
        color="primary"
        variant="h4"><u>About Us</u></Typography>
        <Typography color="primary" variant='h6'>
          A one stop shop for your teaching needs! Our product seeks to address some of the time crunches which happen throughout the school year with our AI enhanced productivity features. 
        </Typography> 
        </Box>
     
        <Box sx={{width:'40%',margin:'auto'}}>
        <SchoolIcon color="primary" sx={{
            fontSize:'250px'}}/>
        </Box>
      
      </Box>
      <Box ref={servicesRef} sx={{ padding: '2rem',
      margin:'auto',
      width:'90%',
      height:'35vh' }}>
        <Typography 
        color="primary"
        variant="h2" 
        sx={{textAlign:'center',fontWeight:'bold'}} >Services</Typography>
        <Typography 
        color="primary"
        sx={{textAlign:'center',fontWeight:'bold'}}>
          Test our innovative products:
        </Typography>
<Box sx={{display:'flex',marginTop:'20px',marginBottom:'20px'}}>
<Card sx={{width:'33%',backgroundColor:'transparent',textAlign:'center'}}>
<Link  style={{ color: 'white' }} to="/reportgenerator">
<NoteAltTwoToneIcon className="linkHover" sx={{color:'darkgray',fontSize:'100px'}}/>
<Typography className="linkHover" sx={{color:'darkgray'}} variant='h6'><u>Report Generator </u></Typography>
</Link>
<Box>
  <Typography sx={{color:'darkgray'}} variant='h6'>Generate reports for your students based on a final grade or series of assignments.</Typography>
</Box>
</Card>
<Card sx={{width:'33%',backgroundColor:'transparent',textAlign:'center'}}>
<Link  style={{ color: 'white' }} to="/lessonplanner">
<WorkHistoryRoundedIcon className="linkHover" sx={{color:'darkgray',fontSize:'100px'}}/>
<Typography className="linkHover" sx={{color:'darkgray'}} variant='h6'><u>Lesson Planner </u></Typography>
</Link>
<Typography sx={{color:'darkgray'}} variant='h6'>Generate reports for your students based on a final grade or series of assignments.</Typography>
</Card>
<Card sx={{width:'33%',backgroundColor:'transparent',textAlign:'center'}}>
<Link  style={{ color: 'white' }} to="/companion">
<TagFacesRoundedIcon className="linkHover" sx={{color:'darkgray',fontSize:'100px'}}/>
<Typography className="linkHover" sx={{color:'darkgray'}} variant='h6'><u>Constant Companion</u></Typography>
</Link>
<Typography sx={{color:'darkgray'}} variant='h6'>Generate reports for your students based on a final grade or series of assignments.</Typography>
</Card>
        </Box>
      </Box>

      
      <Box ref={contactRef} sx={{ padding: '2rem', 
      display:'flex',
      backgroundColor: '#e0e0e0',
      margin:'auto',
      marginTop:'20px',
      width:'90%',
      opacity:'60%',
      height:'10vh',
      textAlign:'center' }}>
        
        <Box sx={{width:'50%'}}>
        <Typography 
        color="primary"
        variant="h6">Contact Us</Typography>
        <PublicIcon
          color="primary"
          sx={{fontSize:'20px'}}
          />
          <Typography color="primary"
          variant='h6'
          >kitfuderich@email.com</Typography>
        </Box>
      
        
         <Box sx={{width:'50%',margin:'auto'}}>
         <Typography 
        color="primary"
        variant="h6">Copyright</Typography>
         <CopyrightIcon sx={{fontSize:'20px'}} color="primary"/>
          <Typography variant='h6' color="primary">2024 Kit Fuderich</Typography>
         </Box>
         
    
      </Box>
      <Box sx={{textAlign:'center',left:'90%',margin:'20px'}}>
      <Button 
      variant="contained" 
      onClick={() => scrollToSection(topRef)}><ArrowCircleUpIcon/></Button>
      </Box>
     
     
    </>
  );
};

export default LandingPage;