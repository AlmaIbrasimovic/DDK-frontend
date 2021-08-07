import React from 'react';
import {
  Container,
  Grid,
  makeStyles
} from '@material-ui/core';
import Page from '../../components/Page';
import ZadnjeRegistrovaniKorisnici from './ZadnjeRegistrovaniKorisnici';
import TopBar from '../../TopBar'
import TotalCustomers from './TotalCustomers';
import UkupnoDarivaoca from './UkupnoDarivaoca'
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    paddingTop: theme.spacing(5),
    height: '100%',
    width: '83%',
    marginLeft: '17%',
    ['@media (max-width:1280px)']: { 
      width: '100%',
      marginLeft: '0%',
    }
  }
}));

const Dashboard = () => {
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
            sm={12}
            xl={3}
            xs={12}
          >
          <UkupnoDarivaoca />
          </Grid>
          <Grid
            item
            lg={6}
            md={6}
            sm={12}
            xl={3}
            xs={12}
          >
          <UkupnoDarivaoca />
          </Grid>  
          <Grid
            item
            lg={12}
            md={12}
            md={12}
            xl={9}
            xs={12}
          >
            <ZadnjeRegistrovaniKorisnici />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
};

export default Dashboard;
