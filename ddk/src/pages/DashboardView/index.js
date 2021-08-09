import React from 'react';
import {
  Container,
  Grid,
  makeStyles
} from '@material-ui/core';
import Page from '../../components/Page';
import ZadnjeRegistrovaniKorisnici from './ZadnjeRegistrovaniKorisnici';
import TopBar from '../../TopBar'
import UkupnoDarivaoca from './UkupnoDarivaoca'
import Chart from "react-google-charts";
import axios from 'axios'
import {toast} from 'react-toastify';

toast.configure()

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
  const [darivanjaPoMjesecu, setDarivanjaPoMjesecu] = React.useState([])

  React.useEffect(() => {
    axios.get('http://localhost:8080/akcija_darivanja_krvi/brojDarivanjaPoMjesecu', {
      }).then(response => {

        const chartData = [['Mjesec', 'Broj darivanja']]
        for (let i = 0; i < response.data.length; i++) {
          chartData.push([i, response.data[i]])
        }
        setDarivanjaPoMjesecu(chartData)        
      }).catch(err => {
       
        toast.error(err.response.toString(), {position: toast.POSITION.TOP_RIGHT})
      })
  }, []);

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
          <Chart              
              height={'225px'}
              chartType="Bar"
              loader={<div>Loading Chart</div>}
              data={darivanjaPoMjesecu}
              options={{
                chart: {
                  title: 'Broj darivanja po mjesecu',                 
                },
                
                colors: ['#e53935'],
              }}              
            />
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
