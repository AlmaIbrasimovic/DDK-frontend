import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Container,Grid,Avatar} from '@material-ui/core';
import PeopleIcon from '@material-ui/icons/People';
import CardMedia from '@material-ui/core/CardMedia';
import ButtonBase from '@material-ui/core/ButtonBase';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './priznanja.css'

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    backgroundColor: 'white',
    color:'black',
    borderRadius: '15px',
    textAlign: 'center',
    marginBottom: '1.2%'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black'
   
  },
  cover: {
    width: 151,
  },
  pos: {
    marginBottom: 12,
  },
  image: {
    width: 220,
    height: 150,
    marginLeft: '10%',
    marginTop: '8%'
  }
});

export default function Priznanja() {
  const classes = useStyles();
  const value = 8;

  return (
    <Card className={classes.root}>
      <Container maxWidth={false}>
        <Grid
          container
          spacing={0}
          justify = "center"
        >
          <Grid
            item
            lg={6}
            md={6}
            justify = "center"
            xs={6}
          >
            <div className = "progress-div" style={{ width: "52%"}}>
                <p>Zlatni znak</p>
                <CircularProgressbar value={value} minValue = {0} maxValue={75} text={'8/75'}/> 
                <p>Srebrena plaketa</p>        
                <CircularProgressbar value={value} minValue = {0} maxValue={37} text={'8/37'}>Alma</CircularProgressbar>
             </div>      
          </Grid>
         
        </Grid>
      </Container>
    </Card>
  );
}
