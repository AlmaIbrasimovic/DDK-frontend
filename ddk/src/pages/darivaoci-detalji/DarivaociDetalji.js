import React, {Component} from 'react'
import {withStyles} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Container} from '@material-ui/core';
import axios from 'axios'

const useStyles = (theme) => ({
    root: {
        height: '50vh'
    },
});

export class DarivaociDetalji extends Component {
    constructor(props) {
        super(props)
        this.state = {
            imePrezime: '',
            datumRodenja: '',
            mjestoRodenja: '',
            spol: '',
            krvnaGrupa:'',
            brojDarivanjaKrvi:'',
            mjestoPrebivalista:'',
            adresaPrebivalista: '',
            kantonPrebivalista: '',
            kontaktTelefon:'',
            emailAdresa: '',
            zanimanje: '',
            posljednjeDarivanjeKrvi:'',
            sljedeceDarivanjeKrvi:''
        }; 
    }

    componentDidUpdate(prevProps) {
        if (this.props.korisnikID !== prevProps.korisnikID) {
          axios.get(`http://localhost:8080/korisnici/${this.props.korisnikID}`, {
        }).then(response => {
            this.setState({ imePrezime: response.data.ime + " " + response.data.prezime});
            this.setState({ datumRodenja: response.data.datumRodenja});
            this.setState({ mjestoRodenja: response.data.mjestoRodenja});
            this.setState({ spol: response.data.spol});
            this.setState({ krvnaGrupa: response.data.krvnaGrupa});
            this.setState({ brojDarivanjaKrvi: response.data.brojDarivanjaKrvi});
            this.setState({ mjestoPrebivalista: response.data.mjestoPrebivalista});
            this.setState({ adresaPrebivalista: response.data.adresaPrebivalista});
            this.setState({ kantonPrebivalista: response.data.kantonPrebivalista});
            this.setState({ kontaktTelefon: response.data.kontaktTelefon});
            this.setState({ emailAdresa: response.data.emailAdresa});
            this.setState({ zanimanje: response.data.zanimanje});
            this.setState({ posljednjeDarivanjeKrvi: response.data.posljednjeDarivanjeKrvi});
            this.setState({ sljedeceDarivanjeKrvi: response.data.sljedeceDarivanjeKrvi});
        }).catch(err => { 
        })
        }
    }
    render() {
        
        const {classes} = this.props;
        return (
                <Container  alignItems="center" justify="center" overflowY="auto">
                <Grid  container spacing={6}>
                <Grid className = {classes.root}
                    item
                    lg={12}
                    md={12}
                    sm={12}
                    xs={12}
                >
                <Typography variant="h5">
                    <b>Ime i prezime: </b> {this.state.imePrezime}
                </Typography>    
                <Typography variant="h5">
                    <b>Datum rođenja: </b> {this.state.datumRodenja}
                </Typography>    
                <Typography variant="h5">
                    <b>Mjesto rođenja:</b> {this.state.mjestoRodenja}
                </Typography>
                <Typography variant="h5">
                    <b>Spol: </b> {this.state.spol}
                </Typography>
                <Typography variant="h5">
                    <b>Krvna grupa:</b> {this.state.krvnaGrupa}
                </Typography>
                <Typography variant="h5">
                    <b>Broj darivanja krvi:</b> {this.state.brojDarivanjaKrvi}
                </Typography>
                <Typography variant="h5">
                    <b>Mjesto prebivališta:</b> {this.state.mjestoPrebivalista}
                </Typography>
                <Typography variant="h5">
                    <b>Adresa prebivališta:</b> {this.state.adresaPrebivalista}
                </Typography>
                <Typography variant="h5">
                    <b>Kanton prebivališta:</b> {this.state.kantonPrebivalista}
                </Typography>
                <Typography variant="h5">
                    <b>Kontakt telefon:</b> {this.state.kontaktTelefon}
                </Typography>
                <Typography variant="h5">
                    <b>E-mail adresa:</b> {this.state.emailAdresa}
                </Typography>
                <Typography variant="h5">
                    <b>Zanimanje:</b> {this.state.zanimanje}
                </Typography>
                <Typography variant="h5">
                    <b>Posljednje darivanje krvi:</b> 05.02.2021.
                </Typography>   
                <Typography variant="h5">
                    <b>Sljedeće darivanje krvi</b> 05.06.2021.
                </Typography>       
          </Grid>
        </Grid>
      </Container>
    );}
}

export default withStyles(useStyles)(DarivaociDetalji);