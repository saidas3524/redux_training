import React, { Component } from 'react';
import logo from './logo.svg';
import { connect } from 'react-redux';
import './App.css';
import { GetUser } from "./actions/simpleAction";
import Footer  from './Footer';
import  Header  from './Header';
import User  from './User';

class App extends Component {

  runButton = (event)=>{
    this.props.GetUser();
  }
  render() {
    return (
      <div className="App">
          <Header/>
          <User/>
          <Footer/>
      </div>
    );
  }
}
const mapStateToProps = state=>({
  ...state
})
const mapDispatchToProps = dispatch =>({
  GetUser:() => dispatch(GetUser({name:"testuser"}))
})
export default connect(mapStateToProps,mapDispatchToProps)(App);
