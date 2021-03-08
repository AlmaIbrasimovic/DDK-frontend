import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import MenuItem from '@material-ui/core/MenuItem';
import '../../pages/login/login.scss'
import './kreirajRacun.css'
import logo from '../../assets/img/logo.png';

const spolovi = [
  {
    value: 'Musko',
    label: 'Muško',
  },
  {
    value: 'Zensko',
    label: 'Žensko',
  }
];

const kantoni = [
  {
    value: 'USK',
    label: 'USK',
  },
  {
    value: 'PK',
    label: 'PK',
  },
  {
    value: 'TK',
    label: 'TK',
  },
  {
    value: 'ZDK',
    label: 'ZDK',
  },
  {
    value: 'BPK',
    label: 'BPK',
  },
  {
    value: 'SBK',
    label: 'SBK',
  },
  {
    value: 'HNK',
    label: 'HNK',
  },
  {
    value: 'ZHK',
    label: 'ZHK',
  },
  {
    value: 'KS',
    label: 'KS',
  },
  {
    value: 'K10',
    label: 'K10',
  }
];

const krvneGrupe = [
  {
    value: 'AB+',
    label: 'AB+',
  },
  {
    value: 'AB-',
    label: 'AB-',
  },
  {
    value: 'A+',
    label: 'A+',
  },
  {
    value: 'A-',
    label: 'A-',
  },
  {
    value: 'B+',
    label: 'B+',
  },
  {
    value: 'B-',
    label: 'B-',
  },
  {
    value: '0+',
    label: '0+',
  },
  {
    value: '0-',
    label: '0-',
  },
];

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  form: {
    width: '180%',
    marginTop: theme.spacing(3),
    backgroundColor:'white'
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  }
}));

export default function KreirajRacun() {
  const classes = useStyles();
  const [spol, setSpol] = React.useState('');
  const [krvnaGrupa, setKrvnaGrupa] = React.useState('');
  const [kanton, setKanton] = React.useState('');

  const handleChange = (event) => {
    setSpol(event.target.value);
  };

  const handleChangeKrvnaGrupa = (event) => {
    setKrvnaGrupa(event.target.value);
  };

  const handleChangeKanton = (event) => {
    setKanton(event.target.value);
  };

  return (
    <div className = "kreiraj-racun-div">
      <Container component="main" maxWidth="xs" className={classes.container}>
      <CssBaseline />
      <div className={classes.paper}>
        <a href="/" id="bottle" onclick="document.location=this.id+'.html';return false;" >
          <img src={logo} class="image is-64x64" />
        </a>
        <Typography component="h1" variant="h5">
         
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4}>
              <TextField
                autoComplete="fname"
                name="ime"
                variant="outlined"
                required
                fullWidth
                id="ime"
                label="Ime"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="prezime"
                label="Prezime"
                name="prezime"
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                id="standard-select-spol"
                select
                fullWidth
                variant="outlined"
                label="Spol"
                value={spol}
                onChange={handleChange}
              >
                {spolovi.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                autoComplete="fname"
                name="datumRod"
                variant="outlined"
                required
                fullWidth
                id="datumRod"
                label="Datum rođenja"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="jmbg"
                label="JMBG"
                name="jmbg"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="mjestoRod"
                label="Mjesto rođenja"
                name="mjestoRod"
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                autoComplete="fname"
                name="mjestoPreb"
                variant="outlined"
                required
                fullWidth
                id="mjestoPreb"
                label="Mjesto prebivališta"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="adresaPreb"
                label="Adresa prebivališta"
                name="adresaPreb"
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12} sm={4}>
            <TextField
                id="standard-select-kanton"
                select
                fullWidth
                variant="outlined"
                label="Kanton previbališta"
                value={kanton}
                onChange={handleChangeKanton}
              >
                {kantoni.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="telefon"
                label="Kontakt telefon"
                name="telefon"
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12} sm={4}>
            <TextField
                id="standard-select-currency"
                select
                fullWidth
                variant="outlined"
                label="Krvna grupa"
                value={krvnaGrupa}
                onChange={handleChangeKrvnaGrupa}
              >
                {krvneGrupe.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                variant="outlined"f                
                fullWidth
                id="broj"
                label="Broj darivanja krvi"
                name="broj"
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email adresa"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="lozinka"
                label="Lozinka"
                type="password"
                id="lozinka"
                autoComplete="current-password"
              />
            </Grid>
          </Grid>
          <a href="#" class="button-login">Kreiraj račun</a>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/login" variant="body2">
                Već imate račun? Prijavite se.
              </Link>
            </Grid>
          </Grid>
        </form>
        <a className = "kreiraj-racun-a" href="https://www.freepik.com/vectors/background">Background vector created by freepik - www.freepik.com</a>
      </div>
    </Container>
    </div>
    
  );
}