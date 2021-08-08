import React, {Component} from 'react'
import {withStyles} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Container} from '@material-ui/core';
import axios from 'axios'

const useStyles = (theme) => ({
    root: {
        height: '30vh',
        
    },
});

export class AkcijaDarivanjaKrviDetalji extends Component {
    constructor(props) {
        super(props)
        this.state = {
            grad: '',
            adresa: '',
            datum: '',
            pocetak: '',
            kraj:'',            
        }; 
    }

    componentDidUpdate(prevProps) {
        if (this.props.akcijaDarivanjaID !== prevProps.akcijaDarivanjaID) {
          axios.get(`http://localhost:8080/akcija_darivanja_krvi/${this.props.akcijaDarivanjaID}`, {
        }).then(response => {
            console.log(response.data)
            this.setState({ grad : response.data.grad});
            this.setState({ adresa: response.data.adresa});
            this.setState({ datum: response.data.datum});
            this.setState({ pocetak: response.data.pocetak});
            this.setState({ kraj: response.data.kraj});
         
        }).catch(err => { 
        })
        }
    }
    render() {
        
        const {classes} = this.props;
        return (
                <Container overflowY="auto">
                
                <Grid className = {classes.root}
                    item
                    lg={12}
                    md={12}
                    sm={12}
                    xs={12}
                >
                <Typography variant="h6">
                    <b>Grad održavanja: </b> {this.state.grad}
                </Typography>    
                <Typography variant="h6">
                    <b>Adresa održavanja: </b> {this.state.adresa}
                </Typography>    
                <Typography variant="h6">
                    <b>Datum održavanja:</b> {this.state.datum}
                </Typography>
                <Typography variant="h6">
                    <b>Početak akcije: </b> {this.state.pocetak}
                </Typography>
                <Typography variant="h6">
                    <b>Kraj akcije:</b> {this.state.kraj}
                </Typography>                 
          </Grid>
   
      </Container>
    );}
}

export default withStyles(useStyles)(AkcijaDarivanjaKrviDetalji);