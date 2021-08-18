
import './App.css';
import Navbar from './pages/home-page/Navbar';
import AkcijeDarivanja from './pages/akcije-darivanja/AkcijeDarivanja';
import TransfuzijskiCentri from './pages/transfuzijski-centri/TransfuzijskiCentri'
import Login from './pages/login/login'
import KrvneGrupe from './pages/krvne-grupe/krvneGrupe'
import Rjecnik from './pages/rjecnik/Rjecnik'
import KreirajRacun from './pages/kreiraj-racun/KreirajRacun'
import KakoPomaze from './pages/kako-pomaze/kakoPomaze'
import HomePage from './pages/home-page/HomePage'
import faq from './pages/faq/FAQ'
import Vodic from './pages/vodic/Vodic'
import ZastoDarovati from './pages/zasto-darovati/ZastoDarivati'
import ProcesDarivanja from './pages/proces-darivanja/ProcesDarivanja'
import Apozitivna from './pages/krvne-grupe/APozitivna'
import Aneg from './pages/krvne-grupe/ANegativna'
import AdminProfile from './pages/DashboardView'
import Bpos from './pages/krvne-grupe/BPozitivna'
import Bneg from './pages/krvne-grupe/BNegativna'
import ABpos from './pages/krvne-grupe/ABPozitivna'
import ABneg from './pages/krvne-grupe/ABNegativna'
import nulaPos from './pages/krvne-grupe/NulaPozitivna'
import nulaNeg from './pages/krvne-grupe/NulaNegativna'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import ProtectedRoute from './pages/protected-route/ProtectedRoute'
import GlobalStyles from './components/GlobalStyles';
import theme from './theme';
import { ThemeProvider } from '@material-ui/core';
import Account from './pages/Account'
import ZaboravljenaLozinka from './pages/zaboravljena-lozinka/ZaboravljenaLozinka'
import KreiranjeAkcijeDarivanja  from './pages/akcije-darivanja/KreiranjeAkcijeDarivanja';
import UserProfile from './pages/UserDashboard/index'
import Izvjestaji from './pages/izvjestaji/IzvjestajiLayout'
import KrvneGrupeLayout from './pages/krvne-grupe/KrvneGrupeLayout'

function App() {

  return (
   <Router> 
     <Switch>
       <Route path='/' exact component={HomePage} />
       <Route path='/akcije-darivanja' exact component={AkcijeDarivanja} />
       <Route path='/transfuzijski-centri' exact component={TransfuzijskiCentri} />
       <Route path='/login' exact component={Login} />
       <Route path='/kreiraj-racun' exact component={KreirajRacun} />
       <Route path='/krvne-grupe' exact component={KrvneGrupe} />
       <Route path='/rjecnik' exact component={Rjecnik} />
       <Route path='/kako-pomaze' exact component={KakoPomaze} />
       <Route path='/proces-darivanja' exact component={ProcesDarivanja} />
       <Route path='/zasto-darovati' exact component={ZastoDarovati} />
       <Route path='/a-pozitivna' exact component={Apozitivna} />
       <Route path='/a-negativna' exact component={Aneg} />
       <Route path='/b-pozitivna' exact component={Bpos} />
       <Route path='/b-negativna' exact component={Bneg} />
       <Route path='/ab-pozitivna' exact component={ABpos} />
       <Route path='/ab-negativna' exact component={ABneg} />
       <Route path='/nula-pozitivna' exact component={nulaPos} />
       <Route path='/nula-negativna' exact component={nulaNeg} />
       <Route path='/vodic' exact component={Vodic} />
       <Route path='/faq' exact component={faq} />
       <Route path='/app/account' exact component={Account} />
       <Route path = '/app/kreiraj-akciju-darivanja-krvi' exact component = {KreiranjeAkcijeDarivanja}/>
       <Route path='/zaboravljena-lozinka' exact component={ZaboravljenaLozinka} />  
       
       <ThemeProvider theme={theme}>
          <GlobalStyles />
            <ProtectedRoute path='/izvjestaji' component={Izvjestaji}/> 
            <ProtectedRoute path='/admin' component={AdminProfile}/>
            <ProtectedRoute path='/user' component={UserProfile} /> 
            <ProtectedRoute path='/krvne-grupe-korisnici' component={KrvneGrupeLayout}/>
        </ThemeProvider>
      </Switch>
   </Router>
  );
}

export default App;
