
import './App.css';
import Navbar from './pages/home-page/HomePage';
import AkcijeDarivanja from './pages/akcije-darivanja/AkcijeDarivanja';
import TransfuzijskiCentri from './pages/transfuzijski-centri/TransfuzijskiCentri'
import Login from './pages/login/login'
import KreirajRacun from './pages/kreiraj-racun/KreirajRacun'
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
      </Switch>
   </Router>
  );
}

export default App;
