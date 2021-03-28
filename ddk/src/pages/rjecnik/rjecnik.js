import React from 'react';
import Navbar from '../home-page/Navbar'
import './Rjecnik.css'
import PojamKartica from './PojamKartica'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {withStyles} from '@material-ui/core';
import clsx from 'clsx';
import Pojmovi from './Pojmovi.json'
import { createMuiTheme, colors } from '@material-ui/core';

const useStyles = (theme) => ({
  root: {
    flexGrow: 1,
    paddingBottom: 55,
    backgroundColor: '#f5f5f5'
  },
  paper: {
    color: theme.palette.text.secondary,
    paddingLeft: 15,
  
  },
  navbarDiv: {   
    paddingBottom:140
  }
});

class Rjecnik extends React.Component {

  render() {
    const {classes} = this.props;
    return (
      <div className={clsx(classes.root)}>
        <div className={clsx(classes.navbarDiv)}>
          <Navbar/>
        </div>
       
        <Grid className={clsx(classes.paper)} container spacing={3}>
            {Pojmovi.map((item) => (
              <Grid item xs={12} lg={6} md={6} xl={3}>
                <PojamKartica
                  key={item.title}
                  title={item.title}
                  sadrzaj={item.sadrzaj}
                  />
              </Grid>
            ))}
        </Grid>
    </div>
    );
  }
}

  
export default withStyles(useStyles)(Rjecnik);