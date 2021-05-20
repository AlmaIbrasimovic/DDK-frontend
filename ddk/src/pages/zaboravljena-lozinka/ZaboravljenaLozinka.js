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
import Lottie from 'react-lottie';
import zaboravljena from '../../lotties/zaboravljena.json'

const useStyles = (theme) => ({
    root: {
        height: '80vh',  
        marginTop: theme.spacing(-6)
    },
   
    paper: {
        margin: theme.spacing(1, 1),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width:'100%',
        fontSize: '11',
        color:'grey'
    },
    avatar: {      
        backgroundColor:'rgb(204, 0, 0)'
    },
    form: {
        width: '60%',
        marginTop: theme.spacing(4)
    },
    customWidth: {
        maxWidth: 100,
    }
});

const animationOptions = {
    loop: true,
    autoplay: true,
    animationData: zaboravljena,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };


export class ZaboravljenaLozinka extends Component {
    constructor(props) {
        super(props)
        this.state = {
            password: '',
            email: '',
            firstName: '',
            lastName: ''
        }
    }

    handleSubmit = () => {
        {/*    axios.post('http://localhost:8080/user', {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            password: this.state.password,
            email: this.state.email,
        }).then(response => {
            if (response.status === 200 || response.status === 201) toast.success('Your account is successfully created!', {position: toast.POSITION.TOP_RIGHT})
            this.setState({
                password: '',
                email: '',
                firstName: '',
                lastName: ''
            });
        }).catch(err => {
            if (err.response.data.message != null) toast.error(err.response.data.message.toString(), {position: toast.POSITION.TOP_RIGHT})
            if (err.response.data.errors != null)  toast.error(err.response.data.errors.toString(), {position: toast.POSITION.TOP_RIGHT})
        })*/}
    
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        const {classes} = this.props;

        return (
            <Grid container component="main" className={classes.root}>
                <CssBaseline/>
                <Grid item xs={false} sm={12} md={12} />
                    <Grid item xs={12} sm={12} md={12} component={Paper} elevation={6} square>
                        <div className={classes.paper}>
                            <Lottie 
                                options={animationOptions}
                                height={220}
                                width={220}
                            />   
                            <p className = "instruction1">Zaboravili ste svoju lozinku?</p>
                            <p className = "instruction">Unesite svoju email adresu i poslat ćemo vam instrukcije kako da promijenite lozinku.</p>
                        <form className={classes.form}>
                            <TextField
                                variant="standard"
                                margin='normal'
                                required
                                fullWidth
                                value={this.state.email}
                                id="email"
                                label="Email"
                                name="email"
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
                            
                            <a href="#" class="button-login">Pošalji</a>
                        </form>
                        <a className = "zaboravljena-a" href='https://lottiefiles.com/16766-forget-password-animation'>Animacija preuzeta sa:https://lottiefiles.com/16766-forget-password-animation</a>
                    </div>
                </Grid>
            </Grid>
        );
    }
}

export default withStyles(useStyles)(ZaboravljenaLozinka);