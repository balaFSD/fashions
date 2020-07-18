import React from 'react';
import {Route,Switch} from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Default from './components/Default';
import Cart from './components/Cart/Cart';
import Modal from './components/Modal';

class App extends React.Component{
  render(){
    return(
      <React.Fragment>
        <NavBar/>
        <Switch>
          <Route exact path='/' component={ProductList}/>
          <Route path='/Cart' component={Cart}/>
          <Route path='/details' component={Details}/>
          <Route component={Default}/>
        </Switch>
        <Modal/>
      </React.Fragment>
    );
  }
}

export default App;
