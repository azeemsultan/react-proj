
import './App.css';
import Signup from './Components/Signup';
import { BrowserRouter, Link, Route } from 'react-router-dom'
import SignIn from './Components/Signin';
import Log from './Components/Log';
import First from './Components/First';
import Second from './Components/Second';
import Third from './Components/Third';
import { Button } from '@material-ui/core';

function App() {
  
  return (
    <div>
      
      <BrowserRouter>
     
        <Route path="/login" component={SignIn}/>
        <Route path="/third" component={Third}/>
        <Route path="/second" component={Second}/>
        <Route path="/first" component={First}/>
        <Route path="/" exact={true} component={Signup}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
