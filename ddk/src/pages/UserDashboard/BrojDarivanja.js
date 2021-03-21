import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Container,Grid,Avatar} from '@material-ui/core';
import ButtonBase from '@material-ui/core/ButtonBase';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    backgroundColor: 'white',
    color:'black',
    borderRadius: '15px'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black'
   
  },
  number: {
    fontSize: 50,
    fontWeight:'normal',
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
    height: 200,
    marginLeft: '6%',

  },
  buttonHistorija: {
    marginTop: '13.5%'
  }
});

export default function BrojDarivanja() {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <Container maxWidth={false}>
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            lg={6}
            md={6}
            sm={6}
            xl={3}
            xs={6}
          >
            <CardContent>
              <Typography className={classes.title}  gutterBottom>
                Broj darivanja
              </Typography>
              <Typography className = {classes.number} ariant="h5">
                8
              </Typography>    
              <Button className = {classes.buttonHistorija} variant="outlined" size = "large" color="secondary">Historija darivanja</Button>
            </CardContent>
          </Grid>
          <Grid
            item
            lg={6}
            md={6}
            sm={6}
            xl={3}
            xs={6}
            mx="auto"
          >
          <CardActions>
           <ButtonBase className={classes.image}>
              <img className={classes.image} alt="complex" src="/static/images/brojDoniranja.jpg" />
            </ButtonBase>
          </CardActions>
          </Grid> 
        </Grid>
      </Container>
    </Card>
  );
}
