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
    naziv: 'Darivanje krvi',
    datum: '23.10.2020.',
    vrijeme: '14:00'    ,
    lokacija: 'Paromlinska 3, Sarajevo'
  },
  {
    id: uuid(),
    naziv: 'Darivanje krvi',
    datum: '23.10.2020.',
    vrijeme: '14:00'    ,
    lokacija: 'Paromlinska 3, Sarajevo'
  },
  {
    id: uuid(),
    naziv: 'Darivanje krvi',
    datum: '23.10.2020.',
    vrijeme: '14:00'    ,
    lokacija: 'Paromlinska 3, Sarajevo'  
  },
  {
    id: uuid(),
    naziv: 'Darivanje krvi',
    datum: '23.10.2020.',
    vrijeme: '14:00'    ,
    lokacija: 'Paromlinska 3, Sarajevo' 
  },
  {
    id: uuid(),
    naziv: 'Darivanje krvi',
    datum: '23.10.2020.',
    vrijeme: '14:00'    ,
    lokacija: 'Paromlinska 3, Sarajevo'  
  }
];

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
  const [orders] = useState(data);

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
              {orders.map((order) => (
                <TableRow
                  hover
                  key={order.id}
                >
                  <TableCell>
                    {order.naziv}
                  </TableCell>
                  <TableCell>
                    {order.datum}
                  </TableCell>
                  <TableCell>
                    {order.vrijeme}
                  </TableCell>
                  <TableCell>
                    {order.lokacija}
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
