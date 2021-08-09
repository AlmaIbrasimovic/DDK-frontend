import React, { useState } from 'react';
import clsx from 'clsx';
import moment from 'moment';
import { v4 as uuid } from 'uuid';
import DarivaociDetalji from '../darivaoci-detalji/DarivaociDetalji'
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
  }
}));

const ZadnjeRegistrovaniKorisnici = ({ className, ...rest }) => {
  const classes = useStyles();
  const [korisnikID, setKorisnikID] = React.useState([])
  const [darivaociLista, setDarivaociLista] = React.useState([])

  React.useEffect(() => {
    axios.get('http://localhost:8080/korisnici/zadnjiRegistrovani', {
    }).then(response => {
        setDarivaociLista(response.data);
    }).catch(err => {
        toast.error(err.response.toString(), {position: toast.POSITION.TOP_RIGHT})
    })
  }, []);

  const showModal = (id) => {
    setKorisnikID (id)
    document.getElementById("prikaziDetalje").classList.toggle('is-active')
  };

  const closeModal = () => {
    document.getElementById("prikaziDetalje").classList.toggle('is-active')
  };
  
  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardHeader title="Zadnje registrovani korisnici" />
      <Divider />
        <Box minWidth={800}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <h1>Ime i prezime</h1>
                </TableCell>
                <TableCell>
                  <h1>Kontakt telefon</h1>
                </TableCell>
                <TableCell>
                  <h1>Krvna grupa</h1>
                </TableCell>
                <TableCell>
                  <h1>Datum registracije</h1>
                </TableCell>
                <TableCell>
                  <h1>Detalji</h1>
                </TableCell>                
              </TableRow>
            </TableHead>
            <TableBody>
              {darivaociLista.map((darivaoc) => (
                <TableRow
                  hover
                  key={darivaoc.id}
                >
                  <TableCell>
                    {darivaoc.ime + " " + darivaoc.prezime}
                  </TableCell>
                  <TableCell>
                    {darivaoc.kontaktTelefon}
                  </TableCell>
                  <TableCell>
                    {darivaoc.krvnaGrupa}
                  </TableCell>
                  <TableCell>
                    {darivaoc.datumKreiranjaRacuna}
                  </TableCell>
                  <TableCell>
                      <Button size="medium" color="secondary" variant="outlined" onClick={() => showModal(darivaoc.id)}>Prikaži </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
              <div id ="prikaziDetalje" class="modal">
                    <div class="modal-background"></div>
                        <div class="modal-card">
                        <header class="modal-card-head">
                            <p class="modal-card-title">Podaci o darivaocu</p>
                            <button class="delete" aria-label="close" onClick={() => closeModal()}></button>
                        </header>
                        <footer class="modal-card-foot">
                          <DarivaociDetalji korisnikID = {korisnikID}/>
                        </footer>      
                    </div>
                </div>
          </Table>
        </Box>    
    </Card>
  );
};

ZadnjeRegistrovaniKorisnici.propTypes = {
  className: PropTypes.string
};

export default ZadnjeRegistrovaniKorisnici;
