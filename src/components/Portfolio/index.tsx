import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import Profile from '../Mathan.jpg';
import { useTypewriter } from 'react-simple-typewriter';
import Contact from '../Contact';
import AboutMe from '../AboutMe';
import Education from '../Education';
import Skills from '../Skills';
import Projects from '../Projects';
import Certification from '../Certification';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from '../Footer';

const Portfolio: React.FC = () => {
  const [text] = useTypewriter({
    words: ['Welcome!!!'],
  });

  const [displayContent, setDisplayContent] = useState(false); // State to manage displaying content

  useEffect(() => {
    AOS.init();
    // After animation is complete, set displayContent to true
    setTimeout(() => {
      setDisplayContent(true);
    }, 2000); // Adjust the timeout according to your animation duration
  }, []);

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
      {displayContent && ( // Display other components when displayContent is true
        <>
          <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img
              src={Profile}
              alt="Profile1"
              width={'300ch'}
              style={{ borderRadius: '50%' }}
              data-aos="flip-up" 
            /> <br />
          </Box>
          <Contact />
          <br />
          <AboutMe />
          <Education />
          <Skills />
          <Projects />
          <Certification /> 
          <Footer/>
        </>
      )}
    </>
  );
}

export default Portfolio;
