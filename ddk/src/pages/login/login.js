import React, {Component} from 'react'
import SigninPIC from '../../assets/img/loginP.jpg';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import {withStyles} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Typography from '@material-ui/core/Typography';
import InputAdornment from '@material-ui/core/InputAdornment';
import EmailIcon from '@material-ui/icons/Email';
import PasswordIcon from '@material-ui/icons/VpnKey';
import './login.css'
import './login.scss'
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import logo from '../../assets/img/logo.png';
import ZaboravljenaLozinka from '../zaboravljena-lozinka/ZaboravljenaLozinka'
import {toast} from 'react-toastify';
import jwt_decode from "jwt-decode";
import axios from 'axios'

toast.configure()

const useStyles = (theme) => ({
    root: {
        height: '100vh',
        
    },
    image: {
        backgroundImage: `url(${SigninPIC})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    
        backgroundColor:
        theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    },
    paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '100vh'
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor:'rgb(204, 0, 0)'

    },
    form: {
        width: '100%',
        marginTop: theme.spacing(5)
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        borderColor: theme.palette.primary.dark,

    },
    customWidth: {
        maxWidth: 200,
      },
    input: {},

});


export class login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            password: '',
            userName: '',
        }
    }

    handleSubmit = () => {{   
            axios.post('http://localhost:8080/login', {
                password: this.state.password,
                username: this.state.userName,
        }).then(response => {
            var token = jwt_decode(response.data.token);
            var userID = token.id;
            var rola = token.role;
            localStorage.setItem("rola", JSON.stringify(rola))
            localStorage.setItem("userID", JSON.stringify(userID))
            localStorage.setItem("loggedIn", 1)
            if (rola == "korisnik") {
                
                this.props.history.push({
                    pathname: '/user',
                    state: {
                    userID: token.id
                    }
                })
            }
            else if (rola == "administrator") {
                this.props.history.push({
                    pathname: '/admin',
                    state: {
                       userID: token.id
                    }
                })
            } 
        }).catch(err => {
            if (err.response.status === 401) toast.error("Pogrešno korisničko ime ili lozinka!", {position: toast.POSITION.TOP_RIGHT})
            else toast.error("Greška!", {position: toast.POSITION.TOP_RIGHT})
        })}
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    showModal = () => {
        document.getElementById("zaboravljenaLozinkaModal").classList.toggle('is-active')
    };
    
    closeModal = () => {
        document.getElementById("zaboravljenaLozinkaModal").classList.toggle('is-active')
    };
    

    render() {
        const {classes} = this.props;

        return (
            <Grid container component="main" className={classes.root}>
                <CssBaseline/>
                <Grid item xs={false} sm={4} md={7} className={classes.image}/>
                    <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                        <div className={classes.paper}>
                        <a href="/" id="bottle" onclick="document.location=this.id+'.html';return false;" >
                            <img src = {logo} class="image is-96x96"/>
                        </a>  
                   
                        <form className={classes.form}>
                            <TextField
                                variant="standard"
                                margin='normal'
                                required
                                fullWidth
                                value={this.state.userName}
                                id="userName"
                                label="Korisničko ime"
                                name="userName"
                                onChange={e => this.handleChange(e)}
                                className={classes.input}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <EmailIcon/>
                                        </InputAdornment>
                                    ),
                                }}
                            />  
                            <TextField
                                variant="standard"
                                margin="normal"
                                required
                                fullWidth
                                value={this.state.password}
                                name="password"
                                label="Lozinka"
                                type="password"
                                id="password"
                                onChange={e => this.handleChange(e)}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <Tooltip title="A digit must occur at least once.
                                            A lower case letter must occur at least once.
                                            An upper case letter must occur at least once.
                                            A special character must occur at least once.
                                            No whitespace allowed in the entire string.
                                            At least 8 characters." classes={{ tooltip: classes.customWidth }}>
                                            <IconButton>
                                                <PasswordIcon />
                                            </IconButton>
                                            </Tooltip>
                                        </InputAdornment>
                                    ),
                                }}
                            />
                            <div id ="zaboravljenaLozinkaModal" class="modal">
                                <div class="modal-background"></div>
                                <div class="modal-card">
                                    <header class="modal-card-head">
                                        <p class="modal-card-title">Zaboravljena lozinka?</p>
                                    <button class="delete" aria-label="close" onClick={this.closeModal}></button>
                                    </header>
                                    <section class="modal-card-body">
                                        <ZaboravljenaLozinka/>
                                    </section>      
                                </div>
                            </div>
                            <a href="#" class="button-login" onClick={() => this.handleSubmit()}>Prijavi se</a>
                            <Grid container className = "login-grid">
                                <Grid item xs>
                                    <Link href="#" variant="body2" onClick={this.showModal}>
                                        Zaboravljena lozinka?
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link href="/kreiraj-racun" variant="body2">
                                        Nemate račun? Kreirajte novi
                                    </Link>
                                </Grid>
                            </Grid>
                        </form>
                        <a className = "login-a" href='https://www.freepik.com/vectors/technology'>Technology vector created by stories - www.freepik.com</a>
                    </div>
                </Grid>
            </Grid>
        );
    }
}

export default withStyles(useStyles)(login);