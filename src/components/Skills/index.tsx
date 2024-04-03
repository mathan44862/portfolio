import React from 'react';
import { Box, Divider, Typography } from '@mui/material';
import { DiHtml5, DiCss3, DiJava, DiMongodb, DiReact, DiNodejs, DiMysql } from 'react-icons/di';

const Skills: React.FC = () => {
    return (
        <>
            <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Typography variant="h5" sx={{ marginBottom: '20px' }}>Skills</Typography>
                <Box sx={{ width: '70%', display: 'flex', justifyContent: 'space-between' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <DiJava size={60} color="#007396" />
                        <Typography variant="subtitle1">Java</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <DiReact size={60} color="#61DAFB" />
                        <Typography variant="subtitle1">React</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <DiNodejs size={60} color="#68A063" />
                        <Typography variant="subtitle1">Node.js</Typography>
                    </Box>
                </Box>
                <Box sx={{ width: '70%', display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <DiHtml5 size={60} color="#E34F26" />
                        <Typography variant="subtitle1">HTML5</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <DiCss3 size={60} color="#1572B6" />
                        <Typography variant="subtitle1">CSS3</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <DiMongodb size={60} color="#589636" />
                        <Typography variant="subtitle1">MongoDB</Typography>
                    </Box>

                </Box>
                <Divider sx={{ width: '70%', height: '4px', backgroundColor: '#a3b18a', margin: '20px 0' }} />
            </Box>
        </>
    );
}

export default Skills;
