import React, { useState, useEffect } from "react";
import {
  Container,
  Grid,
  makeStyles
} from '@material-ui/core';
import Page from '../../components/Page';
import ZavrseneAkcije from './ZavrseneAkcijeDarivanja'
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

const IzvjestajiLayout = props => {
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
            lg={12}
            md={12}
            xl={12}
            xs={12}
        >
          <ZavrseneAkcije/>
        </Grid>
        </Grid>
      </Container>
    </Page>
  );
};

export default IzvjestajiLayout;
