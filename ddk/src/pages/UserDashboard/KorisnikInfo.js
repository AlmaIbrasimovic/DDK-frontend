import React, { useState, useEffect } from "react";
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
import axios from 'axios'
import {toast} from 'react-toastify';

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

export default function KorisnikInfo(props) {
  const classes = useStyles();
  const { t } = useTranslation();
  const [datumRodenja, setDatumRodenja] = React.useState();
  const [spol, setSpol] = React.useState();
  const [krvnaGrupa, setKrvnaGrupa] = React.useState();
  const [posljednjeDarivanje, setPosljednjeDarivanja] = React.useState();
  const [sljedeceDarivanje, setSljedeceDarivanje] = React.useState();

  React.useEffect(() => {
    axios.get(`http://localhost:8080/korisnici/${JSON.parse(localStorage.getItem("userID"))}`, {
    }).then(response => {
      setDatumRodenja (response.data.datumRodenja);
      setSpol (response.data.spol)
      setKrvnaGrupa (response.data.krvnaGrupa)
      setPosljednjeDarivanja ("21-08-2021")
      setSljedeceDarivanje ("19-02-2021")
      if (response.data.spol === 'Z') setSpol ("Žensko")
      else if (response.data.spol == 'M') setSpol("Muško")
    }).catch(err => {
      toast.error(err.response.toString(), {position: toast.POSITION.TOP_RIGHT})
    })
  }, []);


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
                <b>Datum rođenja: </b> {datumRodenja}
              </Typography>    
              <Typography variant="h5">
                <b>Spol: </b> {spol}
              </Typography>
              <Typography variant="h5">
                <b>Krvna grupa:</b> {krvnaGrupa}
              </Typography>
              <Typography variant="h5">
                <b>Posljednje {t('darivanje.1')} krvi:</b> {posljednjeDarivanje}
              </Typography>   
              <Typography variant="h5">
                <b>Sljedeće {t('darivanje.1')} krvi</b> {sljedeceDarivanje}
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
