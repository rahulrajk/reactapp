import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div class="login-box">
        <img src='avatar' className='avatar'></img>
        <h1>Login</h1>
        <p>Username</p>
        <input type="text" name="" placeholder="Enter your username"></input>
        <p>Password</p>
        <input type="password" name="" placeholder="Enter your password"></input><br/>
        <input type="submit" name="" value="Login"></input>
        <a href="#">Lost your password</a><br/>
        <a href="#">Don't have any account</a>    
        </div>
      </div>
    );
  }
}

export default App;
