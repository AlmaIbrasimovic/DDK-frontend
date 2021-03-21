import React from 'react';
import {
  Container,
  Grid,
  makeStyles
} from '@material-ui/core';
import Page from '../../components/Page';
import Obavjestenja from './Obavjestenja';
import Sidebar from '../UserSidebar'
import KorisnikInfo from './KorisnikInfo'
import Priznanja from './Priznanja'
import BrojDarivanja from './BrojDarivanja'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    paddingTop: theme.spacing(5),
    width: '83.5%',
    marginLeft: '16.5%',

    ['@media (max-width:1280px)']: { 
      width: '100%',
      marginLeft: '0%',
    }
  }
}));

const UserDashboard = () => {
  const classes = useStyles();

  return (
    <Page
      className={classes.root}
      title="Dashboard"
    >
      <Sidebar/>
      <Container maxWidth={false}>
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            lg={6}
            md={6}
            xl={3}
            xs={12}
          >
            <KorisnikInfo />
          </Grid>
          <Grid
            item  
            lg={6}
            md={6}
            xl={3}
            xs={12}
          >
            <BrojDarivanja />
          </Grid>  
          <Grid
            item
            lg={6}
            md={12}
            xl={9}
            xs={12}
          >
            <Obavjestenja />
          </Grid>
          <Grid
            item
            lg={6}
            md={12}
            xl={9}
            xs={12}
          >
             <Priznanja />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
};

export default UserDashboard;
