import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Main';

class App extends Component {
  render()
  {
    return(
      <BrowserRouter>
        <Navbar />
        <Main />
      </BrowserRouter>
    )
  }
}

export default App;
