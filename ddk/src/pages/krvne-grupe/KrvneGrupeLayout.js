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
    paddingTop: theme.spacing(4),
    paddingLeft: theme.spacing(1),
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
            lg={4}
            md={6}
            xl={6}
            xs={12}
        >
          <KrvneGrupeDetalji krvnaGrupa={"0+"}/>         
        </Grid>
        <Grid
            item
            lg={4}
            md={6}
            xl={6}
            xs={12}
        >
          <KrvneGrupeDetalji krvnaGrupa={"0-"}/>         
        </Grid>
        <Grid
            item
            lg={4}
            md={6}
            xl={6}
            xs={12}
        >
          <KrvneGrupeDetalji krvnaGrupa={"A+"}/>         
        </Grid>
        <Grid
            item
            lg={4}
            md={6}
            xl={6}
            xs={12}
        >
          <KrvneGrupeDetalji krvnaGrupa={"A-"}/>         
        </Grid>
        <Grid
            item
            lg={4}
            md={6}
            xl={6}
            xs={12}
        >
          <KrvneGrupeDetalji krvnaGrupa={"B+"}/>         
        </Grid>
        <Grid
            item
            lg={4}
            md={6}
            xl={6}
            xs={12}
        >
          <KrvneGrupeDetalji krvnaGrupa={"B-"}/>         
        </Grid>
        <Grid
            item
            lg={4}
            md={6}
            xl={6}
            xs={12}
        >
          <KrvneGrupeDetalji krvnaGrupa={"AB+"}/>         
        </Grid>
        <Grid
            item
            lg={4}
            md={6}
            xl={6}
            xs={12}
        >
          <KrvneGrupeDetalji krvnaGrupa={"AB-"}/>         
        </Grid>
        </Grid>
      </Container>
    </Page>
  );
};

export default KrveGrupeLayout;
