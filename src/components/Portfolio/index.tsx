import React from 'react';
import Profile from '../Mathan.jpg';
import Profile1 from './Mathan-removebg-preview.png';
import { useTypewriter } from "react-simple-typewriter";
import { Box, Divider } from '@mui/material';
import AboutMe from '../AboutMe';
import Education from '../Education';
import Skills from '../Skills';

const Portfolio: React.FC = () => {
  const [text] = useTypewriter({
    words: ["Hello!!!"],
  });

  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Rubik+Scribble&display=swap');
          h3 {
            font-family: 'Rubik Scribble', sans-serif;
            margin-left: 15%;
            color: #a3b18a;
            font-size: 40px; /* Default font size */
          }

          @media screen and (max-width: 600px) {
            h3 {
              margin-left: 8%;
              font-size: 25px; /* Reduce font size for smaller screens */
            }
          }
        `}
      </style>
      <h3>{text}</h3>
      <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <img
          src={Profile}
          alt="Profile1"
          width={'300ch'}
          style={{ borderRadius: '50%' }} /> <br />
          {/* <Divider sx={{width:'70%' ,  height: '2px',backgroundColor: 'black' , margin: '20px 0'}}/> */}
      </Box>
      <AboutMe/>
      <Education/>
      <Skills/>
    </>
  );
}

export default Portfolio;
