import React, { useEffect } from 'react';
import { Box, Card, CardContent, Typography, CardActions, IconButton, Stack, useMediaQuery, useTheme, Divider } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import Necstaff from './NECStaff.png';
import Findmybus from './Findmybus.png';
import Vmarket from './VMarket.png';
import MovieTicketBook from './Bookmymovie.png';
import 'aos/dist/aos.css';
import Aos from 'aos';

const Projects: React.FC = () => {
    useEffect(() => {
        Aos.init();
      }, []);    
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Card sx={{ maxWidth: isMobile ? 300 : 600, marginBottom: '20px', backgroundColor: '#a3b18a', color: 'white' }} data-aos="fade-up">
                <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>
                    <img src={Necstaff} alt="Project Screenshot" style={{ maxWidth: '100%', height: 'auto' }} />
                </CardActions>
                <CardContent>
                    <Typography variant="h5" gutterBottom>
                        NEC Staff Management
                    </Typography>
                    <Typography variant="body1" color="white">
                        Developing a web application using ReactJS , NodeJS , MongoDB for Nandha Engineering College.Facilities efficient staff attendance tracking and management
                    </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: 'center' }}>
                    <Stack direction={isMobile ? 'column' : 'row'} spacing={2}>
                        <IconButton href="https://github.com/mathan44862/NEC_Staff_Attendance_Management" target="_blank">
                            <GitHubIcon />
                        </IconButton>
                    </Stack>
                </CardActions>
            </Card>
            <Card sx={{ maxWidth: isMobile ? 300 : 600, marginBottom: '20px', backgroundColor: '#a3b18a', color: 'white' }} data-aos="fade-up">
                <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>
                    <img src={Findmybus} alt="Project Screenshot" style={{ maxWidth: '100%', height: 'auto' }} />
                </CardActions>
                <CardContent>
                    <Typography variant="h5" gutterBottom>
                        Find My Bus
                    </Typography>
                    <Typography variant="body1" color="white">
                        Developed a website using HTML , CSS , Node.js and MySQL enables the user to search and book tickets for government , private and town buses based on the address
                    </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: 'center' }}>
                    <Stack direction={isMobile ? 'column' : 'row'} spacing={2}>
                        <IconButton href="https://github.com/mathan44862/Findmybus" target="_blank">
                            <GitHubIcon />
                        </IconButton>
                    </Stack>
                </CardActions>
            </Card>
            <Card sx={{ maxWidth: isMobile ? 300 : 600, marginBottom: '20px', backgroundColor: '#a3b18a', color: 'white' }} data-aos="fade-up">
                <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>
                    <img src={Vmarket} alt="Project Screenshot" style={{ maxWidth: '100%', height: 'auto' }} />
                </CardActions>
                <CardContent>
                    <Typography variant="h5" gutterBottom>
                        V Market
                    </Typography>
                    <Typography variant="body1" color="white">
                        Developed a website using ReactJS and SpringBoot enables the user to preorder or sell the vegetables in online
                    </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: 'center' }}>
                    <Stack direction={isMobile ? 'column' : 'row'} spacing={2}>
                        <IconButton href="https://github.com/mathan44862/vmarket" target="_blank">
                            <GitHubIcon />
                        </IconButton>
                    </Stack>
                </CardActions>
            </Card>
            <Card sx={{ maxWidth: isMobile ? 300 : 600, marginBottom: '20px', backgroundColor: '#a3b18a', color: 'white' }} data-aos="fade-up">
                <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>
                    <img src={MovieTicketBook} alt="Project Screenshot" style={{ maxWidth: '100%', height: 'auto' }} />
                </CardActions>
                <CardContent>
                    <Typography variant="h5" gutterBottom>
                        Movie Ticket Booking
                    </Typography>
                    <Typography variant="body1" color="white">
                        Developed a website using ReactJS, NodeJS and MongoDB enables the user to book the movie ticket in online
                    </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: 'center' }}>
                    <Stack direction={isMobile ? 'column' : 'row'} spacing={2}>
                        <IconButton href="https://github.com/mathan44862/Bookmymovie" target="_blank">
                            <GitHubIcon />
                        </IconButton>
                    </Stack>
                </CardActions>
            </Card>
            <Divider sx={{width:'70%' ,  height: '2px',backgroundColor: 'black' , margin: '20px 0'}}/> 
        </Box>
    );
}

export default Projects;
