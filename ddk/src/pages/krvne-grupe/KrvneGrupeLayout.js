import React, { useState, useEffect } from "react";
import {
  Container,
  Grid,
  makeStyles
} from '@material-ui/core';
import Page from '../../components/Page';
import KrvneGrupeDetalji from './KrvneGrupeDetalji'
import TopBar from '../../TopBar'


const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    paddingTop: theme.spacing(2),
    width: '83.5%',
    marginLeft: '16.5%',

    ['@media (max-width:1280px)']: { 
      width: '100%',
      marginLeft: '0%',
    }
  }
}));

const KrveGrupeLayout = props => {
  const classes = useStyles();

  return (
    <Page
      className={classes.root}
      title="Dashboard"
    >
      <TopBar/>
      <Container maxWidth={false}>
        <Grid
          container
          spacing={3}
        >
        <Grid
            item
            lg={6}
            md={6}
            xl={6}
            xs={12}
        >
          <KrvneGrupeDetalji krvnaGrupa={"0+"}/>
        </Grid>
        </Grid>
      </Container>
    </Page>
  );
};

export default KrveGrupeLayout;
