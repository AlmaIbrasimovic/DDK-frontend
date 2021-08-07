import React, { useState } from 'react';
import clsx from 'clsx';
import moment from 'moment';
import { v4 as uuid } from 'uuid';

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


const data = [
  {
    id: uuid(),
    imePrezime: 'Alma Ibrašimović',
    telefon: '061/718-733',
    krvnaGrupa: '0+'    
  },
  {
    id: uuid(),
    imePrezime: 'Alma Ibrašimović',
    telefon: '061/718-733',
    krvnaGrupa: '0+'    
  },
  {
    id: uuid(),
    imePrezime: 'Alma Ibrašimović',
    telefon: '061/718-733',
    krvnaGrupa: '0+'    
  },
  {
    id: uuid(),
    imePrezime: 'Alma Ibrašimović',
    telefon: '061/718-733',
    krvnaGrupa: '0+'    
  },
  {
    id: uuid(),
    imePrezime: 'Alma Ibrašimović',
    telefon: '061/718-733',
    krvnaGrupa: '0+'    
  },
  {
    id: uuid(),
    imePrezime: 'Alma Ibrašimović',
    telefon: '061/718-733',
    krvnaGrupa: '0+'    
  }
];

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
  const [orders] = useState(data);

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
                <h1>Detalji</h1>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.map((order) => (
                <TableRow
                  hover
                  key={order.id}
                >
                  <TableCell>
                    {order.imePrezime}
                  </TableCell>
                  <TableCell>
                    {order.telefon}
                  </TableCell>
                  <TableCell>
                    {order.krvnaGrupa}
                  </TableCell>
                  <TableCell>
                      <Button size="medium" color="secondary" variant="outlined">Prikaži  </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>    
    </Card>
  );
};

ZadnjeRegistrovaniKorisnici.propTypes = {
  className: PropTypes.string
};

export default ZadnjeRegistrovaniKorisnici;
