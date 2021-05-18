import { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Grid,
  TextField
} from '@material-ui/core';
import './accountProfile.css'
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

const AccountProfileDetails = (props) => {
  const [values, setValues] = useState({
    email: '',
    telefon: '',
    adresaPrebivalista: '',
    mjestoPrebivalista: '',
    kantonPrebivalista: '',
    zanimanje:''
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  return (
    <form
      autoComplete="off"
      noValidate
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
            required
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
                required
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
                required
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
                required
                select
                SelectProps={{ native: true }}
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
                label="Zanimanje"
                name="zanimanje"
                onChange={handleChange}
                required
                value={values.zanimanje}
                variant="outlined"
              />
            </Grid>
          </Grid>
        </CardContent>

        <button id = "buttonOK" class="button is-success">Spremi podatke</button>

      </Card>
    </form>
  );
};

export default AccountProfileDetails;
