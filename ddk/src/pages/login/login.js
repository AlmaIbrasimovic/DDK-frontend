import React, {Component} from 'react'
import SigninPIC from '../../assets/img/login.png';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import {withStyles} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import InputAdornment from '@material-ui/core/InputAdornment';
import EmailIcon from '@material-ui/icons/Email';
import PasswordIcon from '@material-ui/icons/VpnKey';
import './login.css'

import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';


const useStyles = (theme) => ({
    root: {
        height: '100vh',
    },
    image: {
        backgroundImage: `url(${SigninPIC})`,
        backgroundRepeat: 'no-repeat',
        backgroundColor: theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: 'contain',
        backgroundPosition: 'left',
        
    },
    paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor:'rgb(204, 0, 0)'

    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1)
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
                <Grid item xs={false} sm={4} md={7} className={classes.image}/>
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <div className={classes.paper}>
                        <Avatar className={classes.avatar}>
                            <LockOutlinedIcon/>
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Prijava na račun
                        </Typography>
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
                            <button class="button">
                              Prijavi se
                              <div class="button__horizontal"></div>
                              <div class="button__vertical"></div>
                            </button>
                            
                        </form>
                    </div>
                </Grid>
            </Grid>
        );
    }
}

export default withStyles(useStyles)(login);