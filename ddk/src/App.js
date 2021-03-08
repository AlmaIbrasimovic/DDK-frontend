
import './App.css';
import Navbar from './pages/home-page/HomePage';
import AkcijeDarivanja from './pages/akcije-darivanja/AkcijeDarivanja';
import TransfuzijskiCentri from './pages/transfuzijski-centri/TransfuzijskiCentri'
import Login from './pages/login/login'
import KrvneGrupe from './pages/krvne-grupe/krvneGrupe'
import Rjecnik from './pages/rjecnik/rjecnik'
import KreirajRacun from './pages/kreiraj-racun/KreirajRacun'
import KakoPomaze from './pages/kako-pomaze/kakoPomaze'
import faq from './pages/faq/faq'
import Vodic from './pages/vodic/vodic'
import ZastoDarovati from './pages/zasto-darovati/zastoDarivati'
import ProcesDarivanja from './pages/proces-darivanja/procesDarivanja'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'


function App() {
  return (
   <Router>
     <Switch>
       <Route path='/' exact component={Navbar} />
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
      </Switch>
   </Router>
  );
}

export default App;
