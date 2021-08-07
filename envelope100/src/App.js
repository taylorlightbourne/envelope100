import React from 'react';
import Navbar from './components/Navbar';
import Index from './components/Index';
import RegisterSignUp from './components/RegisterSignUp';
import RegisterPayment from './components/RegisterPayment'
import Login from './components/Login';
import Home from './components/Home';
import BinderList from './components/Budgeting/BinderList';
import ErrorSection from './components/ErrorSection';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <div>
      <Router>
          <Navbar />
          <Switch>
            <Route path='/' exact component={Index} />
            <Route path='/registersignup' exact component={RegisterSignUp} />
            <Route path='/registerpayment' exact component={RegisterPayment} />
            <Route path='/login' exact component={Login} />
            <Route path='/home' exact component={Home} />
            <Route path='/binders' component={BinderList} />
            <Route path="/error" component={ErrorSection} />
            <Route path="/*" component={ErrorSection} />
          </Switch>
      </Router>
    </div>
  );
}

export default App;
