import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Indexo from './components/Indexo';
import Infoz from './components/Infoz';
import Loadigz from './components/Loadigz';
import Smsz from './components/Smsz';
import Succes from './components/Succes';
function App() {
  
  return (
    <div className="App">
     <Router>
      <Switch>

        <Route exact path="/" component={Indexo}/>
        
        <Route exact path="/Infos" component={Infoz} />
        
        <Route exact path="/loading" component={Loadigz} />
        <Route exact path="/sms" component={Smsz} />
        <Route exact path="/Succes" component={Succes}/>
      </Switch>

     </Router>

    </div>
  );
}

export default App;
