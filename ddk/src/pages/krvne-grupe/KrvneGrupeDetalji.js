import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Container, Grid, Avatar } from '@material-ui/core';
import PeopleIcon from '@material-ui/icons/People';
import CardMedia from '@material-ui/core/CardMedia';
import ButtonBase from '@material-ui/core/ButtonBase';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import axios from 'axios'
import {toast} from 'react-toastify';
import DarivaociKrvnaGrupa from './DarivaociKrvnaGrupa'
import './KrvneGrupeDetalji.css'

toast.configure()

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    backgroundColor: '#e53935',
    color: 'white',
    borderRadius: '15px'
  },
  title: {
    fontSize: 17,
    
    color: 'white'
  },
  cover: {
    width: 151,
  },
  pos: {
    marginBottom: 12,
  },
  image: {
    width: 128,
    height: 128,
    paddingTop: '25%',
    marginLeft: '40%'
  }
});

export default function KrveGrupeDetalji(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const { t } = useTranslation();
  const [brojDarivaoca, setBrojDarivaoca] = React.useState([])

  React.useEffect(() => {
    axios.get(`http://localhost:8080/korisnici/krvna_grupa/${props.krvnaGrupa}`, {
      }).then(response => {
        setBrojDarivaoca(response.data.length);
      }).catch(err => {
       
        toast.error(err.response.toString(), {position: toast.POSITION.TOP_RIGHT})
      })
  }, []);
  
  const showModal = () => {
    localStorage.setItem("krvnaGrupa", JSON.stringify(props.krvnaGrupa))
    document.getElementById("prikaziDarivateljeModal").classList.toggle('is-active')
  };

  const closeModal = () => {
      document.getElementById("prikaziDarivateljeModal").classList.toggle('is-active')
  };

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
              <Typography className={classes.title} color="textSecondary" gutterBottom>
                {t('Darivaoci.1')} sa {props.krvnaGrupa} krvnom grupom
              </Typography>
              <Typography variant="h4" component="h2">
                {brojDarivaoca}
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
                <img className={classes.img} alt="complex" src="/static/images/grupe.png" />
              </ButtonBase>
            </CardActions>
          </Grid>
          <Grid
            item
            lg={12}
            md={12}
            sm={12}
            xl={3}
            xs={12}
          >
          <div id ="prikaziDarivateljeModal" class="modal">
            <div class="modal-background"></div>
                <div class="modal-card">
                  <header class="modal-card-head">
                    <p class="modal-card-title">Registrovani {t('darivaoci.1')} krvi</p>
                      <button class="delete" aria-label="close" onClick={() => closeModal()}></button>
                  </header>
                  <section class="modal-card-body">
                    <DarivaociKrvnaGrupa krvnaGrupa={props.krvnaGrupa}/>
                  </section>      
              </div>
          </div>
            <CardActions>
              <Button size="large" variant="contained" onClick={() => showModal()}>Prikaži</Button>
            </CardActions>
          </Grid>
        </Grid>
      </Container>
    </Card>
  );
}
