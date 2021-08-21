import React, { useState } from 'react';
import clsx from 'clsx';
import axios from 'axios'
import {toast} from 'react-toastify';
import PropTypes from 'prop-types';
import {
  Box,
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

const useStyles = makeStyles(() => ({
  root: {
    borderRadius: '15px',
    overflowX: 'auto'
  },
  actions: {
    justifyContent: 'flex-end',
  
  }
}));

const Obavjestenja = ({ className, ...rest }) => {
  const classes = useStyles();
  const [akcijeDarivanjaKrvi, setAkcijeDarivanjaKrvi] = React.useState([])

  React.useEffect(() => {
    axios.get('https://blood-donation-backend-ck.herokuapp.com/akcija_darivanja_krvi/lista', {
    }).then(response => {
      if (response.data.length <= 4) setAkcijeDarivanjaKrvi(response.data)
      else if (response.data.length > 4){
        var temp = []
        for (var j = 0; j<4; j++) {
          temp[j] = response.data[j]
        }
        setAkcijeDarivanjaKrvi(temp)
      }
    }).catch(err => {
      console.log(err)
      toast.error(err.response.toString(), {position: toast.POSITION.TOP_RIGHT})
    })
  }, []);

  
  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardHeader title="Obavještenja" />
      <Divider />
        <Box minWidth={650}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <h1>Naziv</h1>
                </TableCell>
                <TableCell>
                <h1>Datum</h1>
                </TableCell>
                <TableCell>
                <h1>Vrijeme</h1>
                </TableCell>
                <TableCell>
                <h1>Lokacija</h1>
                </TableCell>
                <TableCell>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {akcijeDarivanjaKrvi.map((akcija) => (
                <TableRow
                  hover
                  key={akcija.id}
                >
                <TableCell>
                  {akcija.naslov}
                </TableCell>
                <TableCell>
                  {akcija.datum}
                </TableCell>
                <TableCell>
                  {akcija.pocetak + " do " + akcija.kraj}
                </TableCell>
                <TableCell>
                  {akcija.grad + " , " + akcija.adresa}
                </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>    
    </Card>
  );
};

Obavjestenja.propTypes = {
  className: PropTypes.string
};

export default Obavjestenja;
