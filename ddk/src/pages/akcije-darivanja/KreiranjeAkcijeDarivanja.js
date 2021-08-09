import React, {Component} from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import {withStyles} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import Title from '@material-ui/icons/ListAlt';
import Address from '@material-ui/icons/Home';
import Time from '@material-ui/icons/Schedule';
import Typography from '@material-ui/core/Typography';
import InputAdornment from '@material-ui/core/InputAdornment';
import './KreiranjeAkcijeDarivanja.css'
import './KreiranjeAkcijeDarivanja.scss'
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import logo from '../../assets/img/logo.png';
import Lottie from 'react-lottie';
import kreiranjeDDK from '../../lotties/kreiranjeDDK.json'
import Container from '@material-ui/core/Container';
import axios from 'axios'
import {toast} from 'react-toastify';
import TimePicker from 'rc-time-picker';
import LocalizationProvider from '@material-ui/lab/LocalizationProvider';
import AdapterDateFns from '@material-ui/lab/AdapterDateFns';
import DesktopTimePicker from '@material-ui/lab/DesktopTimePicker';
import 'rc-time-picker/assets/index.css';
import moment from "moment";

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

    avatar: {      
        backgroundColor:'rgb(204, 0, 0)'
    },

    form: {
        width: '90%',
        marginTop: theme.spacing(6),

        
    }
});

const animationOptions = {
    loop: true,
    autoplay: true,
    animationData: kreiranjeDDK,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };


export class KreiranjeAkcijeDarivanja extends Component {
    constructor(props) {
        super(props)
        this.state = {
            naslov: '',
            grad: '',
            adresa: '',
            datum: '',
            pocetak: '',
            kraj: '',
            proba:''
        }
        this.handleBack = this.handleBack.bind(this); 
    }

    kreirajAkcijuDarivanja = () => {
        axios.post('http://localhost:8080/akcija_darivanja_krvi', {
            naslov: this.state.naslov,
            adresa: this.state.adresa,
            grad: this.state.grad,
            datum: this.state.datum,
            pocetak: this.state.pocetak,
            kraj: this.state.kraj

        }).then(response => {
            if (response.status === 200 || response.status === 201) toast.success('Akcija DDK uspješno kreirana!', {position: toast.POSITION.TOP_RIGHT})
            
        }).catch(err => {
            console.log(err.response)
            toast.error(err.response.data.toString(), {position: toast.POSITION.TOP_RIGHT})
            if (err.response.data.message != null) toast.error(err.response.data.message.toString(), {position: toast.POSITION.TOP_RIGHT})
            if (err.response.data.errors != null)  toast.error(err.response.data.errors.toString(), {position: toast.POSITION.TOP_RIGHT})
        })
    }

    handleBack() {
        this.props.history.goBack();
    }
    
    handleChange = (e) => {

        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        const {classes} = this.props;
        
        return (
            <div className = "kreiraj-akciju-div" >
                <Container maxWidth="md" className={classes.container} alignItems="center" justify="center" overflowY="auto">
                <CssBaseline />
                <div className={classes.paper}>
                    <Lottie 
                        options={animationOptions}
                        height={220}
                        width={220}
                    />
                <form className={classes.form}>
                    <Grid container spacing={1} >
                        <Grid item align="center" lg={4} md={4} sm={12}>
                            <TextField
                                variant="outlined"
                                margin='normal'
                                required
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
                        <Grid item align="center" lg={4} md={4} sm={12}>
                            <TextField
                                variant="outlined"
                                margin='normal'
                                required
                                fullWidth
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
                        
                        
                        <Grid item align="center" lg={4} md={4} sm={12}>
                            <TextField
                                variant="outlined"
                                margin='normal'
                                required
                                fullWidth                               
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
                        <Grid item lg={4} md={4} sm={12} align="center">
                            <TextField
                                variant="outlined"
                                margin='normal'
                                required
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
                        <Grid item lg={4} md={4} sm={12} align="center">
                            <TextField
                                variant="outlined"
                                margin='normal'
                                required
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
                        <Grid item lg={4} md={4} sm={12} align="center">
                            <TextField
                                variant="outlined"
                                margin='normal'
                                required
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
                    <button className="button-kreiraj-akciju" onClick={this.kreirajAkcijuDarivanja}>Kreiraj akciju darivanja</button>
                    <div className="navigationButtonsLeft">
                        <button class="button is-danger is-outlined" onClick={this.handleBack}>
                            <span class="icon is-small">
                            <i class="fas fa-backward"></i>
                            </span>
                            <span>Nazad</span>
                        </button>
                    </div>
                    
                </form>
              </div>
            </Container>
            </div>            
        );
    }
}

export default withStyles(useStyles)(KreiranjeAkcijeDarivanja);