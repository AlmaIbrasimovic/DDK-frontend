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
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

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

export default function KorisnikInfo() {
  const classes = useStyles();
  const { t } = useTranslation();

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
                Podaci o {t('darivaocu.1')}
              </Typography>
              <Typography variant="h5">
                <b>Datum rođenja: </b>23.10.1996.
              </Typography>    
              <Typography variant="h5">
                <b>Spol: </b>Žensko
              </Typography>
              <Typography variant="h5">
                <b>Krvna grupa:</b> 0+
              </Typography>
              <Typography variant="h5">
                <b>Posljednje {t('darivanje.1')} krvi:</b> 05.02.2021.
              </Typography>   
              <Typography variant="h5">
                <b>Sljedeće {t('darivanje.1')} krvi</b> 05.06.2021.
              </Typography>       
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
              <img className={classes.image} alt="complex" src="/static/images/bloodDonorHero.png" />
            </ButtonBase>
          </CardActions>
          </Grid>  
          
        </Grid>
      </Container>
    </Card>
  );
}
