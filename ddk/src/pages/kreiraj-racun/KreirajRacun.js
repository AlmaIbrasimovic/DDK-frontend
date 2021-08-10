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
import axios from 'axios'
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DatePicker from "react-datepicker";
import 'moment-timezone';
import "react-datepicker/dist/react-datepicker.css";

toast.configure()
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
    marginTop: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    borderRadius: 10,
    padding: theme.spacing(2), 
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
  const [ime, setIme] = React.useState('');
  const [prezime, setPrezime] = React.useState('');
  const [korisnickoIme, setKorisnickoIme] = React.useState('');
  const [krvnaGrupa, setKrvnaGrupa] = React.useState('');
  const [kanton, setKanton] = React.useState('');
  const [datumRodjenja, setDatumRodjenja] = React.useState('');
  const [mjestoRodjenja, setMjestoRodjenja] = React.useState('');
  const [mjestoPrebivalista, setMjestoPrebivalista] = React.useState('');
  const [adresaPrebivalista, setAdresaPrebivalista] = React.useState('');
  const [telefon, setTelefon] = React.useState('');
  const [lozinka, setLozinka] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [brojDarivanja, setBrojDarivanja] = React.useState('');
  const [zanimanje, setZanimanje] = React.useState('');
  
  const handleChange = (event) => {
    setSpol(event.target.value);
  };

  const handleChangeIme = (event) => {
    setIme(event.target.value);
  };

  const handleChangePrezime = (event) => {
    setPrezime(event.target.value);
  };

  const handleChangeKorisnickoIme = (event) => {
    setKorisnickoIme(event.target.value);
  };

  const handleChangeKrvnaGrupa = (event) => {
    setKrvnaGrupa(event.target.value);
  };

  const handleChangeKanton = (event) => {
    setKanton(event.target.value);
  };

  const handleChangeMjestoRodjenja = (event) => {
    setMjestoRodjenja(event.target.value);
  };

  const handleChangeMjestoPrebivalista = (event) => {
    setMjestoPrebivalista(event.target.value);
  };

  const handleChangeAdresaPrebivalista = (event) => {
    setAdresaPrebivalista(event.target.value);
  };

  const handleChangeBrojDarivanja = (event) => {
    setBrojDarivanja(event.target.value);
  };

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleChangeLozinka = (event) => {
    setLozinka(event.target.value);
  };

  const handleChangeTelefon = (event) => {
    setTelefon(event.target.value);
  };

  const handleChangeZanimanje = (event) => {
    setZanimanje(event.target.value);
  };

  const handleChangeDatumRodjenja = (event) => {
    setDatumRodjenja(event.target.value)
  }

  const kreirajRacun = () => {
    var danas = new Date(),
    datumKreiranjaRacuna = danas.getFullYear() + '-' + danas.toLocaleString("en-US", { month: "2-digit" }) + '-' + danas.toLocaleString("en-US", { day : '2-digit'})
    
    axios.post('http://localhost:8080/register', {
        ime: ime,
        prezime: prezime,
        korisnickoIme: korisnickoIme,
        adresaPrebivalista: adresaPrebivalista,
        brojDarivanjaKrvi: brojDarivanja,
        datumKreiranjaRacuna: datumKreiranjaRacuna,
        emailAdresa: email,
        kantonPrebivalista: kanton,
        kontaktTelefon: telefon,
        krvnaGrupa: krvnaGrupa,
        lozinka: lozinka,
        mjestoPrebivalista: mjestoPrebivalista,
        mjestoRodenja: mjestoRodjenja,
        datumRodenja: datumRodjenja,
        slatiNotifikacije: false,
        spol: spol,
        zanimanje: zanimanje,
      }).then(response => {
        if (response.status === 200 || response.status === 201) toast.success('Profil uspješno kreiran!', {position: toast.POSITION.TOP_RIGHT})
      }).catch(err => {
       toast.error(err.response.data.toString(), {position: toast.POSITION.TOP_RIGHT})
      }) 
  }

  return (
    <div className = "kreiraj-racun-div" >
      <Container component="main" maxWidth="xs" className={classes.container}>
      <CssBaseline />
      <div className={classes.paper}>
        <a href="/" id="bottle" onclick="document.location=this.id+'.html';return false;" >
          <img src={logo} class="image is-96x96"/>
        </a>
        <Typography component="h1" variant="h5">
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2} >
            <Grid item xs={12} sm={4} >
              <TextField
                autoComplete="fname"
                name="ime"
                variant="outlined"
                required
                value={ime}
                fullWidth
                id="ime"
                onChange={handleChangeIme}
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
                value = {prezime}
                onChange={handleChangePrezime}
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="korisnickoIme"
                value= {korisnickoIme}
                onChange={handleChangeKorisnickoIme}
                label="Korisničko ime"
                name="korisnickoIme"
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
                id="datumRodjenja"
                label="Datum rođenja"
                type="date"
                fullWidth
                variant="outlined"
                onChange={handleChangeDatumRodjenja}                
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
              }}
            />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="mjestoRodjenja"
                label="Mjesto rođenja"
                name="mjestoRodjenja"
                value={mjestoRodjenja}
                onChange={handleChangeMjestoRodjenja}
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
                value={mjestoPrebivalista}
                onChange={handleChangeMjestoPrebivalista}
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
                value={adresaPrebivalista}
                onChange={handleChangeAdresaPrebivalista}
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
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="telefon"
                label="Kontakt telefon"
                value={telefon}
                onChange={handleChangeTelefon}
                name="telefon"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="zanimanje"
                value={zanimanje}
                onChange={handleChangeZanimanje}
                label="Zanimanje"
                name="zanimanje"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
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
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"f                
                fullWidth
                id="broj"
                label="Broj darivanja krvi"
                name="broj"
                value={brojDarivanja}
                onChange={handleChangeBrojDarivanja}
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
                value={email}
                onChange={handleChangeEmail}
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
                value={lozinka}
                onChange={handleChangeLozinka}
                autoComplete="current-password"
              />
            </Grid>
          </Grid>
          <a href="#" class="button-login" onClick = {kreirajRacun}>Kreiraj račun</a>
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