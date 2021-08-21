import React, {Component} from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import {withStyles} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import Title from '@material-ui/icons/ListAlt';
import Address from '@material-ui/icons/Home';
import InputAdornment from '@material-ui/core/InputAdornment';
import './KreiranjeAkcijeDarivanja.scss'
import Update from '@material-ui/icons/DynamicFeed';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import axios from 'axios'
import {toast} from 'react-toastify';
import 'rc-time-picker/assets/index.css';

toast.configure()

const useStyles = (theme) => ({
    root: {
        height: '100%',  
        display: 'flex',
        alignItems: 'center',
    },
   
    paper: {
        margin: theme.spacing(3, 1),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width:'100%',
        fontSize: '11', 
    },
    buttonAzuriraj: {
        marginTop: '25px',  
        color: 'red'
    },
    avatar: {      
        backgroundColor:'rgb(204, 0, 0)'
    },

    form: {
        width: '90%', 
    }
});

export class AzuriranjeAkcijeDarivanja extends Component {
    constructor(props) {
        super(props)
        this.state = {
            naslov: '',
            grad: '',
            adresa: '',
            datum: '',
            pocetak: '',
            kraj: ''
        }
    }

    azurirajAkcijuDarivanja = () => {
        axios.patch(`https://blood-donation-backend-ck.herokuapp.com/akcija_darivanja_krvi/${this.props.akcijaID}`, {
            naslov: this.state.naslov,
            adresa: this.state.adresa,
            grad: this.state.grad,
            datum: this.state.datum,
            pocetak: this.state.pocetak,
            kraj: this.state.kraj

        }).then(response => {
            if (response.status === 200 || response.status === 201) toast.success('Akcija darivanja krvi uspješno ažurirana!', {position: toast.POSITION.TOP_RIGHT})
            
        }).catch(err => {
           
            toast.error(err.response.data.toString(), {position: toast.POSITION.TOP_RIGHT})
            if (err.response.data.message != null) toast.error(err.response.data.message.toString(), {position: toast.POSITION.TOP_RIGHT})
            if (err.response.data.errors != null)  toast.error(err.response.data.errors.toString(), {position: toast.POSITION.TOP_RIGHT})
        })
    }
    
    handleChange = (e) => {

        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        const {classes} = this.props;
        
        return (
            <div className = "azuriraj-akciju-div" >
                <Container maxWidth="md" className={classes.container} alignItems="center" justify="center" overflowY="auto">
                <CssBaseline />
                <div className={classes.paper}>
                <form className={classes.form}>
                    <Grid container spacing={1} >
                        <Grid item align="center" lg={12} md={12} sm={12}>
                            <TextField
                                variant="outlined"
                                margin='normal'
                                fullWidth
                                value={this.state.naslov}
                                id="naslov"
                                label="Naslov"
                                name="naslov"
                                onChange={e => this.handleChange(e)}
                                className={classes.input}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <Title/>
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </Grid>
                        <Grid item align="center" lg={6} md={4} sm={12}>
                            <TextField
                                variant="outlined"
                                margin='normal'
                                size = 'small'
                                value={this.state.grad}
                                id="grad"
                                label="Grad održavanja"
                                name="grad"
                                onChange={e => this.handleChange(e)}
                                className={classes.input}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <LocationCityIcon/>
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </Grid>
                        
                        
                        <Grid item align="center" lg={6} md={4} sm={12}>
                            <TextField
                                variant="outlined"
                                margin='normal'
                                size = 'small'                             
                                value={this.state.adresa}
                                id="adresa"
                                label="Adresa održavanja"
                                name="adresa"
                                onChange={e => this.handleChange(e)}
                                className={classes.input}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <Address/>
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </Grid>
                        <Grid item lg={12} md={4} sm={12} align="center">
                            <TextField
                                variant="outlined"
                                margin='normal'
                                fullWidth
                                type="date"
                                value={this.state.datum}
                                id="datum"
                                label="Datum održavanja akcije"
                                name="datum"
                                onChange={e => this.handleChange(e)}
                                className={classes.input}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </Grid>
                        <Grid item lg={6} md={4} sm={12} align="center">
                            <TextField
                                variant="outlined"
                                margin='normal'
                                fullWidth
                                id="pocetak"
                                label="Početak održavanja akcije"
                                name="pocetak"
                                type="time"
                                value={this.state.pocetak}
                                onChange={e => this.handleChange(e)}
                                className={classes.textField}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                inputProps={{
                                    step: 300
                                }}
                            />
                        </Grid>
                        <Grid item lg={6} md={4} sm={12} align="center">
                            <TextField
                                variant="outlined"
                                margin='normal'
                                fullWidth
                                id="kraj"
                                label="Kraj održavanja akcije"
                                name="kraj"
                                type="time"
                                value={this.state.kraj}
                                onChange={e => this.handleChange(e)}
                                className={classes.textField}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                inputProps={{
                                    step: 300
                                }}
                            />
                        </Grid>
                    </Grid>
                    <Button variant="outlined" color="secondary" className={classes.buttonAzuriraj} onClick={this.azurirajAkcijuDarivanja}>
                        <Update />
                        Ažuriraj akciju
                    </Button>
                </form>
              </div>
            </Container>
            </div>            
        );
    }
}

export default withStyles(useStyles)(AzuriranjeAkcijeDarivanja);