import React, { useState } from 'react';
import clsx from 'clsx';
import axios from 'axios'
import {toast} from 'react-toastify';
import PropTypes from 'prop-types';
import {
  Box,
  Button,
  Card,
  CardHeader,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  makeStyles
} from '@material-ui/core';

toast.configure()

const useStyles = makeStyles(() => ({
  root: {
    borderRadius: '15px',
    overflowX: 'auto'
  },
  actions: {
    justifyContent: 'flex-end'
  },
  button: {
      marginTop: '20px',
      marginBottom: '20px',
      marginRight: '6.5%',
      float: 'right'
  }
}));

const ZavrseneAkcijeDarivanja = ({ className, ...rest }) => {
  const classes = useStyles();
  const [akcijaID, setAkcijaID] = React.useState([])
  const [zavrseneAkcijeDarivanja, setZavrseneAkcijeDarivanja] = React.useState([])

  React.useEffect(() => {
    axios.get('http://localhost:8080/zavrseneAkcijeDarivanja', {
    }).then(response => {
        setZavrseneAkcijeDarivanja(response.data);
    }).catch(err => {
        toast.error(err.response.toString(), {position: toast.POSITION.TOP_RIGHT})
    })
  }, []);

  const generisiIzvjestaj = (id) => {
    setAkcijaID (id)
    axios.get(`http://localhost:8080/generisi_izvjestaj/${id}`, {
        }).then(response => {
            toast.success("Uspješno generisan izvještaj!", {position: toast.POSITION.TOP_RIGHT})
        }).catch(err => { 
            toast.error("Greška prilikom generisanja izvještaja!", {position: toast.POSITION.TOP_RIGHT})
        })      
  };

  const generisiGodisnjiIzvjestaj = () => {
    
    axios.get('http://localhost:8080/generisi_izvjestaj/godisnji', {
        }).then(response => {
            toast.success("Uspješno generisan izvještaj!", {position: toast.POSITION.TOP_RIGHT})
        }).catch(err => { 
            toast.error("Greška prilikom generisanja izvještaja!", {position: toast.POSITION.TOP_RIGHT})
        })      
  };

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardHeader title="Završene akcije darivanja krvi"/>
      <Divider />
        <Box minWidth={800}>
          <Table>
            <TableHead>
              <TableRow>
              <TableCell>
                  <h1>Naslov</h1>
                </TableCell>
                <TableCell>
                  <h1>Grad održavanja</h1>
                </TableCell>
                <TableCell>
                  <h1>Adresa održavanja</h1>
                </TableCell>
                <TableCell>
                  <h1>Datum održavanja</h1>
                </TableCell>
                <TableCell>
                  <h1>Generiši izvještaj</h1>
                </TableCell>                
              </TableRow>
            </TableHead>
            <TableBody>
              {zavrseneAkcijeDarivanja.map((akcija) => (
                <TableRow
                  hover
                  key={akcija.id}
                >
                  <TableCell>
                    {akcija.naslov}
                  </TableCell>
                  <TableCell>
                    {akcija.grad}
                  </TableCell>
                  <TableCell>
                    {akcija.adresa}
                  </TableCell>
                  <TableCell>
                    {akcija.datum}
                  </TableCell>
                  <TableCell>
                      <Button size="medium" color="secondary" variant="outlined" onClick={() => generisiIzvjestaj(akcija.id)}>Generiši</Button>
                  </TableCell>
                  
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <Button  className={classes.button} size="medium" color="secondary" variant="outlined" onClick={() => generisiGodisnjiIzvjestaj()}>Generiši godišnji izvještaj</Button>
        </Box>    
    </Card>
  );
};

ZavrseneAkcijeDarivanja.propTypes = {
  className: PropTypes.string
};

export default ZavrseneAkcijeDarivanja;
