import { useState } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import { trans } from './utils/modeTransition'

import 'normalize.css';
import './App.scss';

import Login from './screens/Login'
import Invoices from './screens/Invoices'
import Invoice from './screens/Invoice'

import Navbar from './components/Navbar'

function App() {

  const [mode, setMode] = useState('light')
  const userAuth = true;

  //TOGGLE LIGHT/DARK MODE
  const toggleMode = () => {
    if (mode === 'light') {
      trans()
      setMode('dark')
      document.documentElement.setAttribute('data-theme', 'dark')
    } else {
      trans()
      setMode('light')
      document.documentElement.setAttribute('data-theme', 'light')
    }
  }

  if (!userAuth) {
    return (
      <div className="app-container">
        <Login></Login>
      </div>
    );
  }

  return (
    <Router>
      <div className="app-container">
        <Navbar mode={mode} toggleMode={toggleMode}/>
        <Switch>
          <Route path="/" exact component={Invoices}/>
          <Route path="/invoice/:id" component={Invoice}/>
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
