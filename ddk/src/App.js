
import './App.css';
import Navbar from './pages/home-page/Navbar';
import AkcijeDarivanja from './pages/akcije-darivanja/AkcijeDarivanja';
import TransfuzijskiCentri from './pages/transfuzijski-centri/TransfuzijskiCentri'
import Login from './pages/login/login'
import KrvneGrupe from './pages/krvne-grupe/krvneGrupe'
import Rjecnik from './pages/rjecnik/rjecnik'
import KreirajRacun from './pages/kreiraj-racun/KreirajRacun'
import KakoPomaze from './pages/kako-pomaze/kakoPomaze'
import HomePage from './pages/home-page/HomePage'
import faq from './pages/faq/faq'
import Vodic from './pages/vodic/vodic'
import ZastoDarovati from './pages/zasto-darovati/zastoDarivati'
import ProcesDarivanja from './pages/proces-darivanja/procesDarivanja'
import Apozitivna from './pages/a-pozitivna/aPozitivna'
import Aneg from './pages/a-negativna/aNegativna'
import Bpos from './pages/b-pozitivna/bPozitivna'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'


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
       <Route path='/faq' exact component={faq} />
       <Route path='/vodic' exact component={Vodic} />
       <Route path='/zasto-darovati' exact component={ZastoDarovati} />
       <Route path='/a-pozitivna' exact component={Apozitivna} />
       <Route path='/a-negativna' exact component={Aneg} />
       <Route path='/b-pozitivna' exact component={Bpos} />
      </Switch>
   </Router>
  );
}

export default App;
