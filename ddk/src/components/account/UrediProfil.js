import { useState } from 'react';
import {
  Card,
  CardContent,
  Grid,
  TextField
} from '@material-ui/core';
import './UrediProfil.css'
import axios from 'axios'
import {toast} from 'react-toastify';

toast.configure()

const kantoni = [
  {
    value: '',
    label: 'Poništi odabir',
  },
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

const UrediProfil = (props) => {
  const [values, setValues] = useState({
    email: '',
    telefon: '',
    adresaPrebivalista: '',
    mjestoPrebivalista: '',
    kantonPrebivalista: '',
    zanimanje:'',
    userName: ''
  });

  const urediProfil = () => {{   
    axios.patch(`http://localhost:8080/korisnici/${JSON.parse(localStorage.getItem("userID"))}`, {
      adresaPrebivalista: values.adresaPrebivalista,
      mjestoPrebivalista: values.mjestoPrebivalista,
      kantonPrebivalista: values.kantonPrebivalista,
      zanimanje: values.zanimanje,
      kontaktTelefon: values.telefon,
      korisnickoIme: values.userName,
      emailAdresa: values.email
  }).then(response => {
    console.log(response.status)
    if (response.status === 200 || response.status === 201) toast.success('Uspješno ažuriran profil!', {position: toast.POSITION.TOP_RIGHT})

}).catch(err => {
  console.log(err)
    if (err.response.data.message != null) toast.error(err.response.data.message.toString(), {position: toast.POSITION.TOP_RIGHT})
    if (err.response.data.errors != null)  toast.error(err.response.data.errors.toString(), {position: toast.POSITION.TOP_RIGHT})
})}
}

const handleChange = (event) => {
  setValues({
    ...values,
    [event.target.name]: event.target.value
  });
};

  return (
    <form
      autoComplete="off"
      validate
      {...props}
    >
      <Card>
      
        <CardContent>
          <Grid
            container
            spacing={3}
          >
          <Grid
            item
            md={6}
            xs={12}
          >
          <TextField
            fullWidth
            label="Email adresa"
            name="email"
            onChange={handleChange}
            value={values.email}
            variant="outlined"
            />
          </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Kontakt telefon"
                name="telefon"
                onChange={handleChange}
                type="number"
                value={values.telefon}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Mjesto prebivališta"
                name="mjestoPrebivalista"
                onChange={handleChange}
                value={values.mjestoPrebivalista}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Adresa prebivališta"
                name="adresaPrebivalista"
                onChange={handleChange}
                value={values.adresaPrebivalista}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Kanton prebivališta"
                name="kantonPrebivalista"
                onChange={handleChange}
                select
                value={values.kantonPrebivalista}
                variant="outlined"
              >
                {kantoni.map((option) => (
                  <option
                    key={option.value}
                    value={option.value}
                  >
                    {option.label}
                  </option>
                ))}
              </TextField>
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Korisničko ime"
                name="userName"
                onChange={handleChange}
                value={values.userName}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={12}
              xs={12}
            >
              <TextField
                fullWidth
                label="Zanimanje"
                name="zanimanje"
                onChange={handleChange}
                value={values.zanimanje}
                variant="outlined"
              />
            </Grid>
          </Grid>
        </CardContent>
        
        <button id = "buttonOK" class="button" onClick={() => urediProfil()}>Spremi podatke</button>

      </Card>
      </form>
  );
};

export default UrediProfil;
