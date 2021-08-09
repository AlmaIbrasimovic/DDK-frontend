import React, {Component} from 'react'
import {withStyles} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Container} from '@material-ui/core';
import axios from 'axios'
import Delete from '@material-ui/icons/DeleteForever';
import Button from '@material-ui/core/Button';
import {toast} from 'react-toastify';
toast.configure()
const useStyles = (theme) => ({
    root: {
        height: '30vh',
        
    },
    button: {
        marginTop: '25px',   
        color: 'red'
    }
});

export class AkcijaDarivanjaKrviDetalji extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id:'',
            grad: '',
            adresa: '',
            datum: '',
            pocetak: '',
            kraj:'',            
        }; 
    }

    obrisiAkciju = (id) =>{
        axios.delete(`http://localhost:8080/akcija_darivanja_krvi/${id}`)  
            .then(res => {  
                toast.success("Akcija uspješno obrisana", {position: toast.POSITION.TOP_RIGHT})
                
        }).catch(err => { 
            toast.error(err.response.toString(), {position: toast.POSITION.TOP_RIGHT})
        })
    }
    
    componentDidUpdate(prevProps) {
        if (this.props.akcijaDarivanjaID !== prevProps.akcijaDarivanjaID) {
          axios.get(`http://localhost:8080/akcija_darivanja_krvi/${this.props.akcijaDarivanjaID}`, {
        }).then(response => {
            this.setState({ id : response.data.id})
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
        let role = "administrator";
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
                {role === "administrator" ? (
                    <Button variant="outlined" color="secondary" className={classes.button} onClick={() => this.obrisiAkciju(this.state.id)}>
                        <Delete />
                        Obriši akciju
                    </Button>
                ) : (
                <div/>)}       
          </Grid>
      </Container>
    );}
}

export default withStyles(useStyles)(AkcijaDarivanjaKrviDetalji);