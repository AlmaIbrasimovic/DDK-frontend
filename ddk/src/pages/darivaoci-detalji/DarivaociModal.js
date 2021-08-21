import React, { useState } from 'react';
import clsx from 'clsx';
import moment from 'moment';
import { v4 as uuid } from 'uuid';
import Paper from '@material-ui/core/Paper';
import axios from 'axios'
import {toast} from 'react-toastify';
import DarivaociDetalji from './DarivaociDetalji'
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

const DarivaociModal = ({ className, ...rest }) => {
  const classes = useStyles();
  const [korisnikID, setKorisnikID] = React.useState([])
  const [darivaociLista, setDarivaociLista] = React.useState([])
  const [krvnaGrupa, setKrvnaGrupa] = React.useState('')

  const krvneGrupe = [
    { value: 'sve', label: 'Sve' },
    { value: '0+', label: '0+' },
    { value: '0-', label: '0-' },
    { value: 'A+', label: 'A+' },
    { value: 'A-', label: 'A-' },
    { value: 'B+', label: 'B+' },
    { value: 'B-', label: 'B-' },
    { value: 'AB+', label: 'AB+' },
    { value: 'AB-', label: 'AB-' }
  ]

  const showModal = (id) => {
    setKorisnikID (id)
    document.getElementById("prikaziDetaljeModal").classList.toggle('is-active')
  };

  const handleChange = (event) => {
    setKrvnaGrupa(event.value);
    axios.get(`https://blood-donation-backend-ck.herokuapp.com/korisnici/krvna_grupa/${event.value}`, {
    }).then(response => {
        setDarivaociLista(response.data);
    }).catch(err => {
        toast.error(err.response.toString(), {position: toast.POSITION.TOP_RIGHT})
    })
  };

  const closeModal = () => {
    document.getElementById("prikaziDetaljeModal").classList.toggle('is-active')
  };
  
  React.useEffect(() => {
    axios.get('https://blood-donation-backend-ck.herokuapp.com/korisnici', {headers: {"Authorization" : `Bearer ${JSON.parse(localStorage.getItem("token"))}`}})
    .then(response => {
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
      <h6 className = "pretrazi">Pretraži po krvnoj grupi: </h6>
      <Select maxMenuHeight={100} id = "selectKrvnaGrupa"
          onChange={handleChange}
          options={krvneGrupe} 
      />
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

DarivaociModal.propTypes = {
  className: PropTypes.string
};

export default DarivaociModal;
