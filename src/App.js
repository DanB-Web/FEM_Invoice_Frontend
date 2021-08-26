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
      <div className="App">
        <Login></Login>
      </div>
    );
  }

  return (
    <Router>
      <div className="App">
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
