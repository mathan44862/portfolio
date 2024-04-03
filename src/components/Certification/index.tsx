import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Divider, Grid, Paper, Typography } from '@material-ui/core';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: 'auto', // Center the component horizontally
    padding: theme.spacing(2),
    maxWidth: '800px', // Optional: Add a maximum width to prevent the component from stretching too much
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  heading: {
    marginBottom: theme.spacing(2),
    textAlign: 'center', // Center the text horizontally
  },
}));

const awardsData = [
  {
    prize: 'First Prize',
    eventName: 'TechNeds ',
    collegeName: 'Nandha engineering college',
    eventDescription: 'Coding Competition',
  },
  {
    prize: 'Second Prize',
    eventName: 'Hackathon',
    collegeName: 'Nandha engineering college',
    eventDescription: 'For successfully creating dynamic website ',
  },
  {
    prize: 'Third Prize',
    eventName: 'Project Presentation',
    collegeName: 'Kongu engineering college',
    eventDescription: 'For project presentation event (Find my bus) ',
  },
  {
    prize: 'Third Prize',
    eventName: 'Code Red Debug',
    collegeName: 'Nandha engineering college',
    eventDescription: 'For  identifying and debugging the errors ',
  },
  // Add more awards as needed
];

const AwardsComponent: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h5" className={classes.heading}>Awards & Certification</Typography>
      <Grid container spacing={3} justify="center">
        {awardsData.map((award, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <Paper className={classes.paper}>
              <EmojiEventsIcon color="primary" fontSize="large" />
              <Typography variant="h6">{award.prize}</Typography>
              <Typography variant="body1">
                {award.eventName} - {award.collegeName}
              </Typography>
              <Typography variant="body2">{award.eventDescription}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default AwardsComponent;
