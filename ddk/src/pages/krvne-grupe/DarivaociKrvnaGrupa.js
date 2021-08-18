import React, { useState } from 'react';
import clsx from 'clsx';
import moment from 'moment';
import { v4 as uuid } from 'uuid';
import Paper from '@material-ui/core/Paper';
import axios from 'axios'
import {toast} from 'react-toastify';
import DarivaociDetalji from '../darivaoci-detalji/DarivaociDetalji'
import Select from 'react-select';
import PropTypes from 'prop-types';
import './DarivaociModal.css'
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
  TableContainer,
  makeStyles
} from '@material-ui/core';

toast.configure()



const useStyles = makeStyles(() => ({
  root: {
    borderRadius: '15px',
    overflowX: 'auto',  

  
  },
  actions: {
    justifyContent: 'flex-end'
  },
  table: {
    marginTop: '20px'
  }
}));

const DarivaociKrvnaGrupa =({props,  className, ...rest }) => {
  const classes = useStyles();
  
  const [korisnikID, setKorisnikID] = React.useState([])
  const [darivaociLista, setDarivaociLista] = React.useState([])
  const [krvnaGrupa, setKrvnaGrupa] = React.useState('')

  const showModal = (id) => {
    setKorisnikID (id)
    document.getElementById("prikaziDetaljeModal").classList.toggle('is-active')
  };


  const closeModal = () => {
    document.getElementById("prikaziDetaljeModal").classList.toggle('is-active')
  };
  
  React.useEffect(() => {
    axios.get(`http://localhost:8080/korisnici/krvna_grupa/${JSON.parse(localStorage.getItem("krvnaGrupa"))}`, {
    }).then(response => {
        setDarivaociLista(response.data);
    }).catch(err => {
        toast.error(err.response.toString(), {position: toast.POSITION.TOP_RIGHT})
    })
  }, []);

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >

      <Divider />
        <Box minWidth={600}>
        <TableContainer component={Paper}>
          <Table className = {classes.table} onRowSelection={(rows) => this._onRowSelection(rows)}>
            <TableHead>
              <TableRow>
                <TableCell>
                  <h1>Ime i prezime</h1>
                </TableCell>
                <TableCell>
                    <h1>Kontakt telefon</h1>
                </TableCell>
                <TableCell>
                <   h1>Krvna grupa</h1>
                </TableCell>
                <TableCell>
                    <h1>Detalji</h1>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {darivaociLista.map((darivaoc ,index) => (
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
                    <Button size="medium" color="secondary" variant="outlined" onClick={() => showModal(darivaoc.id)}>Prikaži</Button>
                </TableCell>
      
                </TableRow>
              ))}
            </TableBody>
            <div id ="prikaziDetaljeModal" class="modal">
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
          </TableContainer>
        </Box>    
    </Card>
  );
};

DarivaociKrvnaGrupa.propTypes = {
  className: PropTypes.string
};

export default DarivaociKrvnaGrupa;
