import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import 'normalize.css';
import './App.scss';

import Login from './screens/Login'
import Invoices from './screens/Invoices'
import Invoice from './screens/Invoice'

import Navbar from './components/Navbar'

function App() {

  const userAuth = true;

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
        <Navbar/>
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
