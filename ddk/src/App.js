
import './App.css';
import Navbar from './pages/home-page/HomePage';
import AkcijeDarivanja from './pages/akcije-darivanja/AkcijeDarivanja';
import TransfuzijskiCentri from './pages/transfuzijski-centri/TransfuzijskiCentri'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'


function App() {
  return (
   <Router>
     <Switch>
       <Route path='/' exact component={Navbar} />
       <Route path='/akcije-darivanja' exact component={AkcijeDarivanja} />
       <Route path='/transfuzijski-centri' exact component={TransfuzijskiCentri} />
      </Switch>
   </Router>
  );
}

export default App;
